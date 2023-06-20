import React from 'react'
import { createContext } from "react";
import useData from '../hooks/usePersonajes';
import imagenes from '../Imagenes/imagenes';



export const HarryPotterContext = createContext('')

const HarryPotterProvider = ({ children }) => {

  const [Harry, Ron, Hermione] = imagenes

  const images = [{
    id: 'personajes',
    imagen: Harry
  },
  {
    id: 'hechizos',
    imagen: Ron
  },
  {
    id: 'libros',
    imagen: Hermione,
  }]


  const { personajes, hechizos, objetoHechizos, libros } = useData()


  return (

    <HarryPotterContext.Provider value={{ personajes, hechizos, objetoHechizos, libros, images }}>
      {children}
    </HarryPotterContext.Provider>

  )
}

export default HarryPotterProvider;