import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TechStack from '../components/TeckStack';

function Skills() {
    const navigate = useNavigate();
    // const handleButtonClick = () => {
    //   navigate('/projects'); 
    // };
    const handleFrontButtonClick = () => {
      navigate('/projects'); 
    };
    const handleBackButtonClick = () => {
      navigate('/about'); 
    };

  return (
    <div className='bg-lime-200 text-white m-0 p-0 w-full h-screen overflow-hidden relative'>
        <div className='bg-lime-300 absolute top-0 left-0 translate-y-[-200px] translate-x-[-200px] rotate-[-22deg] w-[1216px] h-[1574px]'></div>
        <Navbar />
        <div className='relative pt-20 pl-32 flex flex-col justify-center gap-10'>
            <div>
            <h1 className="w-fit font-light text-8xl tracking-wide text-stone-700">
                Skills...
            </h1>
            </div>
            <div className="flex w-fit"> 
              <TechStack />
            </div>
            <div className='absolute bottom-32 right-44 z-10 flex flex-col gap-1 justify-center items-center'>
              <button type="button" onClick={handleFrontButtonClick} className=" flex justify-center items-center w-12 h-12 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-red-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-400 shadow-lg shadow-red-400/50 dark:shadow-lg dark:shadow-red-400/80 font-medium rounded-xl text-sm p-2 text-center " >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

              </button>
              <button type="button" onClick={handleBackButtonClick} className="flex justify-center items-center  w-12 h-12 text-gray-900 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-600 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-amber-600/80 font-medium rounded-xl text-sm p-2 text-center" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
        </div>
        </div>
    </div>
  )
}


export default Skills



// Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=35956">Pixabay</a>