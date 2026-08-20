import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./primitives";

const LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "CERTIFICATES", href: "#certificates" },
  { label: "JOURNEY", href: "#journey" },
  { label: "RESUME", href: "#resume" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-panel border-b py-3" : "border-b border-transparent py-6",
      )}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <a href="#top" className="display text-xl tracking-tight sm:text-2xl">
          SAMIKSHA<span className="text-primary"> Wararkar</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[11px] font-medium tracking-[0.22em] text-muted-foreground uppercase transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Magnetic
            href="#contact"
            className="hidden bg-primary text-primary-foreground hover:red-glow sm:inline-flex"
          >
            Let&apos;s Talk ↗
          </Magnetic>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-border lg:hidden"
          >
            <span
              className={cn("h-px w-5 bg-foreground transition", open && "translate-y-[3px] rotate-45")}
            />
            <span
              className={cn(
                "h-px w-5 bg-foreground transition",
                open && "-translate-y-[3px] -rotate-45",
              )}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-panel mt-3 lg:hidden">
          <ul className="flex flex-col px-6 py-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm tracking-[0.22em] uppercase"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
