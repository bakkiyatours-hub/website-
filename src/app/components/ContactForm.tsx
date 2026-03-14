import { useMemo, useState } from 'react';
import { Send } from 'lucide-react';

type Subject = 'General Inquiry' | 'Tour Booking' | 'Custom Tour';

const SUBJECTS: Subject[] = ['General Inquiry', 'Tour Booking', 'Custom Tour'];

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  subject: Subject;
  message: string;
  website: string; // honeypot
};

function getApiUrl() {
  const envUrl = (import.meta as any)?.env?.VITE_CONTACT_API_URL as string | undefined;
  const trimmed = envUrl?.trim() || '';
  if (trimmed) return trimmed;

  const isDev = Boolean((import.meta as any)?.env?.DEV);
  if (isDev) {
    return '/api/contact';
  }

  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:3000/api/contact';
    }
  }

  return '';
}

export function ContactForm() {
  const apiUrl = useMemo(() => getApiUrl(), []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [values, setValues] = useState<FormValues>({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
    website: '',
  });

  function setField<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    if (!apiUrl) {
      setError(
        'Contact API URL is not configured. Set VITE_CONTACT_API_URL (in .env.local / .env.production) and restart/rebuild.',
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.error ?? 'Submission failed. Please try again.');
        return;
      }

      setSuccess('Thanks! Your message has been sent.');
      setValues({
        fullName: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
        website: '',
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : '';
      setError(
        `Network error. Cannot reach ${apiUrl}. Start the backend (contact-api) and try again.${message ? ` (${message})` : ''}`,
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm mb-2">Full Name *</label>
          <input
            value={values.fullName}
            onChange={(e) => setField('fullName', e.target.value)}
            type="text"
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Email *</label>
          <input
            value={values.email}
            onChange={(e) => setField('email', e.target.value)}
            type="email"
            placeholder="john@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm mb-2">Phone Number *</label>
          <input
            value={values.phone}
            onChange={(e) => setField('phone', e.target.value)}
            type="tel"
            placeholder="Your phone number"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
            autoComplete="tel"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Subject *</label>
          <select
            value={values.subject}
            onChange={(e) => setField('subject', e.target.value as Subject)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
            required
          >
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm mb-2">Message *</label>
        <textarea
          value={values.message}
          onChange={(e) => setField('message', e.target.value)}
          rows={6}
          placeholder="Tell us how we can help you..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
          required
        />
      </div>

      <div className="sr-only" aria-hidden="true">
        <label className="block text-sm mb-2">Website</label>
        <input
          value={values.website}
          onChange={(e) => setField('website', e.target.value)}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#ff6a00] hover:bg-[#e85f00] disabled:opacity-70 text-white py-4 rounded-full flex items-center justify-center gap-2 transition text-lg font-semibold"
      >
        <Send className="w-5 h-5" />
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </button>

      {success && <p className="text-sm text-green-700 text-center font-semibold">{success}</p>}
      {error && <p className="text-sm text-red-700 text-center font-semibold">{error}</p>}
    </form>
  );
}
