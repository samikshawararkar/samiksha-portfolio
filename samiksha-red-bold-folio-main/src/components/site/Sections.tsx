import { useEffect, useRef, useState } from "react";
import { AssetImage, Magnetic, Reveal, Tilt } from "./primitives";

/* ABOUT ---------------------------------------------------------------- */
export function About() {
  const points = ["Analytical", "Creative", "Curious", "Fast Learner"];
  return (
    <section id="about" className="paper-band relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <h2 className="display text-[9.5vw] leading-[0.92] sm:text-[6vw]">
            Data mindset.
            <br />
            <span className="text-primary">Creative direction.</span>
          </h2>
        </Reveal>
        <Reveal delay={120} className="flex flex-col justify-center">
          <p className="max-w-md text-base leading-relaxed opacity-70">
            B.Tech Data Science graduate exploring Digital Marketing through practical projects in
            SEO, WordPress, Social Media, Graphic Design and Google Ads.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-px bg-ink/15">
            {points.map((p) => (
              <li
                key={p}
                className="shine bg-paper px-5 py-6 text-sm tracking-[0.2em] uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <div className="mx-auto mt-20 max-w-[1400px] border-t border-ink/15 px-5 pt-12 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { k: "Focus", v: "SEO + Content", d: "Structure, keywords, on-page basics" },
            { k: "Craft", v: "Design Systems", d: "Carousels, posters, brand-consistent visuals" },
            { k: "Growth", v: "Paid + Social", d: "Campaign structure and content planning" },
          ].map((c, i) => (
            <Reveal key={c.k} delay={i * 90} className="card-lift rounded-xl border border-ink/15 bg-paper p-7">
              <span className="text-[10px] tracking-[0.3em] text-primary uppercase">{c.k}</span>
              <h3 className="display mt-4 text-2xl sm:text-3xl">{c.v}</h3>
              <p className="mt-3 text-sm opacity-70">{c.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* CERTIFICATES --------------------------------------------------------- */
const CERTS = [
  { title: "Instagram Marketing Masterclass", issuer: "IIDE", img: "/assets/certificate1.jpg" },
  { title: "Data Science Job Simulation", issuer: "BCG x Forage", img: "/assets/certificate2.jpg" },
  { title: "Python Programming", issuer: "DevTown", img: "/assets/certificate3.jpg" },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="display text-[10vw] leading-[0.92] sm:text-[5vw]">
            Certified <span className="text-primary">/</span> <span className="text-outline">Learning</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CERTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <Tilt strength={10}>
                <article className="glass-panel card-lift shine group h-full rounded-xl p-4">
                  <AssetImage
                    src={c.img}
                    alt={`${c.title} certificate`}
                    label="CERTIFICATE"
                    className="aspect-[4/3] border border-border"
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-4">
                    <span className="text-[10px] tracking-[0.3em] text-primary uppercase">
                      {c.issuer}
                    </span>
                    <h3 className="display mt-3 text-2xl">{c.title}</h3>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* JOURNEY -------------------------------------------------------------- */
const STEPS = [
  "Data Science",
  "Digital Marketing",
  "SEO",
  "WordPress",
  "SMM",
  "Graphic Design",
  "Google Ads",
  "First Opportunity",
];

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height + window.innerHeight * 0.4;
      const p = (window.innerHeight * 0.8 - r.top) / total;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="journey" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="display text-[10vw] leading-[0.92] sm:text-[5vw]">
            The <span className="text-gradient-red">Journey</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-16 pl-10 sm:pl-24">
          <div className="absolute top-0 bottom-0 left-3 w-px bg-border sm:left-10">
            <div
              className="w-full origin-top bg-primary transition-[height] duration-200 ease-out"
              style={{ height: `${progress * 100}%`, boxShadow: "var(--glow-red)" }}
            />
          </div>

          {STEPS.map((s, i) => {
            const reached = progress > (i + 0.4) / STEPS.length;
            return (
              <div key={s} className="relative py-7">
                <span
                  className={`absolute top-1/2 -left-[30px] h-3 w-3 -translate-y-1/2 rounded-full border transition-colors duration-500 sm:-left-[57px] ${
                    reached ? "border-primary bg-primary" : "border-border bg-background"
                  }`}
                />
                <div className="flex flex-wrap items-baseline gap-4">
                  <span className="display text-sm text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`display text-3xl transition-colors duration-500 sm:text-5xl ${
                      reached ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {s}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* RESUME --------------------------------------------------------------- */
export function ResumeCTA() {
  return (
    <section id="resume" className="relative overflow-hidden py-28 sm:py-40">
      <div
        aria-hidden
        className="blob absolute top-1/2 left-1/2 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
        style={{ background: "var(--gradient-red)" }}
      />
      <div className="relative mx-auto max-w-[1400px] px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="display text-[10vw] leading-[0.92] sm:text-[5.4vw]">
            Ready for the
            <br />
            <span className="text-gradient-red">first opportunity.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-md text-sm text-muted-foreground">
            Open to Digital Marketing internships and entry-level roles.
          </p>
        </Reveal>
        <Reveal delay={200} className="mt-12 flex flex-wrap justify-center gap-4">
          <Magnetic
            href="/assets/Samiksha-Wararkar-Resume.pdf"
            className="shine rounded-full bg-primary text-primary-foreground hover:red-glow"
          >
            View Resume
          </Magnetic>
          <a
            href="/assets/Samiksha-Wararkar-Resume.pdf"
            download
            className="shine inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-colors hover:border-primary hover:text-primary"
          >
            Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* CONTACT -------------------------------------------------------------- */
export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="display text-[9.5vw] leading-[0.9] sm:text-[6vw]">
              Let&apos;s <span className="text-gradient-red">talk.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <ul className="mt-12 space-y-5 text-sm">
              {[
                { k: "Email", v: "wararkarsamiksha2003@gmail.com", href: "mailto:wararkarsamiksha2003@gmail.com" },
                { k: "Phone", v: "+918668694492", href: "tel:+918668694492" },
                { k: "LinkedIn", v: "linkedin.com/in/samiksha-wararkar-331aa6284", href: "#" },
                { k: "Location", v: "Nagpur, Maharashtra, India" },
              ].map((row) => (
                <li key={row.k} className="flex items-baseline gap-6 border-b border-border pb-4">
                  <span className="w-24 shrink-0 text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                    {row.k}
                  </span>
                  {row.href ? (
                    <a href={row.href} className="transition-colors hover:text-primary">
                      {row.v}
                    </a>
                  ) : (
                    <span>{row.v}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>



        <Reveal delay={160}>
  <form
    action="https://formsubmit.co/wararkarsamiksha2003@gmail.com"
    method="POST"
    className="glass-panel space-y-6 rounded-2xl p-7"
  >
    <input
      type="hidden"
      name="_subject"
      value="New portfolio message"
    />

    <input
      type="hidden"
      name="_captcha"
      value="false"
    />

    <input
      type="hidden"
      name="_template"
      value="table"
    />

    {[
      { id: "name", label: "Name", type: "text" },
      { id: "email", label: "Email", type: "email" },
    ].map((f) => (
      <div key={f.id}>
        <label
          htmlFor={f.id}
          className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase"
        >
          {f.label}
        </label>

        <input
          id={f.id}
          name={f.id}
          type={f.type}
          required
          placeholder={f.label}
          className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors focus:border-primary"
        />
      </div>
    ))}

    <div>
      <label
        htmlFor="message"
        className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase"
      >
        Message
      </label>

      <textarea
        id="message"
        name="message"
        rows={4}
        required
        placeholder="Message"
        className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>

    <button
      type="submit"
      className="shine w-full rounded-full bg-primary px-7 py-4 text-xs font-semibold tracking-[0.25em] text-primary-foreground uppercase transition-shadow duration-300 hover:red-glow"
    >
      Send Message →
    </button>
  </form>
</Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="grain border-t border-border bg-ink py-14">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-end justify-between gap-6 px-5 sm:px-8">
        <div>
          <span className="display text-4xl">
            SAMIKSHA<span className="text-primary"> Wararkar</span>
          </span>
          <p className="mt-3 text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
            Digital Marketing • Design • SEO
          </p>
        </div>
        <p className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} Samiksha Wararkar
        </p>
      </div>
    </footer>
  );
}