export default function Story() {
  const timeline = [
    {
      year: 'Now',
      title: 'Designing with curiosity',
      text:
        'I love turning ambiguous problems into clear, testable stories. I sketch fast, prototype early, and validate with real users.',
    },
    {
      year: '2023',
      title: 'From patterns to principles',
      text:
        'Explored accessibility, information architecture, and micro-interactions. Fell in love with systems thinking.',
    },
    {
      year: '2022',
      title: 'First steps into UX',
      text:
        'Started with passion projects and case studies—learning research methods and low‑fi to hi‑fi flows.',
    },
  ]

  return (
    <section id="story" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">A story-first approach</h2>
          <p className="mt-3 text-white/70">
            Every project starts with a narrative: a person, a moment, a friction. I map the arc—from first impression to delight—and design to support it.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {timeline.map((item) => (
            <div key={item.year} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-sm uppercase tracking-widest text-fuchsia-300/80">{item.year}</div>
                  <h3 className="mt-1 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-white/70">{item.text}</p>
                </div>
                <div className="hidden sm:block h-16 w-16 rounded-xl bg-gradient-to-tr from-blue-500/40 to-fuchsia-500/40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
