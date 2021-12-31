import React from "react";
import NextLink from 'next/link'

const nav = () => {
  return (
    <div>
      <div className='topNavContainer'>
        <div className='socialMedia'>
          <a href='https://instagram.com/felicidadecapoeira45?utm_medium=copy_link'>
            <img src='images/instagram.png' alt='instagram-logo' />
          </a>
        </div>
      </div>
      <div className="navigationContainer">
          <div className="logo">
            <NextLink href='/'>
            <img src="images/rftlogowhitefig.png" alt="woman-running" />
            </NextLink>
          </div>
          <nav className='navigation'>
          <NextLink href='/'>
            <a>Home</a>
          </NextLink>
          <NextLink href='/about'>
            <a>About</a>
          </NextLink>
          <NextLink href='/contact'>
            <a>Contact</a>
          </NextLink>
          </nav>
      </div>
    </div>
  );
};

export default nav;
