import AboutSection from "../../components/AboutSection"
import ContactSection from "../../components/ContactSection"
import HeroSection from "../../components/HeroSection"
import Navbar from "../../components/Navbar"
import ProjectsSection from "../../components/ProjectsSection"
import SkillsSections from "../../components/SkillsSections"
import StarBackground from "../../components/StarBackground"

import FooterSection from "../../components/FooterSection"

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    <StarBackground/>

    <Navbar/>

    <main>
      <HeroSection/>
      <AboutSection/>
      <SkillsSections/>
      <ProjectsSection/>
      <ContactSection/>
    </main>

    <FooterSection/>

    
 </div>
    
  )
}

export default Home