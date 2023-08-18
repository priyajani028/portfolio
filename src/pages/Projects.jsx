import React from 'react'
import Navbar from '../components/Navbar'
import Wall from '../assets/pictures/Wall.svg';

function Projects() {
  return (
    <div className=" bg-[#FFF7E7] text-white m-0 p-0 flex flex-col w-full h-screen ">
      <Navbar/>
      <div className={`h-5/6 overflow-hidden flex flex-col justify-center items-center `}>
        <h1 className="font-light text-9xl  tracking-wide text-stone-700 ">
          My Work
        </h1>
        <img src={Wall} alt="wall"/>
      </div>
    </div>
  )
}

export default Projects