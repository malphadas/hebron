import React from 'react'
import Repos from './Repos'
import { motion } from "framer-motion"

const Projects = ({ isDarkMode }) => {
  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
        
        <motion.h4 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-2 text-lg font-Roboto_Slab"
        >
          What I've been up to
        </motion.h4>
        
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-5xl font-Roboto"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Roboto_Slab"
        >
          Lorem ipsum odor amet, consectetuer adipiscing elit. Cras parturient
          dignissim egestas nisl sollicitudin sem. Habitant lectus congue.
        </motion.p>
        
        <Repos isDarkMode={isDarkMode} />
    </div>
  )
}

export default Projects
