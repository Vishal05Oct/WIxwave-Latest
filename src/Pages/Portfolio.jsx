import Hero from '../Components/PortfolioHero'
import PortfolioBody from '../Components/Portfolio_Body'
import useRouteSeo from '../hooks/useRouteSeo'

function Portfolio() {
  useRouteSeo('/portfolio')

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <PortfolioBody />
    </main>
  )
}

export default Portfolio
