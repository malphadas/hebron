import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from "framer-motion"

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b55f8e5e-b6b5-4a14-83c1-8d403e74c011");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-center mb-2 text-lg font-Roboto_Slab"
      >
        Let's Connect
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-center text-5xl font-Roboto"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Roboto_Slab"
      >
        Lorem ipsum odor amet, consectetuer adipiscing elit. Cras parturient
        dignissim egestas nisl sollicitudin sem. Habitant lectus congue.
      </motion.p>

      <motion.form 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        onSubmit={onSubmit} 
        className='max-w-2xl mx-auto'
      >
        <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
        <motion.input 
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          type="text" 
          placeholder='Enter your name' 
          required 
          className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' 
          name='name'
        />
        <motion.input 
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          type="text" 
          placeholder='Enter your email' 
          required 
          className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' 
          name='email'
        />
        </div>
        <motion.textarea 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          rows='6' 
          placeholder='Enter your message' 
          required 
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' 
          name='message'
        />
        <motion.button 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          type='submit' 
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
        >
          Submit <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </motion.button>
      
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className='mt-4'
        >
          {result}
        </motion.p>
      </motion.form>
    </div>
  )
}

export default Contact
