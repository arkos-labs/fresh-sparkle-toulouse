import { useEffect, useRef } from "react";

export function ReviewsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // S'assurer de ne pas injecter le script plusieurs fois (React Strict Mode)
    if (containerRef.current && containerRef.current.children.length === 0) {
      const script = document.createElement("script");
      script.src = "https://cdn.trustindex.io/loader.js?c3f9ab763db15679f226441e590";
      script.async = true;
      script.defer = true;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <section className="border-t border-border bg-background py-14">
      <div className="mx-auto max-w-6xl px-4 min-h-[300px] flex items-center justify-center">
        {/* Le widget Trustindex s'injectera automatiquement ici à la place du script */}
        <div ref={containerRef} className="w-full"></div>
      </div>
    </section>
  );
}
