import React from 'react'

export const FinJuego = (props) => {

    const {caracteresTipeados, palabrasAcertadas, handleRestart} = props

  return ( 
    <div className='ctn-finJuego '>
    
    <div className='finJuego text-center py-3'>
        <h1 className='p-2 '><span>¡</span>Fin del juego<span>!</span> </h1>
        <p >Resultados:</p>
        <p >Caracteres Tipeados: <strong>{caracteresTipeados}</strong> </p>
        <p >Puntos: <strong>{palabrasAcertadas}</strong> </p>
        <button onClick={()=> handleRestart()} className=' rounded-2'>Reiniciar Juego</button>
    </div>
  
    
    </div>
  
    
  )
}
