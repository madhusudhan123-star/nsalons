// import React, { useState, useEffect } from 'react';
// import { Menu, Search, X, MessageCircle } from 'lucide-react';
// import logo from '../assets/logo.png';


// const VideoBackground = () => {
//     // Extract video ID from YouTube URL
//     const videoId = 'K6PBFU6TxTM';

//     useEffect(() => {
//         // Load YouTube IFrame API
//         const tag = document.createElement('script');
//         tag.src = 'https://www.youtube.com/iframe_api';
//         const firstScriptTag = document.getElementsByTagName('script')[0];
//         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//         // Initialize YouTube player when API is ready
//         window.onYouTubeIframeAPIReady = () => {
//             new window.YT.Player('youtube-background', {
//                 videoId: videoId,
//                 playerVars: {
//                     autoplay: 1,
//                     controls: 0,
//                     disablekb: 1,
//                     enablejsapi: 1,
//                     loop: 1,
//                     mute: 1,
//                     playlist: videoId, // Required for looping
//                     playsinline: 1,
//                     rel: 0,
//                     showinfo: 0
//                 },
//                 events: {
//                     onReady: (event) => {
//                         event.target.playVideo();
//                     }
//                 }
//             });
//         };
//     }, []);

//     return (
//         <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
//             {/* YouTube player container */}
//             <div className="relative w-full h-full">
//                 <div
//                     id="youtube-background"
//                     className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
//                     style={{
//                         width: '177.77777778vh', // 16:9 aspect ratio
//                         height: '56.25vw',  // 16:9 aspect ratio
//                         minWidth: '100%',
//                         minHeight: '100%'
//                     }}
//                 />
//             </div>
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/50" />
//         </div>
//     );
// };
// const Navbar = () => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     return (
//         <nav className="absolute top-0 w-full p-4 z-10">
//             <div className="container mx-auto flex justify-between items-center">
//                 <div className="text-white text-3xl font-bold">
//                     <img src={logo} className="h-12 flex items-center justify-center" alt="Logo" />
//                 </div>

//                 <div className="hidden md:flex space-x-6 text-white">
//                     <a href="#home" className="py-2">HOME</a>
//                     <a href="#Aboutus" className="py-2">ABOUT US</a>
//                     <a href="#whatwedo" className="py-2">WHAT WE DO</a>
//                     <a href="#" className="py-2">OUR PORTFOLIO</a>
//                     <a href="#clientele" className="py-2">CLIENTELE</a>
//                     <a href="#" className="py-2">WORK WITH US</a>
//                     <button className="bg-red-600 px-6 py-2 rounded"><a href="#contact">Contact Us</a></button>
//                     {/* <button className="p-2">
//                         <Search className="w-5 h-5" />
//                     </button> */}
//                 </div>

//                 <button
//                     className="md:hidden text-white"
//                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 >
//                     <Menu className="w-6 h-6" />
//                 </button>
//             </div>

//             {/* Dropdown Menu for Mobile */}
//             {isDropdownOpen && (
//                 <div className="md:hidden bg-gray-800 text-white text-center space-y-4 py-4">
//                     <a href="#home" className="block py-2">HOME</a>
//                     <a href="#Aboutus" className="block py-2">ABOUT US</a>
//                     <a href="#whatwedo" className="block py-2">WHAT WE DO</a>
//                     <a href="#" className="block py-2">OUR PORTFOLIO</a>
//                     <a href="#clientele" className="block py-2">CLIENTELE</a>
//                     <a href="#" className="block py-2">WORK WITH US</a>
//                     <button className="bg-red-600 px-6 py-2 rounded w-full"><a href="#contact">Contact Us</a></button>
//                     <button className="p-2 w-full flex justify-center">
//                         <Search className="w-5 h-5" />
//                     </button>
//                 </div>
//             )}
//         </nav>
//     );
// };


// const ChatWidget = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleStartChat = () => {
//         window.open('https://wa.me/6309792221', '_blank');
//         setIsOpen(false);
//     };

//     return (
//         <>
//             {/* Chat Button */}
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="fixed bottom-24 right-6 bg-green-500 p-4 rounded-full hover:bg-green-600 transition-colors z-20"
//                 aria-label="Open chat"
//             >
//                 {isOpen ? (
//                     <X className="w-8 h-8 text-white" />
//                 ) : (
//                     <MessageCircle className="w-8 h-8 text-white" />
//                 )}
//             </button>

//             {/* Chat Dialog */}
//             {isOpen && (
//                 <div className="fixed bottom-40 right-6 w-80 bg-white rounded-lg shadow-xl z-20">
//                     <div className="bg-green-500 p-4 rounded-t-lg">
//                         <h3 className="text-white font-semibold text-lg">Chitralekha Studios Chat</h3>
//                     </div>

//                     <div className="p-4 bg-gray-50 min-h-[150px]">
//                         <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
//                             <p className="text-gray-600">Hello 👋</p>
//                             <p className="text-gray-600">How can we help you today?</p>
//                         </div>
//                     </div>

//                     <div className="p-4 border-t">
//                         <button
//                             onClick={handleStartChat}
//                             className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
//                         >
//                             <span>Start Chat</span>
//                             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//                                 <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.419-.101.824z" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// const Header = () => {
//     return (
//         <div id="home" className="relative min-h-screen flex items-center justify-center text-white">
//             <VideoBackground />
//             <Navbar />

//             <div className="text-center px-4">
//                 <h1 className="text-4xl md:text-6xl mb-80 font-bold mb-4">
//                     <a className='text-[#F6CF02]'>Teamwork Creative</a> <a className='text-[#DC2626]'> Solution</a>
//                 </h1>
//             </div>

//             {/* Chat Widget */}

//             {/* Existing WhatsApp Button */}
//             <a

//                 className="fixed bottom-6 right-6 "
//                 aria-label="Contact us on WhatsApp"
//             >
//                 <ChatWidget />
//             </a>
//         </div>
//     );
// };

// export default Header;

import React, { useState } from 'react';
import { Menu, Phone, ChevronLeft, ChevronRight, X } from 'lucide-react';
import logo from '../assets/logo.png';
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slidee2.png';

const SideNav = ({ isOpen, onClose }) => {
    const menuItems = [
        { label: 'Home', href: '#' },
        { label: 'Menu', href: '#' },
        { label: 'Hot Deals', href: '#' },
        { label: 'Branches', href: '#' },
        { label: 'Franchise', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Blogs', href: '#' },
        { label: 'RnR', href: '#' },
        { label: 'CSR', href: '#' },
    ];

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={onClose}
                />
            )}

            {/* Side Navigation */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="p-4 flex justify-between items-center border-b">
                    <h2 className="text-xl font-semibold text-[#3B5998]">Menu</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full"
                    >
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
        <>
            <nav className="bg-white py-4 px-6 shadow-md fixed w-full top-0 z-50">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="w-32">
                        <img src={logo} alt="TRIM X" className="h-8" />
                    </div>


                    {/* Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* Phone Number - Hidden on mobile */}
                        <div className="hidden lg:flex items-center gap-2 text-[#3B5998]">
                            <Phone size={20} />
                            <div>
                                <div className="text-sm">Make a call</div>
                                <div className="font-semibold">+91 709 770 9722</div>
                            </div>
                        </div>
                        <button className="bg-[#3B5998] text-white px-6 py-2 rounded">
                            BOOK AN APPOINTMENT
                        </button>
                        <button
                            onClick={() => setIsSideNavOpen(true)}
                            className="p-2 hover:bg-gray-100 rounded"
                        >
                            <Menu className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden items-center gap-2">
                        <button className="bg-[#3B5998] text-white px-4 py-2 text-sm rounded">
                            BOOK
                        </button>
                        <button
                            onClick={() => setIsSideNavOpen(true)}
                            className="p-2"
                        >
                            <Menu className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
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

            {/* Side Navigation */}
            <SideNav
                isOpen={isSideNavOpen}
                onClose={() => setIsSideNavOpen(false)}
            />
        </>
    );
};

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: slide1,
            title: "Enjoy",
            highlight: "Free Haircut",
            subtitle: "with any service",
            note: "Limited period offer"
        },
        {
            image: slide2,
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
        <div className="relative w-full overflow-hidden">
            {/* Slides */}
            <div className="relative h-[600px]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
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

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-[#3B5998]' : 'bg-white'
                            }`}
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
                <h2 className="text-5xl text-[#3B5998] font-bold">LOOK SHARP FEEL GOOD</h2>
            </div>
        </div>
    );
};

export default Header;