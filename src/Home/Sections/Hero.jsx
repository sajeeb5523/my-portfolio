import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';


const Hero = () => {
    return (
        <div id="home" className="w-10/12 mx-auto py-5 md:py-10  ">
            <div className="flex items-center  justify-center lg:justify-end lg:gap-30  flex-col md:flex-row-reverse ">
                <div class="relative inline-block">
                    {/* <!-- Glow layer --> */}
                    <div class="absolute inset-0 rounded-full bg-gradient-to-r from-[#FA5F55] to-[#FA5F55] blur-3xl opacity-30"></div>

                    {/* <!-- Profile photo --> */}
                    <img src="https://i.ibb.co.com/1ffrsSWc/profile-photo.png" alt="profile" class="relative max-w-[400px] h-[400px] p-1 border-s-2 border-e-2 border-[#FA5F55] rounded-full" />
                </div>

                <div className="flex flex-col items-center md:items-start lg:w-1/2">
                    <h1 className="text-5xl font-bold">
                        I'm <span className="text-[#FA5F55]">Sajeeb</span> Al Jabed
                    </h1>

                    <p className="my-3 pl-5 border-l-2 text-center md:text-start border-white ">
                        I’m a Frontend Developer with hands-on experience in React.js, Tailwind CSS, Node.js, Express.js, and MongoDB. I focus on building responsive, high-performance web applications while constantly learning and embracing new technologies.
                    </p>
                    <div className="flex items-center gap-5 text-3xl mt-7">
                        <a target="_blank" href="https://www.linkedin.com/in/sajeebaljabed5523/">
                            <FaLinkedin />
                        </a>
                        <a target="_blank" href="https://github.com/sajeeb5523">
                            <FaGithubSquare />
                        </a>
                        <a target="_blank" href="https://www.facebook.com/sajeeb.1711">
                            <FaFacebookSquare />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
