import React from 'react';
import Hero from '../Sections/Hero';
import About from '../Sections/About';


const Home = () => {
    return (
        <div>
            <section>
                <Hero></Hero>
            </section>
            <section>
                <About></About>
            </section>
        </div>
    );
};

export default Home;
