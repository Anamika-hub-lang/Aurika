import { Button } from "@/components/ui/button";
import { AppImage } from "@/components/ui/app-image";
import { FadeIn } from "@/components/ui/fade-in";
import { siteImages } from "@/lib/images";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <AppImage
            src={siteImages.newsletter}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-lavender/75 backdrop-blur-[2px]" />
      </div>
      <FadeIn className="relative mx-auto max-w-xl text-center">
        <h3 className="font-serif text-2xl md:text-3xl text-purple leading-snug">
          Join the Atelier Circle for 15% off your first headpiece
        </h3>
        <form
          className="mt-8 flex flex-col sm:flex-row gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            setEmail("");
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your personal email"
            className="flex-1 rounded-full border border-border bg-white/95 px-5 py-3 text-sm outline-none focus:border-purple/40 focus:ring-2 focus:ring-purple/20 transition-shadow"
            required
          />
          <Button type="submit" className="shrink-0 px-8">
            Subscribe
          </Button>
        </form>
      </FadeIn>
    </section>
  );
}
