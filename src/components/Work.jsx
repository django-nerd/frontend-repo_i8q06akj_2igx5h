export default function Work() {
  const projects = [
    {
      title: 'FlowNote — Mobile notes with motion',
      tag: 'Case Study',
      desc:
        'Reducing cognitive load with playful micro‑interactions. From problem framing to prototype and usability testing.',
    },
    {
      title: 'MetroGo — Ticketing without friction',
      tag: 'Concept',
      desc:
        'Reimagining city transit onboarding using progressive disclosure, error states, and accessibility from day one.',
    },
    {
      title: 'Hearth — Calmer health check‑ins',
      tag: 'Prototype',
      desc:
        'A kinder symptom logger with inclusive language. Mapping the emotional journey across screens and states.',
    },
  ]

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected work</h2>
            <p className="mt-3 text-white/70 max-w-xl">
              A snapshot of projects that highlight research depth, craft, and crisp storytelling.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-white/90 hover:bg-white/10">
            Request full portfolio
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 ring-1 ring-white/10" />
              <div className="mt-4 text-[11px] uppercase tracking-widest text-white/60">{p.tag}</div>
              <h3 className="mt-1 text-lg font-semibold text-white group-hover:text-white">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
              <div className="mt-4 text-sm text-white/80">Read the story →</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
