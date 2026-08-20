import { useEffect, useState } from "react";
import { AssetImage, Draggable, Reveal, Tilt } from "./primitives";

type Project = {
  num: string;
  tag: string;
  title: string;
  label: string;
  image: string;
  bullets: string[];
  study: { objective: string; process: string[]; tools: string[]; learned: string };
};

export const PROJECTS: Project[] = [
  {
    num: "01",
    tag: "WordPress",
    title: "SEO Website",
    label: "Practice Project",
    image: "/assets/wordpress.jpg",
    bullets: ["Homepage", "About", "Services", "SEO-friendly structure"],
    study: {
      objective: "Build a small business style website with a clean, SEO-friendly structure.",
      process: [
        "Planned sitemap and page hierarchy",
        "Built Homepage, About and Services pages",
        "Set titles, meta descriptions and heading order",
        "Checked mobile layout and page speed basics",
      ],
      tools: ["WordPress", "Elementor", "Yoast SEO", "Google PageSpeed Insights"],
      learned: "How site structure, internal links and on-page basics work together.",
    },
  },
  {
    num: "02",
    tag: "SEO",
    title: "SEO Audit + Keyword Research",
    label: "Learning Project",
    image: "/assets/seo-dashboard.jpg",
    bullets: ["Keywords", "Search Intent", "Difficulty", "Content Ideas", "On-Page Audit"],
    study: {
      objective: "Practice keyword research and a basic on-page audit on a sample website.",
      process: [
        "Collected seed keywords and grouped by intent",
        "Compared difficulty and volume ranges",
        "Mapped keywords to content ideas",
        "Logged on-page issues in an audit sheet",
      ],
      tools: ["Google Keyword Planner", "Ubersuggest", "Google Search Console", "Sheets"],
      learned: "Search intent matters more than raw volume when planning content.",
    },
  },
  {
    num: "03",
    tag: "SMM",
    title: "Social Media Content Strategy",
    label: "Practice Project",
    image: "/assets/smm-grid.jpg",
    bullets: ["Posts", "Reels", "Captions", "Hashtags", "Content Calendar"],
    study: {
      objective: "Design a 7-day content plan for a sample brand page.",
      process: [
        "Defined audience and content pillars",
        "Drafted 7 days of posts and reel ideas",
        "Wrote captions and hashtag sets",
        "Arranged a visual grid and calendar",
      ],
      tools: ["Canva", "Instagram", "Google Sheets", "Notion"],
      learned: "Consistency and a clear pillar system make content planning far faster.",
    },
  },
  {
    num: "04",
    tag: "Graphic Design",
    title: "Creative Design Gallery",
    label: "Personal Design Project",
    image: "/assets/graphic-gallery.jpg",
    bullets: [
      "SEO Tips",
      "Digital Marketing",
      "SEO vs SEM vs PPC",
      "Instagram Carousel",
      "Marketing Infographic",
    ],
    study: {
      objective: "Explain marketing concepts visually through a set of original designs.",
      process: [
        "Chose five marketing topics",
        "Built a shared type and colour system",
        "Designed carousels, posters and infographics",
        "Refined spacing, contrast and hierarchy",
      ],
      tools: ["Canva", "Figma basics", "Colour theory", "Typography"],
      learned: "A repeatable visual system keeps a series looking like one brand.",
    },
  },
  {
    num: "05",
    tag: "Google Ads",
    title: "Google Ads Campaign Structure",
    label: "Practice Campaign",
    image: "/assets/google-ads.jpg",
    bullets: [
      "Objective",
      "Audience",
      "Keywords",
      "Sample Headlines",
      "Sample Descriptions",
      "Practice Budget",
    ],
    study: {
      objective: "Structure a search campaign end to end as a practice exercise.",
      process: [
        "Defined objective and target audience",
        "Built ad groups around keyword themes",
        "Wrote sample headlines and descriptions",
        "Planned a practice budget and bidding approach",
      ],
      tools: ["Google Ads (draft mode)", "Keyword Planner", "Sheets"],
      learned: "Tight ad-group themes keep ad copy relevant to the search query.",
    },
  },
];

function CaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-ink/95 backdrop-blur-md">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex items-start justify-between gap-6">
          <div>
            <span className="text-[11px] tracking-[0.3em] text-primary uppercase">
              {project.num} / {project.tag}
            </span>
            <h3 className="display mt-4 text-5xl sm:text-7xl">{project.title}</h3>
            <span className="mt-4 inline-block border border-primary/50 px-3 py-1 text-[10px] tracking-[0.25em] text-primary uppercase">
              {project.label}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 border border-border px-4 py-3 text-[11px] tracking-[0.25em] uppercase transition-colors hover:border-primary hover:text-primary"
          >
            Close ✕
          </button>
        </div>

        <AssetImage
          src={project.image}
          alt={project.title}
          label={project.tag.toUpperCase()}
          className="mt-10 aspect-[16/9] border border-border"
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          <div>
            <h4 className="display text-xl text-primary">Objective</h4>
            <p className="mt-3 text-sm text-muted-foreground">{project.study.objective}</p>
          </div>
          <div>
            <h4 className="display text-xl text-primary">Process</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {project.study.process.map((p) => (
                <li key={p}>— {p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="display text-xl text-primary">Tools</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.study.tools.map((t) => (
                <span key={t} className="border border-border px-3 py-1 text-[11px] uppercase">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="display text-xl text-primary">What I Learned</h4>
            <p className="mt-3 text-sm text-muted-foreground">{project.study.learned}</p>
          </div>
        </div>

        {project.num === "05" && (
          <p className="mt-12 border-l-2 border-primary pl-4 text-[11px] tracking-[0.25em] text-primary uppercase">
            Practice campaign — no paid ads were run
          </p>
        )}
      </div>
    </div>
  );
}

function ProjectRow({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const flipped = Number(project.num) % 2 === 0;

  return (
    <Reveal className="group border-t border-border py-14 transition-colors duration-500 hover:bg-[color-mix(in_oklab,var(--primary)_7%,transparent)]">
      <div
        className={`mx-auto grid max-w-[1400px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 ${
          flipped ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <div className="flex items-baseline gap-5">
            <span className="display text-6xl text-outline-red transition-all duration-500 group-hover:text-primary group-hover:[-webkit-text-stroke:0] sm:text-8xl">
              {project.num}
            </span>
            <span className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
              {project.tag}
            </span>
          </div>

          <h3 className="display mt-5 text-4xl sm:text-6xl">{project.title}</h3>

          <span className="mt-5 inline-block border border-primary/50 px-3 py-1 text-[10px] tracking-[0.25em] text-primary uppercase">
            {project.label}
          </span>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs tracking-[0.15em] text-muted-foreground uppercase">
            {project.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onOpen}
            className="mt-9 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase transition-colors hover:text-primary"
          >
            <span className="text-primary">{project.num}</span>
            View Case Study
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              ↗
            </span>
          </button>
        </div>

        <div className="relative">
          <Draggable range={70}>
            <Tilt strength={8}>
              <button
                type="button"
                onClick={onOpen}
                aria-label={`Open case study: ${project.title}`}
                className="block w-full overflow-hidden border border-border transition-shadow duration-500 group-hover:shadow-[var(--shadow-editorial)]"
              >
                <AssetImage
                  src={project.image}
                  alt={project.title}
                  label={project.tag.toUpperCase()}
                  className="aspect-[16/10]"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            </Tilt>
          </Draggable>
          <span className="pointer-events-none absolute -bottom-6 right-0 text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
            Drag me ✥
          </span>
        </div>

      </div>
    </Reveal>
  );
}

export function Work() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="display text-[10vw] leading-[0.92] sm:text-[5.4vw]">
            Selected <span className="text-primary">Work</span>
          </h2>
        </Reveal>
      </div>

      <div className="mt-14">
        {PROJECTS.map((p) => (
          <ProjectRow key={p.num} project={p} onOpen={() => setActive(p)} />
        ))}
      </div>

      {/* graphic design collage */}
      <div className="mx-auto mt-24 max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mb-8 flex items-end justify-between gap-6">
          <h3 className="display text-3xl sm:text-5xl">
            Design <span className="text-primary">Gallery</span>
          </h3>
          <span className="text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
            Personal design project
          </span>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-6 [perspective:1400px]">
          {[
            { label: "SEO TIPS", cls: "sm:col-span-3 aspect-[4/3] sm:-rotate-2" },
            { label: "DIGITAL MARKETING", cls: "sm:col-span-3 aspect-[4/3] sm:rotate-1 sm:mt-8" },
            { label: "SEO VS SEM VS PPC", cls: "sm:col-span-2 aspect-square sm:rotate-2" },
            { label: "IG CAROUSEL", cls: "sm:col-span-2 aspect-square sm:-rotate-1 sm:-mt-6" },
            { label: "INFOGRAPHIC", cls: "sm:col-span-2 aspect-square sm:rotate-1" },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 70} className={item.cls}>
              <Tilt strength={12} className="h-full">
                <AssetImage
                  src="/assets/graphic-gallery.jpg"
                  alt={`Design: ${item.label}`}
                  label={item.label}
                  className="h-full border border-primary/30 transition-shadow duration-500 hover:shadow-[var(--shadow-editorial)]"
                />
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>

      {active && <CaseStudy project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
