import React from 'react'
import GradientSpheres from '../components/GradientSpheres'
import TitleHeader from '../components/TitleHeader'
import Carousel from '../components/Carousel'

const Projects = () => {
  return (
    <section id='projects' className='h-full w-full relative md:pt-30 pt-10'>

        {/* bg gradient color */}
      <GradientSpheres
        sphere1Class="projects-gradient-sphere projects-sphere-1"
        sphere2Class="projects-gradient-sphere projects-sphere-2"
      />

        <div className='w-full md:py-20 py-10 relative z-10'>
       <div className="container mx-auto md:p-0 px-5">
                <TitleHeader title={"My PROJECTS"} number={"03"}
          text={"My Go-To Tools for Crafting Solutions"} />
            </div>

            <div className="md:pt-20 pt-10">
                <Carousel />
            </div>
          </div>

    </section>
  )
}

export default Projects