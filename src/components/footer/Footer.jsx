import React from 'react'
import yt from '../../media/yt.png';
import face from '../../media/face.png';
import insta from '../../media/insta.png';
import wpp from '../../media/wpp.png';




const Footer = () => {
  return (
    <footer className='flex flex-col bg-black w-full h-44 z-5 text-white relative'>


      <div className='flex justify-center mt-14 w-full'> 
        <a href='https://www.youtube.com' target='_blank' rel='noreferrer' className='mr-7'>
          <img src={insta} height='40px' width='40px' alt='instagram' className='' />
        </a>
        <a href='https://www.youtube.com' target='_blank' rel='noreferrer' className='mr-7'>
          <img src={face} height='40px' width='40px' alt='facebook' className='' />
        </a>
        <a href='https://www.youtube.com' target='_blank' rel='noreferrer' className='mr-7'>
          <img src={yt} height='40px' width='40px' alt='youtube' className='' />
        </a>
        <a href='https://www.youtube.com' target='_blank' rel='noreferrer' className='mr-7'>
          <img src={wpp} height='40px' width='40px' alt='whatsapp' className='' />
        </a>
      </div>
      <p className='flex text-center m-auto '> 
        © 2023 by Radio Hostel
      </p>

    </footer>
  )
}

export default Footer