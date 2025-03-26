import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-6'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="logo" className="w-36 mx-auto mb-2" />

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="mail icon" className="w-6" />
            contact@hebron-holdings.com
        </div>
      </div>

      <div className='text-center mt-12 sm:flex items-center justify-between border-t border-gray-400 mx-[10%] py-6' > 
          <p className=''>&copy; {new Date().getFullYear()} Hebron Holdings. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
    <a target="_blank" href="https://linkedin.com/in" rel="noopener noreferrer">LinkedIn</a>
</li>
          
        </ul>
      </div>
    </div>
  )
}

export default Footer
