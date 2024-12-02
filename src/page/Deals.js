import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import deal1 from '../assets/deals.jpeg';

const Deals = () => {
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
            img: deal1,
        },
        {
            img: deal1,
        },
        {
            img: deal1,
        },
        {
            img: deal1,
        },
        {
            img: deal1,
        },
        {
            img: deal1,
        },
        {
            img: deal1,
        },
        {
            img: deal1,
        }
    ];

    return (
        <div className="relative mx-auto px-4 py-8 mt-24">
            <h2 className="text-4xl text-center text-black mb-8">HOT DEALS</h2>
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
                            <div className="h-72 bg-blue-100 flex items-center justify-center">
                                <img src={deal.img} alt={index} />
                            </div>
                            <div className="p-4">
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Deals;