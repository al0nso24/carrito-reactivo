import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Carrito from './components/Carrito'

function App() {
  return (
    <div>
      <h2 style={{fontWeight: "bolder"}}>Carrito de compras</h2>
      <Carrito></Carrito>
    </div>
  )
}

export default App
