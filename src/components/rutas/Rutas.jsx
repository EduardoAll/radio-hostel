import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InvalidPage from '../invalidPage/InvalidPage';
import Inicio from '../inicio/Inicio';
import Contacto from '../contacto/Contacto';
import Programacion from '../programacion/Programacion';
import Loading from '../loading/Loading';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


const Rutas = () => {
    const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
     setTimeout(() => {
       setIsLoading(false);
     }, 2000);
   })


    return (

        <>
            {isLoading===true?
                <Loading />:
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/programacion' element={<Programacion />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/*' element={<InvalidPage />} />
                </Routes>
                <Footer />
            </Router>  
            }     
        </>
    );
}

export default Rutas;