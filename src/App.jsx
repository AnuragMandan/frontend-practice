import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
// useEffect(()=>{
//   alert("welcome to this page.")
// },[])
  return (
    <>
      <Cards/>
    </>
  )
}

export default App
