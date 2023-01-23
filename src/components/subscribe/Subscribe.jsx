import React from 'react'

const Subscribe = () => {
  return (
    <section className='w-full flex relative flex-col m-auto h-96 z-9 bg-white text-black border-y-4 border-black'>
        <h3 className='m-auto mt-6 font-serif text-6xl'>Suscribite</h3>
        <p className='m-auto p-10 text-4xl text-center'>Y no te pierdas nada</p>
        <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-64 mx-auto my-12'> 
          <a href='https://www.youtube.com' target='_blank' rel='noreferrer'>
            Ir a Youtube
          </a> 
        </button>
    </section>
  )
}

export default Subscribe