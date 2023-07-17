import React, { useContext, useState } from 'react'
import { Wpm } from './Wpm'
import {Spinner } from './Spinner'
import { HarryPotterContext } from '../context/HarryPotterProvider'

export const Main = () => {

  const {personajes, libros, hechizos } =   useContext(HarryPotterContext);
    
    return (
    <>
    {
        personajes.length !== 0 && libros.length !== 0 && hechizos.length !== 0 ?
        <Wpm/> :
        <Spinner/>
    }
    </>
    )
}
