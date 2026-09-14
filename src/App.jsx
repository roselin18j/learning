import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './components/layout/Header/Header'
import Mainlayout from './layouts/Mainlayout'

function App() {


  return (
    <>
      <Header />
      <Mainlayout/>
    </>
  )
}

export default App
