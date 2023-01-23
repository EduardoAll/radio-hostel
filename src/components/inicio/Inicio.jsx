import React from 'react';
import cartel from '../../media/cartel.png';
import fondo from '../../media/fondo.jpg';
import Info from '../info/Info';
import People from '../people/People';
import Subscribe from '../subscribe/Subscribe';
import audio from '../../media/radio.mp3';


const Inicio = () => {
  return (
    <>   
      <section className='h-screen flex flex-col w-full' >
        <img src={fondo} alt='fondo' className='m-auto flex fixed z-0 h-screen w-full' />
        <img src={cartel} alt='cartel' className='mt-20 md:mt-28 flex absolute z-3 h-28'/>
        <audio src={audio} controls className='flex absolute md:relative ml-10 md:ml-20 bottom-6 md:mt-96 text-cyan-500' />
        <div className='w-4/5 h-80 right-10 md:w-3/6 md:h-96 bg-black flex absolute mt-48 z-10 ml-96 md:right-4'></div>
      </section>
      <section>
        <Info />
        <People />
        <Subscribe />
      </section>
    </>

  )
}

export default Inicio