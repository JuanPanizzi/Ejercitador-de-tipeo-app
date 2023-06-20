import React from 'react'

export const Card = (props) => {

  // const [Harry, Hermione, Ron] = imagenes

  const { imagen, id, handleStart } = props
  return (
    <div className="ctn-card card col-7 my-2 col-sm-3 border border-dark" >
      <img src={imagen} className="card-img-top " />
      <div className="body-card danger p-2">
        <button className='btn btn-card  w-100 text-capitalize py-0' id={id} onClick={(e) => { handleStart(e) }}>{id}</button>
      </div>
    </div>

  )
}
