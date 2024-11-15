// import React, { useState, useEffect } from 'react';
// import { Menu, Phone, ChevronLeft, ChevronRight, X } from 'lucide-react';
// import logo from '../assets/logo.jpg';
// import slide1 from '../assets/banner1.svg';
// import slide2 from '../assets/banner2.png';
// import slide1Small from '../assets/smallbanner1.jpg';
// import slide2Small from '../assets/smallbanner2.jpg';

// const SideNav = ({ isOpen, onClose }) => {
//     const menuItems = [
//         { label: 'Home', href: '#' },
//         { label: 'About Us', href: '#' },
//         { label: 'Menu', href: '#' },
//         { label: 'Hot Deals', href: '#' },
//         { label: 'Branches', href: '#' },
//     ];

//     return (
//         <>
//             {/* Overlay */}
//             {isOpen && (
//                 <div
//                     className="fixed inset-0 bg-black/50 z-40"
//                     onClick={onClose}
//                 />
//             )}

//             {/* Side Navigation */}
//             <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
//                 }`}>
//                 <div className="p-4 flex justify-between items-center border-b">
//                     <h2 className="text-xl font-semibold ">Menu</h2>
//                     <button
//                         onClick={onClose}
//                         className="p-2 hover:bg-gray-100 rounded-full"
//                     >
//                         <X className="w-6 h-6 text-gray-600" />
//                     </button>
//                 </div>

//                 <nav className="py-4">
//                     {menuItems.map((item, index) => (
//                         <a
//                             key={index}
//                             href={item.href}
//                             className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#3B5998] border-b border-gray-100"
//                             onClick={onClose}
//                         >
//                             {item.label}
//                         </a>
//                     ))}
//                 </nav>
//             </div>
//         </>
//     );
// };

// const Navbar = () => {
//     const [isSideNavOpen, setIsSideNavOpen] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     return (
//         <>
//             <nav className="bg-black text-white py-4 px-6 shadow-md fixed w-full top-0 z-50">
//                 <div className="container mx-auto flex items-center justify-between">
//                     {/* Logo */}
//                     <div className="w-32">
//                         <img src={logo} alt="TRIM X" className="h-8" />
//                     </div>


//                     {/* Buttons */}
//                     <div className="hidden lg:flex items-center gap-4">
//                         {/* Phone Number - Hidden on mobile */}
//                         <div className="hidden lg:flex items-center gap-2 ">
//                             <Phone size={20} />
//                             <div>
//                                 <div className="text-sm">Make a call</div>
//                                 <div className="font-semibold">+91 709 770 9722</div>
//                             </div>
//                         </div>
//                         <button className="bg-[#3B5998] text-white px-6 py-2 rounded">
//                             BOOK AN APPOINTMENT
//                         </button>
//                         <button
//                             onClick={() => setIsSideNavOpen(true)}
//                             className="p-2 hover:bg-gray-100 rounded"
//                         >
//                             <Menu className="w-6 h-6 text-gray-600" />
//                         </button>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <div className="flex lg:hidden items-center gap-2">
//                         <button className="bg-[#3B5998] text-white px-4 py-2 text-sm rounded">
//                             BOOK
//                         </button>
//                         <button
//                             onClick={() => setIsSideNavOpen(true)}
//                             className="p-2"
//                         >
//                             <Menu className="w-6 h-6 text-white" />
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 {isMobileMenuOpen && (
//                     <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg">
//                         <div className="container mx-auto py-4 px-6 space-y-4">
//                             <div className="flex items-center gap-2 text-[#3B5998]">
//                                 <Phone size={20} />
//                                 <a href="tel:+917097709722">+91 709 770 9722</a>
//                             </div>
//                             <button className="w-full bg-[#3B5998] text-white py-2 rounded">
//                                 FRANCHISE OPPORTUNITY
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </nav>

//             {/* Side Navigation */}
//             <SideNav
//                 isOpen={isSideNavOpen}
//                 onClose={() => setIsSideNavOpen(false)}
//             />
//         </>
//     );
// };

// const ImageSlider = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

//     useEffect(() => {
//         const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     const slides = [
//         {
//             imageLarge: slide1, // Image for larger screens
//             imageSmall: slide1Small, // Image for smaller screens
//             title: "Enjoy",
//             highlight: "Free Haircut",
//             subtitle: "with any service",
//             note: "Limited period offer"
//         },
//         {
//             imageLarge: slide2,
//             imageSmall: slide2Small,
//             title: "Exclusive",
//             highlight: "Member Benefit",
//             subtitle: "special offers",
//             note: "*conditions apply"
//         }
//     ];


//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     };

//     return (
//         <div className="relative w-full overflow-hidden h-[65vh]">
//             <div className="relative h-[600px]">
//                 {slides.map((slide, index) => (
//                     <div
//                         key={index}
//                         className={`absolute w-full h-full flex justify-center bg-[#0D130F] transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
//                     >
//                         <img
//                             src={isSmallScreen ? slide.imageSmall : slide.imageLarge}
//                             alt={`Slide ${index + 1}`}
//                             className="sm:w-[65%] sm:h-[70%] object-cover"
//                         />
//                         <div className="absolute inset-0 bg-black/10" />
//                     </div>
//                 ))}
//             </div>

//             {/* Navigation Arrows */}
//             <button
//                 onClick={prevSlide}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
//             >
//                 <ChevronLeft className="w-6 h-6 text-[#3B5998]" />
//             </button>
//             <button
//                 onClick={nextSlide}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
//             >
//                 <ChevronRight className="w-6 h-6 text-[#3B5998]" />
//             </button>

//             {/* Slide Indicators */}
//             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentSlide(index)}
//                         className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-[#3B5998]' : 'bg-white'
//                             }`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// const Header = () => {
//     return (
//         <div className="min-h-screen">
//             <Navbar />
//             <div className="pt-16">
//                 <ImageSlider />
//             </div>
//             <div className="text-center py-12">
//                 <h2 className="text-5xl text-black font-bold">LOOK SHARP FEEL GOOD</h2>
//             </div>
//         </div>
//     );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import slide1 from '../assets/banner1.svg';
import slide2 from '../assets/banner2.png';
import slide1Small from '../assets/smallbanner1.jpg';
import slide2Small from '../assets/smallbanner2.jpg';

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const slides = [
        {
            imageLarge: slide1,
            imageSmall: slide1Small,
            title: "Enjoy",
            highlight: "Free Haircut",
            subtitle: "with any service",
            note: "Limited period offer"
        },
        {
            imageLarge: slide2,
            imageSmall: slide2Small,
            title: "Exclusive",
            highlight: "Member Benefit",
            subtitle: "special offers",
            note: "*conditions apply"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full overflow-hidden h-[65vh]">
            <div className="relative h-[600px]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full flex justify-center bg-[#0D130F] transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={isSmallScreen ? slide.imageSmall : slide.imageLarge}
                            alt={`Slide ${index + 1}`}
                            className="sm:w-[65%] sm:h-[70%] object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
            >
                <ChevronLeft className="w-6 h-6 text-[#3B5998]" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
            >
                <ChevronRight className="w-6 h-6 text-[#3B5998]" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-[#3B5998]' : 'bg-white'}`}
                    />
                ))}
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="pt-16">
                <ImageSlider />
            </div>
            <div className="text-center py-12">
                <h2 className="text-5xl text-black font-bold">LOOK SHARP FEEL GOOD</h2>
            </div>
        </div>
    );
};

export default Header;
