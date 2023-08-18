import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { PortfolioContextProvider } from './PortfolioContext';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <PortfolioContextProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </PortfolioContextProvider>
    </BrowserRouter>
  );
}

export default App;
