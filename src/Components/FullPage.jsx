import React from 'react'
import Header from './Header/Header'
import AboutSection from './Body/AboutSection'
import SkillsSection from './Body/SkillsSection'
import Experience from './Body/Experience'
import Projects from './Body/Projects'
import Contact from './Body/Contact'

const FullPage = () => {
  return (
    <div>
      <Header />
      <section id="about">
        <AboutSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="Expericence">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};


export default FullPage
