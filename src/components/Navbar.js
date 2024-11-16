// Navbar.js
import React, { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

const SideNav = ({ isOpen, onClose }) => {
    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Menu', href: '/menu' },
        { label: 'Hot Deals', href: '/hot' },
        { label: 'Branches', href: '/branches' },
    ];

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
            )}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4 flex justify-between items-center border-b">
                    <h2 className="text-xl font-semibold">Menu</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                        <X className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
                <nav className="py-4">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#3B5998] border-b border-gray-100"
                            onClick={onClose}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
};

const Navbar = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div>
            <nav className="bg-black text-white py-4 px-16 shadow-md fixed w-full top-0 z-50">
                <div className="container mx-auto flex items-center justify-between">
                    <a href='/'>
                        <div className="w-32">
                            <img src={logo} alt="TRIM X" className="h-8" />
                        </div>
                    </a>
                    <div className="hidden lg:flex items-center gap-4">
                        <div className="hidden lg:flex items-center gap-2 ">
                            <Phone size={20} />
                            <div>
                                <div className="text-sm">Make a call</div>
                                <div className="font-semibold">+91 709 770 9722</div>
                            </div>
                        </div>
                        <button className="bg-[#3B5998] text-white px-6 py-2 rounded">
                            <a href='/appointment'>
                                BOOK AN APPOINTMENT
                            </a>
                        </button>
                        <button
                            onClick={() => setIsSideNavOpen(true)}
                            className="p-2 hover:bg-gray-100 rounded"
                        >
                            <Menu className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                    <div className="flex lg:hidden items-center gap-2">
                        <button className="bg-[#3B5998] text-white px-4 py-2 text-sm rounded">
                            <a href='/appointment'>
                                BOOK

                            </a>
                        </button>
                        <button onClick={() => setIsSideNavOpen(true)} className="p-2">
                            <Menu className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg">
                        <div className="container mx-auto py-4 px-6 space-y-4">
                            <div className="flex items-center gap-2 text-[#3B5998]">
                                <Phone size={20} />
                                <a href="tel:+917097709722">+91 709 770 9722</a>
                            </div>
                            <button className="w-full bg-[#3B5998] text-white py-2 rounded">
                                FRANCHISE OPPORTUNITY
                            </button>
                        </div>
                    </div>
                )}
            </nav>
            <SideNav isOpen={isSideNavOpen} onClose={() => setIsSideNavOpen(false)} />
        </div>
    );
};

export default Navbar;
