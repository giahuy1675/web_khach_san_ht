import { homeContent } from "@/config/home";

export default function HomeIntro() {
  return (
    <section
      className="grid min-h-[clamp(360px,63.5svh,520px)] place-items-center px-content py-content"
      aria-labelledby="home-title"
    >
      <div className="w-full max-w-2xl">
        <p className="mb-4 text-xs tracking-widest text-muted">
          {homeContent.intro.eyebrow}
        </p>
        <h1
          id="home-title"
          className="text-4xl font-medium leading-tight tracking-tight text-ink sm:text-6xl"
        >
          {homeContent.intro.title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted">
          {homeContent.intro.description}
        </p>
      </div>
    </section>
  );
}
