import React from 'react'

export const Spinner = () => {
  return (
    <div className='vw-100 vh-100 bg-secondary d-flex justify-content-center align-items-center'>
      <div className='d-flex flex-column align-items-center'>
      <div class="spinner-border" role="status">
  <span class="visually-hidden"></span>
</div>
      <h1>Cargando...</h1>
      </div>
</div>
  )
}
