import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let’s make something meaningful</h2>
            <p className="mt-3 text-white/70">Open to internships, junior roles, and collaborations.</p>
            <div className="mt-6 flex items-center gap-4 text-white/80">
              <a className="underline underline-offset-4" href="mailto:hello@portfolio.dev">hello@portfolio.dev</a>
              <a className="underline underline-offset-4" href="#">LinkedIn</a>
              <a className="underline underline-offset-4" href="#">Behance</a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              {!sent ? (
                <div className="grid gap-4">
                  <input required placeholder="Name" className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
                  <input required type="email" placeholder="Email" className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
                  <textarea required rows="4" placeholder="Tell me about the project" className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
                  <button disabled={loading} className="rounded-full bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-blue-50 disabled:opacity-70">{loading ? 'Sending…' : 'Send message'}</button>
                </div>
              ) : (
                <div className="text-white/90">Thanks! I’ll reply soon.</div>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-white/60">
          <div>© {new Date().getFullYear()} UX by You</div>
          <div className="text-sm">Built with love + curiosity</div>
        </div>
      </div>
    </section>
  )
}
