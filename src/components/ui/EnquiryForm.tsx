import React, { useState } from 'react';
import { servicesData } from '../../data/servicesData';
import { brandConfig } from '../../data/brandConfig';
import { CheckCircle2, AlertCircle, Send, ArrowRight } from 'lucide-react';

interface EnquiryFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

export function EnquiryForm({ initialService = '' }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceSlug: initialService || servicesData[0].slug,
    contactMethod: 'Email',
    locationPreference: 'In-person in Karachi',
    message: '',
    consent: false,
    // Honeypot field for spam prevention
    botField: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submissionReceipt, setSubmissionReceipt] = useState<{
    id: string;
    timestamp: string;
  } | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.serviceSlug) {
      newErrors.serviceSlug = 'Please select a preferred service or topic';
    }

    if (!formData.consent) {
      newErrors.consent = 'Consent is required to process your contact enquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot
    if (formData.botField) {
      // Quietly reject bots
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus('idle');

    // Simulate reliable, verified submission with demonstrable receipt
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const receiptId = `KUN-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      const now = new Date().toLocaleDateString('en-PK', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

      setSubmissionReceipt({
        id: receiptId,
        timestamp: now,
      });
      setSubmissionStatus('success');
    } catch {
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceSlug: servicesData[0].slug,
      contactMethod: 'Email',
      locationPreference: 'In-person in Karachi',
      message: '',
      consent: false,
      botField: '',
    });
    setErrors({});
    setSubmissionStatus('idle');
    setSubmissionReceipt(null);
  };

  if (submissionStatus === 'success' && submissionReceipt) {
    const selectedServiceObj = servicesData.find((s) => s.slug === formData.serviceSlug);

    return (
      <div className="bg-[#FAF8F5] border border-[#DAD3C7] p-8 sm:p-10 text-[#252521] space-y-6">
        <div className="flex items-start gap-4">
          <CheckCircle2 className="w-8 h-8 text-[#777B60] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-serif text-2xl text-[#252521]">
              Enquiry Received with Care
            </h3>
            <p className="text-sm text-[#575752]">
              Thank you, {formData.name}. Your enquiry reference is{' '}
              <span className="font-mono font-medium text-[#632D35]">{submissionReceipt.id}</span>.
            </p>
          </div>
        </div>

        <div className="bg-[#F4F0E8] p-5 border border-[#DAD3C7] text-xs space-y-2.5 font-sans">
          <div className="text-[11px] uppercase tracking-wider text-[#777B60] font-semibold">
            Enquiry Summary (Demo Mode Preview)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#252521]">
            <div>
              <span className="text-[#575752]">Preferred Area: </span>
              <span className="font-medium">{selectedServiceObj?.title || formData.serviceSlug}</span>
            </div>
            <div>
              <span className="text-[#575752]">Format: </span>
              <span className="font-medium">{formData.locationPreference}</span>
            </div>
            <div>
              <span className="text-[#575752]">Preferred Response: </span>
              <span className="font-medium">{formData.contactMethod} ({formData.email})</span>
            </div>
            <div>
              <span className="text-[#575752]">Received: </span>
              <span className="font-mono text-[#575752]">{submissionReceipt.timestamp}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-[#575752] leading-relaxed">
          The KÜN administrative and clinical intake team will review your enquiry in confidence.
          We typically respond within 24 to 48 business hours to discuss consultation availability or introductory details.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="px-5 py-2.5 text-xs font-medium text-[#252521] border border-[#DAD3C7] hover:bg-[#E8E2D8] transition-colors"
          >
            Submit Another Enquiry
          </button>
          <a
            href={brandConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#632D35] hover:underline inline-flex items-center gap-1 font-medium"
          >
            Follow KÜN on Instagram <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot field (hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="botField">Leave this field blank</label>
        <input
          type="text"
          id="botField"
          name="botField"
          value={formData.botField}
          onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {submissionStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Transmission Error</p>
            <p className="text-xs text-red-700">
              There was a temporary issue processing your request. Please try again or reach out directly on Instagram @kun.exist.
            </p>
          </div>
        </div>
      )}

      {/* Row: Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#575752] font-medium">
            Full Name <span className="text-[#632D35]">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: '' });
            }}
            placeholder="e.g. Ayesha Khan"
            className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#252521] placeholder-[#575752]/40 transition-colors focus:outline-none focus:ring-1 focus:ring-[#632D35] focus:border-[#632D35] ${
              errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#DAD3C7]'
            }`}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#575752] font-medium">
            Email Address <span className="text-[#632D35]">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            placeholder="ayesha@example.com"
            className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#252521] placeholder-[#575752]/40 transition-colors focus:outline-none focus:ring-1 focus:ring-[#632D35] focus:border-[#632D35] ${
              errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#DAD3C7]'
            }`}
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Row: Phone / WhatsApp (Optional) & Preferred Contact Method */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#575752] font-medium">
            Contact Number / WhatsApp <span className="text-[#575752]/60 font-normal lowercase">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+92 300 0000000"
            className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DAD3C7] text-sm text-[#252521] placeholder-[#575752]/40 transition-colors focus:outline-none focus:ring-1 focus:ring-[#632D35] focus:border-[#632D35]"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="contactMethod" className="block text-xs uppercase tracking-wider text-[#575752] font-medium">
            Preferred Contact Method
          </label>
          <select
            id="contactMethod"
            value={formData.contactMethod}
            onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
            className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DAD3C7] text-sm text-[#252521] transition-colors focus:outline-none focus:ring-1 focus:ring-[#632D35] focus:border-[#632D35]"
          >
            <option value="Email">Email</option>
            <option value="WhatsApp message">WhatsApp message</option>
            <option value="Phone call">Phone call</option>
          </select>
        </div>
      </div>

      {/* Row: Service of Interest & Format Preference */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="serviceSlug" className="block text-xs uppercase tracking-wider text-[#575752] font-medium">
            Service or Interest Area <span className="text-[#632D35]">*</span>
          </label>
          <select
            id="serviceSlug"
            value={formData.serviceSlug}
            onChange={(e) => setFormData({ ...formData, serviceSlug: e.target.value })}
            className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DAD3C7] text-sm text-[#252521] transition-colors focus:outline-none focus:ring-1 focus:ring-[#632D35] focus:border-[#632D35]"
          >
            {servicesData.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.number}. {service.title}
              </option>
            ))}
            <option value="general-enquiry">General Holistic Enquiry / Not Sure Yet</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="locationPreference" className="block text-xs uppercase tracking-wider text-[#575752] font-medium">
            Format Preference
          </label>
          <select
            id="locationPreference"
            value={formData.locationPreference}
            onChange={(e) => setFormData({ ...formData, locationPreference: e.target.value })}
            className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DAD3C7] text-sm text-[#252521] transition-colors focus:outline-none focus:ring-1 focus:ring-[#632D35] focus:border-[#632D35]"
          >
            <option value="In-person in Karachi">In-person at Karachi sanctuary</option>
            <option value="Online / Virtual consultation">Online / Virtual consultation</option>
            <option value="Either format is acceptable">Either format is acceptable</option>
          </select>
        </div>
      </div>

      {/* Message Textarea */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#575752] font-medium">
            Brief Note / What Brings You to KÜN? <span className="text-[#575752]/60 font-normal lowercase">(optional)</span>
          </label>
          <span className="text-[11px] text-[#777B60]">Please do not share sensitive clinical histories</span>
        </div>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Feel free to share what kind of support or experience you are looking for, your availability, or any questions you have about our practice."
          className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DAD3C7] text-sm text-[#252521] placeholder-[#575752]/40 transition-colors focus:outline-none focus:ring-1 focus:ring-[#632D35] focus:border-[#632D35]"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="space-y-1">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={formData.consent}
            onChange={(e) => {
              setFormData({ ...formData, consent: e.target.checked });
              if (errors.consent) setErrors({ ...errors, consent: '' });
            }}
            className="mt-1 h-4 w-4 rounded-none border-[#DAD3C7] text-[#632D35] focus:ring-[#632D35]"
          />
          <span className="text-xs text-[#575752] leading-relaxed">
            I consent to KÜN handling the provided information in accordance with professional confidentiality
            standards to respond to this enquiry. I understand this form is for introductory enquiries and not for acute crisis intervention. <span className="text-[#632D35]">*</span>
          </span>
        </label>
        {errors.consent && <p className="text-xs text-red-600 pl-7">{errors.consent}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3.5 bg-[#632D35] text-[#F4F0E8] text-xs uppercase tracking-widest font-medium hover:bg-[#4C2128] transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 shadow-sm"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-[#F4F0E8] border-t-transparent rounded-full animate-spin" />
              <span>Transmitting...</span>
            </>
          ) : (
            <>
              <span>Send Introductory Enquiry</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>

        <span className="text-[11px] text-[#777B60]">
          Verified Response within 24–48 Hours
        </span>
      </div>
    </form>
  );
}
