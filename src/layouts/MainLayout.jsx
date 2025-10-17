import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const MainLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-50  bg-cyan-950'>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer className=' bg-neutral '>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;