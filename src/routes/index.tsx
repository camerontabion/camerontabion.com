import { createFileRoute } from "@tanstack/react-router";
import Hero from "~/app/Hero";
import Projects from "~/app/Projects";
import Skills from "~/app/Skills";
import { Background } from "~/components/Background";
import { CursorStar } from "~/components/CursorStar";
import Footer from "~/components/Footer";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  return (
    <main
      id="main-content"
      className="relative flex w-full flex-col gap-24 px-6 py-16 text-foreground md:gap-32 md:py-24"
    >
      <div className="pointer-events-none fixed inset-0 z-20 size-full animate-fade-out bg-background motion-reduce:animate-none motion-reduce:opacity-0" />
      <Background />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
      <CursorStar />
    </main>
  );
}
