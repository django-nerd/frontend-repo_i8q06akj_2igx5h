import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#story', label: 'Story' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-lg">
          <a href="#top" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-fuchsia-500 shadow-md" />
            <span className="font-semibold tracking-tight text-white">UX by You</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-blue-50 transition-colors">Let’s talk</a>
          </nav>

          <button aria-label="Open menu" onClick={() => setOpen(true)} className="md:hidden text-white/90">
            <Menu size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm">
          <div className="absolute right-4 top-4">
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-white/90 p-2 rounded-lg bg-white/10">
              <X />
            </button>
          </div>
          <div className="mx-4 mt-24 rounded-2xl border border-white/10 bg-slate-900/90 p-6">
            <div className="grid gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg text-white/90">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center rounded-full bg-white text-slate-900 px-4 py-2 font-semibold">Let’s talk</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
