import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import { usePortfolioContext } from '../PortfolioContext';
import Frames from '../components/about/Frames';
import Girl from '../assets/pictures/Girl.svg'


function About() {
  // const { isWaveHovered, setIsWaveHovered, playWater, stopWater } = usePortfolioContext();
  const navigate = useNavigate();
  // const handleButtonClick = () => {
  //   navigate('/skills'); 
  // };

  const handleFrontButtonClick = () => {
    navigate('/skills'); 
  };
  const handleBackButtonClick = () => {
    navigate('/'); 
  };

  return (
    <div className="bg-orange-200 text-white m-0 p-0 w-full h-screen flex ">
      <div className="w-2/6 h-full bg-orange-400/50">
        <Frames/>
      </div>
      <div className="w-4/6 flex flex-col">
        <Navbar />
        <div className="flex-grow overflow-hidden pl-14 pt-14 pr-24">
          <h1 className='font-light text-8xl tracking-wide text-stone-700 mb-6 '>About Me</h1>
          <p className='text-stone-700 text-2xl '>🎓I’m currently in my final year of BTech CSE @ Ahmedabad University. <br/>
✨ I’m interested in becoming a Software Engineer.<br/>
📚 I'm currently learning web technologies and sometimes get curiosity in ML/AI .<br/>
🎯 Goals: Ideating some projects and yes, learning new things each day.<br/>
🎲 Fun fact: My ideas can go wild. I dance in my own room. I eat a lot while working (munching chips quietly right now). <br/>
💁🏻‍♀️ Extra Activities : Design Head, Programming Club'22 || CSE Events Head, Ingenium'23 || Founding Committee Member, Outreach & Logistics Head, ACM </p>
          <img src={Girl} alt="girl" className='h-56 w-56 z-10  drop-shadow-md absolute top-[500px] left-[1000px]' />
          <div className='absolute bottom-32 right-44 z-10 flex flex-col gap-1 justify-center items-center'>
          {/* <button type="button" onClick={handleButtonClick} className="w-16 h-16 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-600 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-600/80 font-medium rounded-xl text-sm p-2 text-center m-2" >
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
              <path d="M38.9631 23.4944L26.3068 36.1507C26.1102 36.3473 25.8596 36.4812 25.5868 36.5354C25.314 36.5897 25.0313 36.5618 24.7744 36.4554C24.5174 36.3489 24.2978 36.1687 24.1433 35.9375C23.9888 35.7062 23.9063 35.4344 23.9062 35.1562V23.9062H7.03125C6.65829 23.9062 6.3006 23.7581 6.03688 23.4944C5.77316 23.2306 5.625 22.8729 5.625 22.5C5.625 22.127 5.77316 21.7693 6.03688 21.5056C6.3006 21.2419 6.65829 21.0937 7.03125 21.0937H23.9062V9.84374C23.9063 9.56562 23.9888 9.29375 24.1433 9.06251C24.2978 8.83127 24.5174 8.65103 24.7744 8.54459C25.0313 8.43816 25.314 8.41029 25.5868 8.46453C25.8596 8.51877 26.1102 8.65267 26.3068 8.8493L38.9631 21.5056C39.0937 21.6361 39.1973 21.7912 39.268 21.9618C39.3386 22.1324 39.375 22.3153 39.375 22.5C39.375 22.6847 39.3386 22.8675 39.268 23.0382C39.1973 23.2088 39.0937 23.3638 38.9631 23.4944Z" fill="#313131"/>
            </svg>
          </button> */}
              <button type="button" onClick={handleFrontButtonClick} className=" flex justify-center items-center w-12 h-12 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-600 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-600/80 font-medium rounded-xl text-sm p-2 text-center " >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

              </button>
              <button type="button" onClick={handleBackButtonClick} className="flex justify-center items-center  w-12 h-12 text-gray-900 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-400 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-400/80 font-medium rounded-xl text-sm p-2 text-center " >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
          
        </div>
        </div>
      </div>
    </div>
  )
}


export default About;
