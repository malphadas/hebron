import React from 'react'
import Repos from './Repos'

const Projects = () => {
  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
        
        <h4 className="text-center mb-2 text-lg font-Roboto_Slab">
        What I've been up to
      </h4>
      <h2 className="text-center text-5xl font-Roboto">Projects</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Roboto_Slab">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Cras parturient
        dignissim egestas nisl sollicitudin sem. Habitant lectus congue.
      </p>
        
        <Repos/>
    </div>
  )
}

export default Projects
