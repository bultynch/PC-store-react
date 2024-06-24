import React from 'react'
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer flex flex-col md:flex-row items-center justify-between p-4  text-white bg-violet-900 dark:bg-violet-950">

      <aside className="flex items-center mb-4 md:mb-0">
        <img src='/iconopag.ico' className='w-6 h-6 mr-2' alt='logo-footer' />
        <p>Copyright © 2024 - Todos los derechos reservados</p>
      </aside> 

      <nav className="flex gap-4 sm:{flex flex-items center justify-center}">
        <FaInstagram className='w-6 h-6' />
        <FaXTwitter className='w-6 h-6' />
        <FaFacebook className='w-6 h-6' />
      </nav>
      
    </footer>
  );
}

export default Footer;
