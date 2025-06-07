import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import mobileSlide1 from '../assets/nsalonmob1.jpg';
import mobileSlide2 from '../assets/nsalonmob2.jpg';
import mobileSlide3 from '../assets/nsalonmob3.jpg';
import mobileSlide4 from '../assets/nsalonmob3.jpg';

const MultiBannerCarousel = () => {
    const [currentBanner, setCurrentBanner] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    
    // Check for mobile viewport on resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    // Array of banners with different content
    const banners = [
        {
            title: "MAKEUP PERFECTION",
            description: "Enhance your beauty with our expert touch, from flawless everyday looks to glamorous transformations.",
            bgImage: slide3,
            mobileImage: mobileSlide3,
            position: "items-center justify-end text-center sm:pb-8 md:pb-12 lg:pb-16" // Responsive bottom centered
        },
        {
            title: "WELCOME TO N SALONS",
            description: "Experience premium hair care services tailored to your unique style and preferences. Our expert stylists are ready to transform your look.",
            bgImage: slide1,
            mobileImage: mobileSlide1,
            position: "items-start justify-center text-center sm:pl-16 md:pl-36 lg:pl-72", // Responsive left alignment
            left: true
        },
        {
            title: "SPECIAL OFFERS",
            description: "Enjoy exclusive discounts and packages on our premium salon services. Limited time offers available now!",
            bgImage: slide4,
            mobileImage: mobileSlide4,
            position: "items-center justify-start text-center pt-4 sm:pt-6 md:pt-8" // Responsive top centered
        },
        {
            title: "RADIANT REVIVAL",
            description: "Refresh and restore your skin with our specialized care, designed to bring out your natural glow.",
            bgImage: slide2,
            mobileImage: mobileSlide2,
            position: "items-end justify-center text-right pr-[51rem]" // Right aligned
        }
    ];

    // Filter banners for mobile - show only first banner on mobile
    const displayBanners = isMobile ? [banners[0]] : banners;

    const nextBanner = () => {
        setCurrentBanner((prev) => (prev + 1) % displayBanners.length);
    };

    const prevBanner = () => {
        setCurrentBanner((prev) => (prev - 1 + displayBanners.length) % displayBanners.length);
    };
    
    // Auto-rotate banners - only if more than one banner
    useEffect(() => {
        if (displayBanners.length > 1) {
            const interval = setInterval(() => {
                nextBanner();
            }, 5000);
            
            return () => clearInterval(interval);
        }
    }, [displayBanners.length]);

    return (
        <div className="bg-black py-4 sm:py-10">
            <div className="w-full]">
                <div className="relative h-[90vh]">
                    {displayBanners.map((banner, index) => (
                        <div
                            key={index}
                            className={`w-full h-full rounded-2xl overflow-hidden absolute transition-opacity duration-500 ${
                                index === currentBanner ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                        >
                            {/* Background image with proper responsive handling */}
                            <div 
                                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${isMobile ? banner.mobileImage : banner.bgImage})`,
                                }}
                            ></div>
                            
                            {/* Overlay for better text readability */}
                            <div className="absolute inset-0 bg-black opacity-30"></div>
                            
                            {/* Content overlay with responsive dynamic positioning */}
                            <div className={`absolute inset-0 flex flex-col p-4 ${banner.position}`}>
                                {banner.title && (!isMobile || index !== 0) && (
                                    <h2 className="text-lg sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-4 md:mb-6 px-2">{banner.title}</h2>
                                )}
                                {banner.description && (!isMobile || index !== 0) && (
                                    <p className={`text-white text-xs sm:text-base md:text-xl max-w-[250px] sm:max-w-[350px] md:max-w-md leading-relaxed px-4 ${banner.left ? 'sm:ml-8 md:ml-16' : ''}`}>
                                        {banner.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                    
                    {/* Navigation arrows - only show if more than one banner */}
                    {displayBanners.length > 1 && (
                        <>
                            <button 
                                onClick={prevBanner} 
                                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-1 sm:p-2 transition-colors"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                            </button>
                            
                            <button 
                                onClick={nextBanner} 
                                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-1 sm:p-2 transition-colors"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                            </button>
                        </>
                    )}
                    
                    {/* Slide indicators - only show if more than one banner */}
                    {displayBanners.length > 1 && (
                        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                            {displayBanners.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentBanner(index)}
                                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                                        index === currentBanner ? 'bg-white' : 'bg-white/50'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="pt-16">
                <MultiBannerCarousel />
            </div>
        </div>
    );
};

export default Header;

