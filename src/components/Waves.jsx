import React, { useState } from 'react'
import 'animate.css';
import '../styles/waves.css'
import {usePortfolioContext} from '../PortfolioContext';

function Waves() {
  const { isWaveHovered, setIsWaveHovered, playWater, stopWater } = usePortfolioContext();

  const handleWaveMouseEnter = () => {
    setIsWaveHovered(true);
  };

  const handleWaveMouseLeave = () => {
    setIsWaveHovered(false);
  };

  return (
    <div className="absolute bottom-0 h-40 w-full p-0 " onMouseEnter={handleWaveMouseEnter} onMouseLeave={handleWaveMouseLeave} >
      {isWaveHovered? (<svg className=' w-full h-full bottom-0 ease-in duration-300' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 40" preserveAspectRatio="none" shapeRendering="auto">
       <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs><g className="parallax " >
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(14 ,165, 233,0.7)" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(2,132,199,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(2,132,199,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(2,132,199)" />
        </g>
    </svg>): (<div className="bg-sky-600 w-full h-full"></div>)}
    </div>
  )
}

export default Waves
