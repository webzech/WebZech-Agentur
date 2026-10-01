import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Mail, Phone, Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { getT } from '../data/translations';

interface ContactFormProps {
  lang: Language;
  prefilledMessage?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ lang, prefilledMessage = '' }) => {
  const t = getT(lang);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Website Neuprojekt',
    budget: '2.500 € – 5.000 €',
    message: prefilledMessage,
    privacyAccepted: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Bitte geben Sie Ihren Namen an.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Bitte beschreiben Sie kurz Ihr Vorhaben.';
    }
    if (!formData.privacyAccepted) {
      errs.privacy = 'Bitte stimmen Sie der Datenschutzerklärung zu.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const whatsappMessage = encodeURIComponent(
    `Hallo Webzech-Team, ich interessiere mich für eine Website / SEO: ${formData.projectType}. Mein Name ist ${formData.name || 'Interessent'}.`
  );

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {isSuccess ? (
        <div className="text-center py-12 px-4 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 font-display">
            Vielen Dank für Ihre Anfrage!
          </h3>
          <p className="text-neutral-300 text-sm leading-relaxed mb-6">
            Ihre Nachricht ist sicher bei Awais Abid & Werner Polatschek eingegangen. Wir prüfen Ihre Anforderungen und melden uns innerhalb von 24 Stunden mit einer fundierten Ersteinschätzung.
          </p>
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                projectType: 'Website Neuprojekt',
                budget: '2.500 € – 5.000 €',
                message: '',
                privacyAccepted: false
              });
            }}
            className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          >
            Weitere Anfrage senden
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white font-display">
                Projekt unverbindlich anfragen
              </h3>
              <p className="text-xs text-neutral-400 mt-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                {t.common.responsePromise}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/4915123456789?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Chat</span>
              </a>
              <a
                href="mailto:kontakt@webzech.de"
                className="px-3.5 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>kontakt@webzech.de</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Ihr Name / Ansprechpartner *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="z.B. Markus Huber"
                className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-950/80 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors ${
                  errors.name ? 'border-red-500/80' : 'border-neutral-800 focus:border-blue-500'
                }`}
              />
              {errors.name && <span className="text-red-400 text-[11px] mt-1 block">{errors.name}</span>}
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                E-Mail-Adresse *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="m.huber@unternehmen.de"
                className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-950/80 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors ${
                  errors.email ? 'border-red-500/80' : 'border-neutral-800 focus:border-blue-500'
                }`}
              />
              {errors.email && <span className="text-red-400 text-[11px] mt-1 block">{errors.email}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Unternehmen / Organisation (optional)
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="z.B. Huber Haustechnik GmbH"
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Telefonnummer für Rückfragen (optional)
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+49 89 12345678"
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Projektart
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              >
                <option value="Website Neuprojekt">Neue Website erstellen lassen</option>
                <option value="Website Relaunch & Redesign">Website Relaunch & Modernisierung</option>
                <option value="WordPress & Elementor">WordPress / Elementor Anpassung</option>
                <option value="Landingpage">Conversion Landingpage</option>
                <option value="Local SEO & Google Maps">Local SEO & Google Maps Optimierung</option>
                <option value="Website Wartung">Laufende Wartung & Betreuung</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Ungefährer Budgetrahmen
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              >
                <option value="1.200 € – 2.500 €">1.200 € – 2.500 € (Landingpage / Startseite)</option>
                <option value="2.500 € – 5.000 €">2.500 € – 5.000 € (Kompakte Unternehmenswebsite)</option>
                <option value="5.000 € – 8.000 €">5.000 € – 8.000 € (Umfangreiches Firmenportal)</option>
                <option value="Über 8.000 €">Über 8.000 € (Individuelle Plattform / Shop)</option>
                <option value="Noch offen / Erstberatung">Noch offen / Ich wünsche Beratung</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1.5">
              Ihr Vorhaben / Wünsche *
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Erzählen Sie uns kurz von Ihrer aktuellen Situation: Haben Sie bereits eine Domain? Gibt es spezielle Wünsche oder Termine?"
              className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-950/80 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors ${
                errors.message ? 'border-red-500/80' : 'border-neutral-800 focus:border-blue-500'
              }`}
            />
            {errors.message && <span className="text-red-400 text-[11px] mt-1 block">{errors.message}</span>}
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2.5">
              <input
                id="privacy-consent"
                type="checkbox"
                checked={formData.privacyAccepted}
                onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                className="mt-1 rounded border-neutral-800 bg-neutral-950 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
              />
              <label htmlFor="privacy-consent" className="text-xs text-neutral-400 leading-normal cursor-pointer">
                Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle Rückfragen gespeichert werden. Details entnehmen Sie der Datenschutzerklärung.
              </label>
            </div>
            {errors.privacy && <span className="text-red-400 text-[11px] block">{errors.privacy}</span>}
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
            >
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              <span>{isSubmitting ? 'Wird übermittelt...' : 'Kostenlose Anfrage absenden'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
