import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer justify-between w-10/12 px-0 mx-auto sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <aside>
                <img src="" className='w-16 ' alt="" />
                <p>
                    <span className='text-xl'>Md. <span className='text-[#FA5F55] font-medium'>Sajeeb Al</span> Jabed</span>
                    <br />
                    Frontend Developer | React, MongoDB, Express | Crafting Engaging User Interfaces
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a href='#about' className="link link-hover">About us</a>
                <a href='#' className="link link-hover">Contact</a>
                <a href='#skills' className="link link-hover">Skills</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <div className="flex items-center gap-5 text-3xl">
                        <a target="_blank" href="https://github.com/sajeeb5523">
                            <FaGithubSquare />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/sajeebaljabed5523/">
                            <FaLinkedin />
                        </a>
                        <a target="_blank" href="https://www.facebook.com/sajeeb.1711">
                            <FaFacebookSquare />
                        </a>
                    </div>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
