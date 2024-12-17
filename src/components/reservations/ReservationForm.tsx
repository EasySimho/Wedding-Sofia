import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Check, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  guests: number;
  dietaryRestrictions: string;
  notes: string;
}

const ReservationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    dietaryRestrictions: '',
    notes: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        'service_su5evcm',
        'template_9lt7t2q',
        {
          to_name: 'Sara & Marco',
          from_name: formData.name,
          from_email: formData.email,
          message: `
            Numero di ospiti: ${formData.guests}
            Telefono: ${formData.phone}
            Restrizioni alimentari: ${formData.dietaryRestrictions}
            Note: ${formData.notes}
          `
        },
        'JmODPdVdCt13yVm0I'
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: 1,
        dietaryRestrictions: '',
        notes: ''
      });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">
            Nome e Cognome *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-2 rounded-lg border border-platinum focus:border-peach focus:ring-1 focus:ring-peach outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-2 rounded-lg border border-platinum focus:border-peach focus:ring-1 focus:ring-peach outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-1">
            Telefono *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full px-4 py-2 rounded-lg border border-platinum focus:border-peach focus:ring-1 focus:ring-peach outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-text-secondary mb-1">
            Numero di Ospiti *
          </label>
          <input
            type="number"
            id="guests"
            min="1"
            required
            value={formData.guests}
            onChange={(e) => setFormData(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
            className="w-full px-4 py-2 rounded-lg border border-platinum focus:border-peach focus:ring-1 focus:ring-peach outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="dietary" className="block text-sm font-medium text-text-secondary mb-1">
          Restrizioni Alimentari
        </label>
        <input
          type="text"
          id="dietary"
          value={formData.dietaryRestrictions}
          onChange={(e) => setFormData(prev => ({ ...prev, dietaryRestrictions: e.target.value }))}
          className="w-full px-4 py-2 rounded-lg border border-platinum focus:border-peach focus:ring-1 focus:ring-peach outline-none transition-colors"
          placeholder="Vegetariano, vegano, allergie, etc."
        />
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-text-secondary mb-1">
          Note Aggiuntive
        </label>
        <textarea
          id="notes"
          rows={4}
          value={formData.notes}
          onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
          className="w-full px-4 py-2 rounded-lg border border-platinum focus:border-peach focus:ring-1 focus:ring-peach outline-none transition-colors resize-none"
          placeholder="Eventuali richieste o informazioni aggiuntive..."
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="px-8 py-3 bg-peach text-white rounded-lg font-medium hover:bg-apricot transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
          {status === 'success' && <Check className="w-4 h-4" />}
          {status === 'loading' ? 'Invio in corso...' : status === 'success' ? 'Inviato!' : 'Conferma Presenza'}
        </button>
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-center">
          Si è verificato un errore. Per favore riprova più tardi.
        </p>
      )}
    </form>
  );
};

export default ReservationForm;