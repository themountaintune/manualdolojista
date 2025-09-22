import type { JSX } from "react";

export function Subscription(): JSX.Element {
  return (
    <section className="container py-12">
      <div className="rounded-md border border-line p-16 flex items-center justify-between">
        <div className="space-y-12">
          <div className="space-y-2 max-w-lg">
            <div className="text-sm font-semibold text-accent uppercase tracking-wide">
              Subscription
            </div>
            <h2 className="text-6xl font-semibold text-ink leading-tight">
              Join our exclusive beauty community
            </h2>
            <p className="text-base font-light text-sub leading-relaxed tracking-wide">
              Elevate your beauty journey with personalized recommendations and stay connected with
              a community that shares your passion for self-care. Subscribe now and embark on a
              beauty adventure with us!
            </p>
          </div>

          {/* Email Form */}
          <div className="relative w-[400px] h-[46px]">
            <input
              type="email"
              placeholder="Email Address"
              className="absolute inset-0 w-full h-full px-4 py-3 rounded-md border border-line bg-panel text-ink placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="absolute right-1 top-1 bottom-1 px-6 py-2 bg-cta text-ink rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent">
              Subscribe
            </button>
          </div>
        </div>

        {/* Subscription Image */}
        <div className="flex-shrink-0">
          <img
            src="https://placehold.co/604x529"
            alt="Beauty community"
            className="w-[604px] h-[529px] rounded-md border border-line object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Subscription;
