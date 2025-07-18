import { ScriptsGrid } from "./_sections/scripts-grid"
import { Hero } from "./_sections/hero"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <ScriptsGrid />
    </main>
  )
}
