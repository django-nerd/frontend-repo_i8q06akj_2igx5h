import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] sm:min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-widest text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            Interactive • Playful • Modern
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.05]">
            Crafting thoughtful experiences through story-driven design
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            I’m a budding UX designer blending research, prototyping and motion to shape intuitive products.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="rounded-full bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-blue-50 transition-colors">See selected work</a>
            <a href="#story" className="rounded-full border border-white/20 text-white/90 px-6 py-3 font-semibold hover:bg-white/10 transition-colors">My approach</a>
          </div>
        </div>
      </div>
    </section>
  )
}
