import { AssetImage, Magnetic, Reveal, Tilt } from "./primitives";

const FLOATERS: Array<{ label: string; delay: string; pos: string }> = [];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-28">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
      {/* animated red lighting */}
      <div
        aria-hidden
        className="blob pointer-events-none absolute top-[-10%] right-[-5%] h-[420px] w-[420px] rounded-full opacity-25"
        style={{ background: "var(--gradient-red)" }}
      />
      <div
        aria-hidden
        className="blob pointer-events-none absolute bottom-[-20%] left-[-10%] h-[320px] w-[320px] rounded-full opacity-15"
        style={{ background: "var(--gradient-red)", animationDelay: "-6s" }}
      />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal className="mb-8 flex flex-wrap items-center gap-3">
            <span className="chip text-primary">
              <span className="pulse-ring inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              Open to opportunities
            </span>
            <span className="text-[11px] tracking-[0.35em] text-muted-foreground uppercase">
              Marketing × Design × Data
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display text-[9.5vw] leading-[0.9] sm:text-[6vw] lg:text-[4.6vw]">
              I am a <span className="text-gradient-red">digital</span>
              <br />
              <span className="text-outline">marketing</span>
              <br />
              enthusiast.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="display mt-7 text-xl text-primary sm:text-2xl">
              Creative. Analytical. Curious.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Building practical skills across SEO, WordPress, social media, graphic design and
              Google Ads.
            </p>
          </Reveal>

          <Reveal delay={260} className="mt-8 grid max-w-md grid-cols-3 gap-px bg-border">
            {[
              { k: "05", v: "Projects" },
              { k: "03", v: "Certificates" },
              { k: "05", v: "Skill tracks" },
            ].map((s) => (
              <div key={s.v} className="bg-background px-4 py-4">
                <span className="display text-gradient-red text-3xl">{s.k}</span>
                <p className="mt-1 text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                  {s.v}
                </p>
              </div>
            ))}
          </Reveal>


          <Reveal delay={300} className="mt-10 flex flex-wrap gap-4">
            <Magnetic href="#work" className="shine rounded-full bg-primary text-primary-foreground hover:red-glow">
              View Work →
            </Magnetic>
            <Magnetic
              href="#contact"
              className="shine rounded-full border border-border text-foreground hover:border-primary hover:text-primary"
            >
              Contact Me ↗
            </Magnetic>
          </Reveal>
        </div>

        {/* editorial portrait composition */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto w-full max-w-[420px]">
            <div
              aria-hidden
              className="spin-slow absolute inset-[-14%] rounded-full border border-dashed border-primary/30"
            />
            <Tilt strength={14}>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-3 rounded-[38%_62%_55%_45%/45%_38%_62%_55%] opacity-35 blur-2xl"
                  style={{ background: "var(--gradient-red)" }}
                />
                <AssetImage
                  src="assets\profile.jpeg"
                  alt="Samiksha Wararkar portrait"
                  label="PROFILE"
                  className="relative aspect-[4/5] rounded-[38%_62%_55%_45%/45%_38%_62%_55%] border border-primary/40"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[38%_62%_55%_45%/45%_38%_62%_55%] bg-[linear-gradient(120deg,color-mix(in_oklab,var(--paper)_18%,transparent),transparent_45%)]" />
              </div>
            </Tilt>

            {FLOATERS.map((f) => (
              <span
                key={f.label}
                style={{ animationDelay: f.delay }}
                className={`float-soft glass-panel absolute ${f.pos} px-3 py-1.5 text-[10px] tracking-[0.28em] uppercase`}
              >
                {f.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
