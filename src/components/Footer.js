import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Footer = () => {
    return (
        <footer className="relative bg-black">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                >
                    <source src="/your-video.mp4" type="video/mp4" />
                </video>
                {/* Overlay to make content more readable */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Footer Content */}
            <div className="relative z-10 container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <img
                            src={logo}
                            alt="Teamwork Creative Solution"
                            className="h-12"
                        />
                        <p className="text-sm">
                            Creating innovative solutions through teamwork and creativity.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-orange-500 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="hover:text-orange-500 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.instagram.com/nsalonshyderabad/" className="hover:text-orange-500 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="hover:text-orange-500 transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-orange-500 transition-colors">HOME</a></li>
                            <li><a href="/about" className="hover:text-orange-500 transition-colors">ABOUT US</a></li>
                            <li><a href="/menu" className="hover:text-orange-500 transition-colors">MENU</a></li>
                            <li><a href="/hot" className="hover:text-orange-500 transition-colors">HOT DEALS</a></li>
                            <li><a href="/branches" className="hover:text-orange-500 transition-colors">BRANCHES</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                                <MapPin size={20} className="text-white" />
                                <span className="text-sm">Your Address Here</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={20} className="text-white" />
                                <span className="text-sm">+1 234 567 8900</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={20} className="text-white" />
                                <span className="text-sm">info@teamwork.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-white/20">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
                        <p>© 2024 Teamwork Creative Solution. All rights reserved.</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;