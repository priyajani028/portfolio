import React from 'react'
import Image1 from '../../assets/pictures/Specs.svg';
import Image2 from '../../assets/pictures/2inOne.svg';
import Image3 from '../../assets/pictures/Cheese.svg';
import Image4 from '../../assets/pictures/Note.svg';


function Frames() {
  return (
    <div className='h-screen overflow-hidden relative'>
        <img src={Image1} alt="frame" className='absolute top-[23px] left-[162px] w-[250px] h-[200px]'/>
        <img src={Image2} alt="frame" className='absolute top-[200px] left-[-30px] w-[400px] h-[350px]'/>
        <img src={Image3} alt="frame" className='absolute left-[66px] top-[500px] w-[214.208px] h-[280px]'/>
        <img src={Image4} alt="frame" className='absolute left-[280px] top-[550px] w-[143.77px] h-[165px]'/>
    </div>
  )
}

export default Frames