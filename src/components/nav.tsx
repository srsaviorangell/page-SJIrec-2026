import { useState } from 'react';
import sanfonaLogo1 from '../assets/logos-of/pgn2.png'
import { Link } from "react-scroll";



export function Nav() {
  const [nav, setNav] = useState([])

  return (
    <>
      { /* ==================== DESKTOP NAV ==================== */}
      <nav className="bg-[#ffffff] hidden md:flex  fixed top-0 left-0 w-full h-20  flex-row justify-between items-center  px-10 z-50 shadow-lg rounded-b-lg">
        <div className=" w-max h-full flex items-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 ">
          <img className="w-28"  src={sanfonaLogo1} alt="" />
        </div>
        <ul className=" w-max h-full flex flex-row justify-between items-center gap-10 font-medium ">

          <Link to="inicio" smooth duration={500} offset={-80} id='botao-inicio' className='cursor-pointer  hover:text-orange-500 flex flex-col justify-center items-center transition-all duration-300 hover:scale-110 hover:-translate-y-1' >
            <li>Início</li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </Link>

          <Link to="programacao" smooth duration={500} offset={-80} id='botao-progamacao' className="cursor-pointer  hover:text-orange-500 flex flex-col justify-center items-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 " >

            <li >Progamação</li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>

          </Link>

          <Link to="contato" smooth duration={500} offset={-80} id='botao-contato' className="cursor-pointer  hover:text-orange-500 flex flex-col justify-center items-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 " >

            <li>Contato</li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>

          </Link>
        </ul>
      </nav>
      {/* ==================== MOBILE - LOGO ==================== */}
      <div className='md:hidden fixed top-0 left-0 w-full bg-[#ffffff] shadow-lg z-50 rounded-b-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1'>
        <div className='w-full h-15 flex justify-center items-center py-3'>
          <img className="w-20" src={sanfonaLogo1} alt="" />
        </div>
      </div>
      {/* ==================== MOBILE - BOTTOM NAVIGATION ==================== */}
      <nav className=" md:hidden fixed bottom-0 left-0 w-full bg-[#ffffff]  z-50 shadow-[0_-3px_15px_rgba(0,0,0,0.30)] rounded-t-lg">
        <ul className="   flex justify-around items-center py-2 flex-row gap-1 z-50  ">
          <Link to="inicio" smooth duration={500} offset={-80} id='botao-inicio' className='cursor-pointer  hover:text-orange-500 flex flex-col justify-center items-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 inline-block"' >
            <li>Início</li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </Link>

          <Link to="programacao" smooth duration={500}  offset={-80} id='botao-progamacao' className="cursor-pointer  hover:text-orange-500 flex flex-col justify-center items-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 " >

            <li >Progamação</li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>

          </Link>

          <Link to="contato" smooth duration={500} offset={-80} id='botao-contato' className="cursor-pointer  hover:text-orange-500 flex flex-col justify-center items-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 " >

            <li>Contato</li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>

          </Link>
        </ul>
      </nav>


    </>
  );
}



