'use client';

import { useState } from 'react';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

interface ContactFormProps {
  collaborationTypes: string[];
}

export default function ContactForm({ collaborationTypes }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    collaborationType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simuler l'envoi du formulaire
    // Remplacez par votre logique d'envoi (API, email service, etc.)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', collaborationType: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-xs font-light uppercase tracking-wider mb-2 text-stone-500">
          Nom *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-cream-paper border border-stone-900/15 text-ink placeholder-stone-400 focus:outline-none focus:border-accent-copper/50 focus:ring-2 focus:ring-accent-copper/10 transition-all duration-300 font-light"
          placeholder="Votre nom"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-light uppercase tracking-wider mb-2 text-stone-500">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-cream-paper border border-stone-900/15 text-ink placeholder-stone-400 focus:outline-none focus:border-accent-copper/50 focus:ring-2 focus:ring-accent-copper/10 transition-all duration-300 font-light"
          placeholder="votre@email.com"
        />
      </div>

      <div>
        <label htmlFor="collaborationType" className="block text-xs font-light uppercase tracking-wider mb-2 text-stone-500">
          Type de collaboration *
        </label>
        <select
          id="collaborationType"
          name="collaborationType"
          required
          value={formData.collaborationType}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-cream-paper border border-stone-900/15 text-ink focus:outline-none focus:border-accent-copper/50 focus:ring-2 focus:ring-accent-copper/10 transition-all duration-300 font-light"
        >
          <option value="">Sélectionnez un type</option>
          {collaborationTypes.map((type) => (
            <option key={type} value={type} className="bg-cream-paper text-ink">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-light uppercase tracking-wider mb-2 text-stone-500">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-cream-paper border border-stone-900/15 text-ink placeholder-stone-400 focus:outline-none focus:border-accent-copper/50 focus:ring-2 focus:ring-accent-copper/10 transition-all duration-300 resize-none font-light"
          placeholder="Parlez-moi de votre projet..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 border border-stone-900/12 bg-cream-muted/80 text-ink text-sm font-light rounded-sm">
          Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 border border-stone-900/12 bg-cream-muted/80 text-stone-600 text-sm font-light rounded-sm">
          Une erreur s&apos;est produite. Veuillez réessayer ou me contacter directement.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-4 bg-ink text-cream border border-ink hover:bg-ink-muted transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 font-light tracking-wider uppercase text-sm shadow-lg shadow-stone-900/10"
      >
        {isSubmitting ? (
          <>
            <FaSpinner className="animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <FaPaperPlane />
            Envoyer le message
          </>
        )}
      </button>
    </form>
  );
}

