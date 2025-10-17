import React from 'react';

const About = () => {
    return (
        <div id='about' className="w-10/12 mx-auto py-5 md:py-10 ">
            <h2 className="text-xl md:text-4xl font-bold text-center my-5 md:my-10 text-[#FA5F55]">About me</h2>
            <div className='p-7 border-s-4 border-e-4 border-white rounded-3xl text-justify'>
                {/* Introduction */}
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    Hello! I'm <span className="font-semibold">Sajeeb</span>, a passionate Frontend Developer and Computer Science student from Bangladesh. I love turning ideas into interactive and visually appealing web experiences.
                </p>

                {/* My programming journey */}
                <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    My programming journey began out of pure curiosity — I wanted to understand how websites worked behind the scenes. Over time, that curiosity turned into a deep passion for building things that not only look great but also solve real problems.
                </p>

                {/* The type of work my enjoy */}
                <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    I enjoy working with frontend technologies like React, Tailwind CSS, and JavaScript, focusing on smooth user experiences and eye-catching layouts. I also love combining logic with creativity — turning simple ideas into interactive designs that feel alive.
                </p>

                {/* hobbies or interests outside of programming */}
                <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    Outside of programming, I’m deeply interested in planting — I find peace in growing and nurturing plants, which helps me stay grounded and patient. I also love exploring creative design resources, from UI inspirations to color palettes, and experimenting with how visual elements shape user emotions. Additionally, photography is one of my favorite ways to capture perspectives — it helps me appreciate details, light, and composition, which often influence my design sense too.
                </p>

                {/* My personality */}
                <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    My goal is to keep growing as a developer, take on new challenges, and create digital products that make a difference.
                </p>

            </div>
        </div>
    );
};

export default About;
