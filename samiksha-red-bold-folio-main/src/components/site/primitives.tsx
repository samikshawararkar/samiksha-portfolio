import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Scroll reveal ------------------------------------------------------- */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span" | "p" | "h2";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Comp>
  );
}

/* Replaceable image placeholder --------------------------------------- */
export function AssetImage({
  src,
  alt,
  label,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  imgClassName?: string;
}) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn("relative overflow-hidden bg-secondary", className)}
    >
      {/* placeholder layer — visible until a real file exists at this path */}
      <div className="grain absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-primary/40 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_60%)] p-4 text-center">
        <span className="display text-2xl text-primary sm:text-4xl">{label ?? "IMAGE"}</span>
        <span className="max-w-[90%] truncate font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          {src.replace(/^\//, "")}
        </span>
      </div>
      {!failed && (
        <img
          ref={imgRef}
          src={src}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
          className={cn("relative h-full w-full object-cover", imgClassName)}
        />
      )}
    </div>
  );
}

/* 3D tilt wrapper ------------------------------------------------------ */
export function Tilt({
  children,
  className,
  strength = 10,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1100px) rotateY(${px * strength}deg) rotateX(${-py * strength}deg) translateZ(0)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(1100px) rotateY(0) rotateX(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn("transition-transform duration-500 ease-out will-change-transform", className)}
    >
      {children}
    </div>
  );
}

/* Magnetic button ------------------------------------------------------ */
export function Magnetic({
  children,
  className,
  href,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const props = {
    ref,
    onMouseMove: onMove,
    onMouseLeave: reset,
    onClick,
    className: cn(
      "inline-flex items-center gap-2 px-7 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-[transform,background-color,color,box-shadow] duration-300 ease-out",
      className,
    ),
  };

  return href ? (
    <a href={href} {...props}>
      {children}
    </a>
  ) : (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

/* Mouse-following light ------------------------------------------------ */
export function CursorLight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current)
          ref.current.style.transform = `translate3d(${e.clientX - 300}px, ${e.clientY - 300}px, 0)`;
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 hidden h-[600px] w-[600px] rounded-full opacity-40 mix-blend-screen blur-[90px] md:block"
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--primary) 40%, transparent), transparent 65%)",
      }}
    />
  );
}

/* Marquee -------------------------------------------------------------- */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={cn("overflow-hidden py-5", className)}>
      <div className="marquee-track whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="display flex items-center text-4xl sm:text-6xl">
            <span className="px-6">{item}</span>
            <span className="text-primary">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* Draggable (movable) wrapper ------------------------------------------ */
export function Draggable({
  children,
  className,
  range = 60,
}: {
  children: ReactNode;
  className?: string;
  range?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const start = useRef<{ x: number; y: number } | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const clamp = (v: number) => Math.max(-range, Math.min(range, v));

  return (
    <div
      ref={ref}
      onPointerDown={(e) => {
        start.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
        setDragging(true);
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!start.current) return;
        setPos({ x: clamp(e.clientX - start.current.x), y: clamp(e.clientY - start.current.y) });
      }}
      onPointerUp={() => {
        start.current = null;
        setDragging(false);
        setPos({ x: 0, y: 0 });
      }}
      onPointerCancel={() => {
        start.current = null;
        setDragging(false);
        setPos({ x: 0, y: 0 });
      }}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) rotate(${pos.x * 0.02}deg)`,
        transition: dragging ? "none" : "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        touchAction: "none",
      }}
      className={cn(dragging ? "cursor-grabbing" : "cursor-grab", className)}
    >
      {children}
    </div>
  );
}
