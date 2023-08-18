import React, { useEffect, createContext, useState, useContext } from 'react';
import useSound from 'use-sound';
// import bgSound from './assets/sounds/game-comedy-interesting-playful-sweet-bright-childish-music-57040.mp3';
// import waterSound from './assets/sounds/sandy-beach-calm-waves-water-nature-sounds-8052.mp3';
import waterSound from './assets/sounds/ocean-waves-1.wav';
import bgSound from './assets/sounds/AlexArth.mp3';

const PortfolioContext = createContext();

export function usePortfolioContext() {
  return useContext(PortfolioContext);
}

export function PortfolioContextProvider({ children }) {
  const [isAllSound, setIsAllSound] = useState(true);
  const [isWaveHovered, setIsWaveHovered] = useState(false);
  const [playWater, { stop: stopWater }] = useSound(waterSound, { volume: 3 });
  const [playbg, { stop: stopbg }] = useSound(bgSound, { volume: 0.7, loop: true, autoplay: true });

  useEffect(() => {
    if (isAllSound) {
      playbg();
    } else {
      stopbg();
    }
  }, [isAllSound, playbg, stopbg]);

  useEffect(() => {
    if (isWaveHovered && isAllSound) {
      //playbg({ volume: 0.2 });
      playWater({ volume: 3 });
    } else {
      stopWater();
    }
  }, [isWaveHovered, isAllSound, playWater, stopWater]);

  return (
    <PortfolioContext.Provider
      value={{
        isAllSound,
        setIsAllSound,
        isWaveHovered,
        setIsWaveHovered,
        playWater,
        stopWater,
        playbg,
        stopbg,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}
