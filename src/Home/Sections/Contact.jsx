import React from 'react';
import { FaEnvelope, FaGithubSquare, FaLinkedin, FaPhone, FaWhatsapp, FaFacebookSquare } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="w-10/12 mx-auto py-10 md:py-16">
            <h2 className="text-xl md:text-4xl font-bold text-center text-[#FA5F55] mb-12">Contact Me</h2>

            <div className="bg-gray-600 shadow-lg rounded-xl p-6 md:p-10 mx-auto">
                <p className="text-center text-lg mb-6">
                    I’m always happy to connect and explore new opportunities. Drop me a message and let’s talk!
                </p>

                <div className='flex flex-col md:flex-row justify-between gap-6 md:gap-10'>
                    <div className="space-y-6">
                        <h2 className='text-2xl font-semibold'>Direct Contact</h2>
                        {/* Email */}
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-[#FA5F55] text-2xl" />
                            <a href="mailto:sajeebaljabed1@gmail.com" className="text-lg hover:underline">
                                sajeebaljabed1@gmail.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center space-x-4">
                            <FaPhone className="text-[#FA5F55] text-2xl" />
                            <a href="tel:+8801571595523" className="text-lg hover:underline">
                                +880 1571-595523
                            </a>
                        </div>

                        {/* WhatsApp */}
                        <div className="flex items-center space-x-4">
                            <FaWhatsapp className="text-[#FA5F55] text-2xl" />
                            <a href="https://wa.me/8801329099893" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">
                                +880 1329-099893
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className='text-2xl font-semibold'>Professional Profiles</h2>
                        {/* github */}
                        <div className="flex items-center space-x-4">
                            <FaGithubSquare className="text-[#FA5F55] text-2xl" />
                            <a target='_blank' href="https://github.com/sajeeb5523" className="text-lg hover:underline">
                                GitHub
                            </a>
                        </div>

                        {/* linkdin */}
                        <div className="flex items-center space-x-4">
                            <FaLinkedin className="text-[#FA5F55] text-2xl" />
                            <a target='_blank' href="https://www.linkedin.com/in/sajeebaljabed5523/" className="text-lg hover:underline">
                                LinkedIn
                            </a>
                        </div>

                        {/* facebook */}
                        <div className="flex items-center space-x-4">
                            <FaFacebookSquare className="text-[#FA5F55] text-2xl" />
                            <a target='_blank' href="https://www.facebook.com/sajeeb.1711" className="text-lg hover:underline">
                                Facebook
                            </a>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
