import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DealSlider = () => {
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpAndLeave = () => {
        setIsDragging(false);
    };

    const scroll = (direction) => {
        const { current } = sliderRef;
        if (current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const deals = [
        {
            title: "Special Offer",
            price: "Rs. 149",
            buttonText: "Book Now",
        },
        {
            title: "Premium Deal",
            price: "Rs. 9,999",
            buttonText: "Book Now",
        },
        {
            title: "Student Discount",
            price: "Rs. 199",
            buttonText: "Book Now",
        },
        {
            title: "Festival Special",
            price: "Rs. 299",
            buttonText: "Book Now",
        }
    ];

    return (
        <div className="relative mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">HOT DEALS</h2>

            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-10 hover:bg-white"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="overflow-hidden">
                <div
                    ref={sliderRef}
                    className="flex gap-6 overflow-x-scroll scroll-smooth"
                    style={{
                        cursor: isDragging ? 'grabbing' : 'grab',
                        userSelect: 'none',
                        msOverflowStyle: 'none',  /* IE and Edge */
                        scrollbarWidth: 'none',   /* Firefox */
                        WebkitOverflowScrolling: 'touch',
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUpAndLeave}
                    onMouseLeave={handleMouseUpAndLeave}
                >
                    <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

                    {deals.map((deal, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="h-48 bg-blue-100 flex items-center justify-center">
                                <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
                            </div>
                            <div className="p-4">
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-10 hover:bg-white"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    );
};

export default DealSlider;