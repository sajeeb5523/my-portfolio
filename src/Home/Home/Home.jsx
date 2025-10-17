import React from 'react';
import Hero from '../Sections/Hero';
import About from '../Sections/About';
import Skills from '../Sections/Skills';
import Contact from '../Sections/Contact';
import Projects from '../Sections/Project';

const Home = () => {
    return (
        <div>
            <section>
                <Hero></Hero>
            </section>
            <section>
                <About></About>
            </section>
            <section>
                <Skills></Skills>
            </section>
            <section>
                <Projects></Projects>
            </section>
            <section>
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;
