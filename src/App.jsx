import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white" style={{ backgroundImage: 'radial-gradient(60rem 30rem at 20% -10%, rgba(99,102,241,0.15), transparent), radial-gradient(50rem 25rem at 90% 10%, rgba(236,72,153,0.12), transparent), radial-gradient(60rem 30rem at -10% 90%, rgba(59,130,246,0.12), transparent)'}}>
      <Navbar />

      <main>
        <Hero />
        <Story />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
