import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Work } from "@/components/site/Work";
import { About, Certificates, Journey, ResumeCTA, Contact, Footer } from "@/components/site/Sections";
import { CursorLight } from "@/components/site/primitives";

const TITLE = "Samiksha Wararkar — Digital Marketing Fresher Portfolio";
const DESC =
  "Portfolio of Samiksha Wararkar, a Digital Marketing fresher from Nagpur — SEO, WordPress, social media, graphic design and Google Ads practice projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <CursorLight />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Work />
        <Certificates />
        <Journey />
        <ResumeCTA />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
