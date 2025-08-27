"use client";

import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Sparkles } from "lucide-react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setSuccessMessage(
      "🎉 Thank you for subscribing!\n\nYou'll receive our latest updates and exclusive offers soon."
    );
    setEmail("");
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 border border-slate-700/60 px-3 py-1 text-xs text-slate-300">
        <Sparkles className="h-3.5 w-3.5 text-amber-400" />
        <span>Exclusive access</span>
      </div>
      <h3 className="text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-white">
        Join Our Community
      </h3>
      <p className="text-sm md:text-base text-slate-300/90 max-w-2xl">
        Get access to <span className="text-amber-400">exclusive drops</span>, collaborations, and special offers before anyone else.
      </p>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative rounded-xl border border-slate-700/70 bg-gradient-to-br from-slate-850 to-slate-800/90 p-3 sm:p-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
          {/* subtle glow */}
          <div className="pointer-events-none absolute -inset-px rounded-xl bg-[linear-gradient(110deg,rgba(255,255,255,0.08),transparent_40%)]" />

          <div className="relative flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" aria-hidden="true" />
              <Input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email address"
                aria-label="Email address"
                aria-describedby="newsletter-hint"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-11 bg-slate-900/70 border-slate-700 text-white placeholder:text-slate-400 focus-visible:ring-amber-500 focus-visible:ring-offset-0"
              />
            </div>
            <Button
              type="submit"
              className="h-11 bg-amber-600 hover:bg-amber-500 text-slate-900 font-semibold shadow-[0_0_0_3px_rgba(245,158,11,0.15)] hover:shadow-[0_0_0_6px_rgba(245,158,11,0.18)] transition-shadow cursor-pointer"
            >
              Subscribe
            </Button>
          </div>

          <div id="newsletter-hint" className="mt-3 text-xs text-slate-400 flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/80" aria-hidden="true" />
            No spam. Unsubscribe anytime.
          </div>

          {successMessage && (
            <div
              role="status"
              aria-live="polite"
              className="mt-4 relative overflow-hidden rounded-xl border bg-slate-900/50 px-4 py-3 text-slate-100 text-sm"
            >
              <div className="pointer-events-none absolute -inset-px rounded-xl bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(245,158,11,0.25),transparent_70%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-xl border border-transparent [background:linear-gradient(#0b1220,#0b1220)_padding-box,linear-gradient(135deg,rgba(245,158,11,0.7),rgba(16,185,129,0.55))_border-box]" />
              <p className="relative whitespace-pre-line leading-relaxed">
                {successMessage}
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewsletterForm;
