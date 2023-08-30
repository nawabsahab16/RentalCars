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
     console.log(header);
  
    return (
      <header 
        className= {`${
        header ? 'bg-white shadow-md py-2' : 'bg-transparent shadow-none py-4'} 
        fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`} 
        >
        <div className='xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between'>
          <div>
            {/* Logo */}
            <Link>
              <Image src={'/icons/logo.svg'} width={194} height={64} alt='' />
            </Link>
          </div>
        </div>
      </header>
    );
};
