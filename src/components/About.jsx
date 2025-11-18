export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_left,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Hi, I’m a UX designer who designs like a storyteller</h2>
            <p className="mt-4 text-white/70">
              I care about the arc of a product: where it begins, where it confuses, and where it clicks. I work end‑to‑end—discovery, flows, prototypes, and usability tests—always grounding decisions in real moments from real people.
            </p>
            <ul className="mt-6 grid gap-3 text-white/80">
              <li>• User research and synthesis</li>
              <li>• Information architecture and flows</li>
              <li>• Prototyping and motion</li>
              <li>• Accessibility and inclusive patterns</li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-white font-semibold">Tools</h3>
              <p className="mt-2 text-white/70 text-sm">Figma, FigJam, After Effects, Notion, Dovetail</p>
              <h3 className="mt-6 text-white font-semibold">Focus</h3>
              <p className="mt-2 text-white/70 text-sm">Mobile apps, onboarding, micro‑interactions, accessibility</p>
              <h3 className="mt-6 text-white font-semibold">Currently exploring</h3>
              <p className="mt-2 text-white/70 text-sm">Narrative structure in product tours and empty states</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
