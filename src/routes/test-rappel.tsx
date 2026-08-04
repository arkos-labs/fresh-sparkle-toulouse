import { createFileRoute } from '@tanstack/react-router';
import { sendReminderEmail } from '../lib/emailService';
import { useState } from 'react';

export const Route = createFileRoute('/test-rappel')({
  component: TestRappel,
});

function TestRappel() {
  const [status, setStatus] = useState<string>('');

  const handleTest = async () => {
    const userEmail = prompt("À quelle adresse e-mail veux-tu envoyer le rappel test ?");
    if (!userEmail) return;
    setStatus('Envoi en cours...');
    try {
      await sendReminderEmail({
        client_name: 'Testeur Rappel',
        client_phone: '06 12 34 56 78',
        client_email: userEmail,
        formule_name: 'Formule Intégrale',
        booking_date: '2026-09-01',
        booking_time: '14:00',
        client_address: '10 rue de la propreté, 31000 Toulouse',
        cancel_url: `https://fresh-sparkle-toulouse-6hqe.vercel.app/annuler?token=test`
      });
      setStatus('✅ E-mail de rappel envoyé avec succès ! Vérifiez votre boîte mail.');
    } catch (err) {
      console.error(err);
      setStatus("❌ Erreur lors de l'envoi.");
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Test du Rappel 24h</h1>
      <p>Cliquez sur le bouton ci-dessous pour tester l'envoi de l'e-mail de rappel des 24h.</p>
      
      <button 
        onClick={handleTest}
        style={{
          padding: '12px 24px',
          background: '#00b8ff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Envoyer le rappel test
      </button>

      {status && <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{status}</p>}
    </div>
  );
}
