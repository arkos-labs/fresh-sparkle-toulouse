import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, ChevronRight, CornerDownLeft, Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { faqData, welcomeMessage, type FAQNode } from "@/config/faqData";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: FAQNode[];
};

function searchFAQ(nodes: FAQNode[], query: string): FAQNode | null {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return null;
  const keywords = normalizedQuery.split(/\s+/).filter((w) => w.length > 2);
  let bestMatch: { node: FAQNode; score: number } | null = null;

  const traverse = (currentNodes: FAQNode[]) => {
    for (const node of currentNodes) {
      const q = node.question.toLowerCase();
      const a = node.answer.toLowerCase();
      let score = 0;
      for (const kw of keywords) {
        if (q.includes(kw)) score += 2;
        if (a.includes(kw)) score += 1;
      }
      if (score > 0) {
        if (!bestMatch || score > bestMatch.score) {
          bestMatch = { node, score };
        }
      }
      if (node.options) traverse(node.options);
    }
  };

  traverse(nodes);
  return bestMatch ? bestMatch.node : null;
}

// Sends via Web3Forms — same system as the Contact page
async function sendViaWeb3Forms(data: {
  nom: string;
  email: string;
  telephone: string;
}) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) throw new Error("Clé Web3Forms manquante");

  const formData = new FormData();
  formData.append("access_key", accessKey);
  formData.append("subject", `Demande de rappel via Chatbot — ${data.nom}`);
  formData.append("from_name", "Clean&Fresh Chatbot");
  formData.append("replyto", data.email);
  formData.append("Nom", data.nom);
  formData.append("Téléphone", data.telephone);
  formData.append("Email", data.email);
  formData.append("Message", "Le client a demandé à être recontacté depuis le chatbot du site.");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const resData = await response.json();
  if (!resData.success) throw new Error(resData.message || "Erreur Web3Forms");
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [contactStep, setContactStep] = useState<"none" | "name" | "email" | "phone">("none");
  const [contactData, setContactData] = useState({ nom: "", email: "", telephone: "" });
  const [isSending, setIsSending] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: welcomeMessage,
      options: faqData,
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const addBotMessage = (text: string, options?: FAQNode[], delay = 500) => {
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString() + Math.random(), sender: "bot", text, options },
      ]);
    }, delay);
  };

  const startContactFlow = () => {
    setContactStep("name");
    addBotMessage("D'accord, un conseiller va vous recontacter. Quel est votre nom ?");
  };

  const handleOptionClick = (option: FAQNode) => {
    // Add user bubble
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), sender: "user", text: option.question },
    ]);

    if (option.id === "contact") {
      startContactFlow();
      return;
    }

    // Bot answer
    addBotMessage(option.answer, option.options);
  };

  const handleTextSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isSending) return;

    const query = inputText.trim();
    setInputText("");

    // Add user bubble
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), sender: "user", text: query },
    ]);

    // --- Contact flow steps ---
    if (contactStep === "name") {
      setContactData((p) => ({ ...p, nom: query }));
      setContactStep("email");
      addBotMessage("Merci ! Quelle est votre adresse e-mail ?");
      return;
    }

    if (contactStep === "email") {
      setContactData((p) => ({ ...p, email: query }));
      setContactStep("phone");
      addBotMessage("Parfait. Quel est votre numéro de téléphone ?");
      return;
    }

    if (contactStep === "phone") {
      const finalData = { ...contactData, telephone: query };
      setContactStep("none");
      setIsSending(true);

      const loadingId = Date.now().toString() + "-loading";
      setMessages((prev) => [
        ...prev,
        { id: loadingId, sender: "bot", text: "Envoi en cours..." },
      ]);

      try {
        await sendViaWeb3Forms(finalData);
        setMessages((prev) =>
          prev
            .filter((m) => m.id !== loadingId)
            .concat({
              id: Date.now().toString() + "-ok",
              sender: "bot",
              text: "✅ C'est noté ! Vos informations ont été envoyées avec succès. Un conseiller Clean&Fresh vous recontactera très rapidement.",
              options: faqData,
            })
        );
      } catch {
        setMessages((prev) =>
          prev
            .filter((m) => m.id !== loadingId)
            .concat({
              id: Date.now().toString() + "-err",
              sender: "bot",
              text: "❌ Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou utiliser directement la page de contact du site.",
              options: faqData,
            })
        );
      } finally {
        setIsSending(false);
      }
      return;
    }

    // --- FAQ keyword search ---
    setTimeout(() => {
      const match = searchFAQ(faqData, query);
      if (match) {
        if (match.id === "contact") {
          startContactFlow();
          return;
        }
        addBotMessage(match.answer, match.options, 0);
      } else {
        addBotMessage(
          "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler, ou choisir l'une de ces options ?",
          faqData,
          0
        );
      }
    }, 500);
  };

  const handleReset = () => {
    setContactStep("none");
    addBotMessage("Voici le menu principal :", faqData);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-colors hover:bg-primary/90 ${isOpen ? "pointer-events-none opacity-0" : "opacity-100"}`}
        aria-label="Ouvrir le chat"
      >
        <MessageCircle size={28} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 flex h-[520px] max-h-[80vh] w-[360px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-primary p-4 text-primary-foreground">
              <div className="flex items-center gap-2">
                <MessageCircle size={20} />
                <div>
                  <h3 className="font-semibold leading-tight">Assistant Clean&Fresh</h3>
                  <p className="text-xs text-primary-foreground/70">Répond en quelques secondes</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 transition-colors hover:bg-primary-foreground/20"
                aria-label="Fermer le chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-muted/30">
              <div className="flex flex-col gap-4">
                {messages.map((msg, idx) => (
                  <div key={msg.id} className="flex flex-col gap-2">
                    {/* Message Bubble */}
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                        msg.sender === "user"
                          ? "self-end bg-primary text-primary-foreground rounded-tr-sm"
                          : "self-start bg-card border border-border text-card-foreground rounded-tl-sm shadow-sm"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                    </div>

                    {/* Options (only for last bot message) */}
                    {msg.sender === "bot" && idx === messages.length - 1 && (
                      <div className="mt-1 flex flex-col items-start gap-2 pl-1">
                        {msg.options?.map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => handleOptionClick(opt)}
                            className="flex items-center gap-1 rounded-full border border-primary/30 bg-background px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                          >
                            {opt.question}
                            <ChevronRight size={14} />
                          </button>
                        ))}
                        {(!msg.options || msg.options.length === 0) && idx > 0 && (
                          <button
                            onClick={handleReset}
                            className="flex items-center gap-1 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted-foreground/20"
                          >
                            <CornerDownLeft size={14} />
                            Retour au menu
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleTextSubmit}
              className="flex items-center gap-2 border-t border-border bg-background p-3"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={
                  contactStep === "name"
                    ? "Votre nom..."
                    : contactStep === "email"
                      ? "Votre e-mail..."
                      : contactStep === "phone"
                        ? "Votre téléphone..."
                        : "Écrivez votre question..."
                }
                disabled={isSending}
                className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isSending}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
