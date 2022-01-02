import HeroSection from '../components/ProjectsPage/HeroSection'
import Process from '../components/ProjectsPage/Process'
import Stats from '../components/ProjectsPage/Stats'
import EnCours from '../components/ProjectsPage/EnCours'
import NosProjets from '../components/ProjectsPage/NosProjets'
import Break from '../components/ProjectsPage/Break'
import ProjectCarousel from '../components/ProjectsPage/ProjectCarousel'

const projets = () => {
  return (
    <>
      <HeroSection />
      <Process />
      <Break />
      <Stats />
      <NosProjets />
      <EnCours />
    </>
  )
}

export default projets
