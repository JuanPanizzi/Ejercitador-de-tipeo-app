import React, { useContext } from 'react'
import { Card } from './Card'
import { HarryPotterContext } from '../context/HarryPotterProvider'



export const InicioJuego = (props) => {
    
    const {images} = useContext(HarryPotterContext)

    const { handleStart } = props
    

    return (

        <main className='ctn-inicioJuego' >
            <div >
                <div className='ctn-superior mx-auto  text-center '>
                    <h1> <span>¡</span>PRACTICA TU TIPEO<span>!</span></h1>
                    <p>Tipea la mayor cantidad de caracteres en un minuto</p>
                    <p> <span>¡</span>Recuerda respetar los tildes<span>!</span></p>
                </div>
            </div>

            <div className='ctn-inferior text-center'>
                    <h2 className='rounded-bottom py-3'>¿Con qué te gustaría practicar?</h2>
                <div className='ctn-cards'>
                    {images.map(({ id, imagen }) =>
                        <Card key={id} id={id} imagen={imagen} handleStart={handleStart} />
                    )}
                </div>
            </div>
        </main>
    )
}
