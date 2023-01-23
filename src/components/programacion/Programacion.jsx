import React from 'react'
import fondo from '../../media/fondo.jpg';
import rayas from '../../media/rayas.jpg';

const Programacion = () => {
  return (
    <>   
      <section className='w-full bg-violet-500'>
        <img src={fondo} alt='fondo' />
      </section>
      <section className='w-full h-96 flex border-y-4 border-black'>
        <div className='w-full h-96 flex flex-col text-black'>
          <img className='flex absolute h-96 w-full m-0' src={rayas} alt='fondo' />
          <p className='text-center m-auto text-3xl text-white p-6 z-10'>Escucha lo mejor de Radio Hostel, en Spotify.</p>
          <iframe className='spoty h-96 mb-0 p-8 z-10' src="https://open.spotify.com/embed/playlist/0qqP7YbPQXYEPzGejzNI0i" title="Spotify player" allow="encrypted-media"></iframe>
        </div>
      </section>
    </>
    
  )
}

export default Programacion