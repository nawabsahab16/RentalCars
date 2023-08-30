'use client';

import { useContext , useEffect , useState } from "react";

// next Image 
import Image from "next/image";

// react scroll 
import { Link } from "react-scroll";

// components 
import SearchMobile from "./SearchMobile";

// media query hook
import { useMediaQuery } from "react-responsive";

// icons 
import { BiMenuAltRight , BiX} from 'react-icons/bi';

export default function Header() {
    const [header , setHeader] = useState(false);
    const [nav, setNav] = useState(false);

    const desktopMode = useMediaQuery({
      query: '(min-width : 1300px)',
    });

    useEffect(() => {
      const handleScroll = ()=> {
        // header 
        if(window.scrollY > 40 ) {
          setHeader(true);
        }else {
          setHeader(false);
        }
      };
      
      // adding event listener 
      window.addEventListener('scroll', handleScroll);
      // removing event listener 
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };

    });
     
  
    return (
      <header 
        className= {`${
        header ? 'bg-white shadow-md py-2' : 'bg-transparent shadow-none py-4'} 
        fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`} 
        >
        <div className='xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between'>

          <div className='flex justify-between items-center px-4'>
            {/* Logo */}
            <Link 
             to='home'
             smooth={desktopMode} 
             spy={true} 
             className='cursor-pointer'
             >

              <Image src={'/icons/logo.svg'} width={194} height={64} alt='' />
            </Link>
                {/*  nav Open Menu */}

              <div onClick={() => setNav(!nav)}
               className='cursor-pointer xl:hidden'
               >
                {nav ?  (
                <BiX className='text-4xl'/>
                ) : (
                 <BiMenuAltRight className='text-4xl'/>
                )} 
                 </div> 
               </div>
                <nav>

                  <Link 
                  className='cursor-pointer'
                  to='home'
                  activeClass='active'
                  smooth={desktopMode}
                  spy={true}
                  >
                    Home
                  </Link>


                  <Link 
                  className='cursor-pointer'
                  to='cars'
                  activeClass='active'
                  smooth={desktopMode}
                  spy={true}
                  >
                    Cars
                  </Link>


                  <Link 
                  className='cursor-pointer'
                  to='about'
                  activeClass='active'
                  smooth={desktopMode}
                  spy={true}
                  >
                    About
                  </Link>


                  <Link 
                  className='cursor-pointer'
                  to='why'
                  activeClass='active'
                  smooth={desktopMode}
                  spy={true}
                  >
                    Why us 
                  </Link>


                  <Link 
                  className='cursor-pointer'
                  to='testimonials'
                  activeClass='active'
                  smooth={desktopMode}
                  spy={true}
                  >
                   Testimonial
                  </Link>


                  <Link 
                  className='cursor-pointer'
                  to='contact'
                  activeClass='active'
                  smooth={desktopMode}
                  spy={true}
                  >
                    Contacts
                  </Link>

                  
                </nav>


            </div>
      </header>
    );
};
