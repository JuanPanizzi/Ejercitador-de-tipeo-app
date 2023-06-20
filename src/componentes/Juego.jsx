import React from 'react'

export const Juego = (props) => {

  const { name, time, buffer, characters, counterWords, setBuffer, handleSubmit, usoHechizo, tema } = props
  return (

    <div className='ctn-juego'>
      <div className='ctn-superior-juego text-center pb-4 mt-2 rounded-2' >
        <div>
          <h1 className=' rounded-2 '>{name}</h1>
        </div>
        <p >Caracteres Tipeados: {characters}</p>
        <p  >Puntos: {counterWords}</p>
        <p >Tiempo Restante: {time}</p>
        <form onSubmit={handleSubmit}>
          <input type="text" autoFocus onChange={(e) => setBuffer(e.target.value)} value={buffer} className='inputJuego' />
          <button className='p-1 px-2 ' type='Submit'>Submit</button>
        </form>
      </div>

      {tema === 'hechizos' &&
        <div className='ctn-inferior-juego rounded-2  text-center '>
          <h1 className=' rounded-2'>Uso del hechizo:</h1>
          <p className='' >{usoHechizo}</p>
        </div>
      }

    </div>
  )
}


