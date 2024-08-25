import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/hero'
import Features from './components/features'

function App() {

  const perfilData = {
    
      title:"Leidy Silva", 
      subtitle:"Ingeniera de sistemas",
      backgroundImage:"/leidy.jpg"
    
  }

    const features = [
    {
        title:"Proyecto Landing",
        longText:"Descrición más detallada", 
        description:"Descripción de la caracteristica 1",
        image:"/landing.jpg"
    },
    {
        title:"Proyecto Calculadora", 
        longText:"Descrición más detallada", 
        description:"Descripción de la caracteristica 1",
        image:"/calculadora.jpg"
    },
    {
        title:"Proyecto Chistes", 
        longText:"Descrición más detallada", 
        description:"Descripción de la caracteristica 1",
        image:"/chistes.jpg"
    },
    {
        title:"Proyecto Números Primos", 
        description:"Descripción de la caracteristica 1",
        image:"/numeros_primos.jpg"
    },
    {
        title:"Proyecto Fibonacci", 
        longText:"Descrición más detallada", 
        description:"Descripción de la caracteristica 1",
        image:"/fibonacci.jpg"
    },
    {
        title:"Proyecto Pares e impares",
        longText:"Descrición más detallada",  
        description:"Descripción de la caracteristica 1",
        image:"/par_o_impar.jpg"
    },
    {
        title:"Proyecto Dedos", 
        longText:"Descrición más detallada", 
        description:"Descripción de la caracteristica 1",
        image:"/dedos.jpg"
    },
    {
        title:"Proyecto Fillblitz",
        longText:"Descrición más detallada",
        description:"Descripción de la caracteristica 1",
        image:"/fillblitz.jpg"
    },
    {
        title:"Proyecto CV", 
        longText:"Descrición más detallada", 
        description:"Descripción de la caracteristica 1",
        image:"/cv.jpg"
    }
]

  return (
    <>
      <Hero data={perfilData}/>
      <Features features={features}/>
    </>
  )
}

export default App
