import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/layout/site-shell";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteShell topBar="none">
      <div className="min-h-screen bg-cream">
        <section className="border-b border-border/40 bg-gradient-to-br from-coral-soft/50 via-cream to-white">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Contact" },
              ]}
            />
            <h1 className="font-serif text-4xl text-charcoal md:text-5xl">
              Get in touch
            </h1>
            <p className="mt-4 max-w-xl text-muted leading-relaxed">
              Questions about sizing, gift boxes, or a custom order? We&apos;re
              here to help — usually within a few hours.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-4">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  line: "hello@auraandbow.com",
                  sub: "Orders & general enquiries",
                },
                {
                  icon: Phone,
                  title: "Phone / WhatsApp",
                  line: "+91 98765 43210",
                  sub: "Mon–Sat, 10am–7pm IST",
                },
                {
                  icon: MapPin,
                  title: "Studio",
                  line: "Bandra West, Mumbai",
                  sub: "By appointment only",
                },
                {
                  icon: Clock,
                  title: "Response time",
                  line: "Under 24 hours",
                  sub: "Faster on WhatsApp",
                },
              ].map(({ icon: Icon, title, line, sub }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-2xl border border-border/50 bg-white p-5 shadow-sm"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coral-soft text-coral"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      {title}
                    </p>
                    <p className="mt-1 font-medium text-charcoal">{line}</p>
                    <p className="text-xs text-muted">{sub}</p>
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 text-sm font-semibold text-white shadow-md hover:opacity-95 transition-opacity"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="lg:col-span-3 rounded-3xl border border-border/50 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="font-serif text-2xl text-charcoal">
                Send a message
              </h2>
              <p className="mt-1 text-sm text-muted">
                Gift set customisation, bulk orders, or product help.
              </p>

              {sent ? (
                <div
                  className="mt-8 rounded-2xl bg-coral-soft/60 border border-coral/20 p-8 text-center"
                >
                  <p className="font-semibold text-charcoal">Thank you!</p>
                  <p className="mt-2 text-sm text-muted">
                    We&apos;ve received your message and will reply soon.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSent(false)}
                  >
                    Send another
                  </Button>
                </div>
              ) : (
                <form
                  className="mt-8 space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block text-sm">
                      <span className="font-medium text-charcoal">Name</span>
                      <input
                        required
                        name="name"
                        className="mt-1.5 w-full rounded-xl border border-border bg-cream/50 px-4 py-3 text-sm outline-none focus:border-coral"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="block text-sm">
                      <span className="font-medium text-charcoal">Email</span>
                      <input
                        required
                        type="email"
                        name="email"
                        className="mt-1.5 w-full rounded-xl border border-border bg-cream/50 px-4 py-3 text-sm outline-none focus:border-coral"
                        placeholder="you@email.com"
                      />
                    </label>
                  </div>
                  <label className="block text-sm">
                    <span className="font-medium text-charcoal">Subject</span>
                    <select
                      name="subject"
                      className="mt-1.5 w-full rounded-xl border border-border bg-cream/50 px-4 py-3 text-sm outline-none focus:border-coral"
                    >
                      <option>Gift set enquiry</option>
                      <option>Order help</option>
                      <option>Custom hamper</option>
                      <option>Wholesale / bulk</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium text-charcoal">Message</span>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      className="mt-1.5 w-full resize-y rounded-xl border border-border bg-cream/50 px-4 py-3 text-sm outline-none focus:border-coral"
                      placeholder="Tell us what you're looking for..."
                    />
                  </label>
                  <Button type="submit" className="w-full sm:w-auto">
                    Send message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
