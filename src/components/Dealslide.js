import React, { useRef, useEffect } from 'react';
import one from '../assets/deals/one.png';
import two from '../assets/deals/two.png';

const DealSlider = () => {
    const sliderRef = useRef(null);
    const autoPlayRef = useRef(null);

    const deals = [
        { img: one },
        { img: two },
        { img: one },
        { img: two },
        { img: one },
        { img: two },
        { img: one },
        { img: two }
    ];

    useEffect(() => {
        const slider = sliderRef.current;
        let position = 0;

        const autoPlay = () => {
            if (slider) {
                // Calculate the maximum scroll position
                const maxScroll = slider.scrollWidth - slider.clientWidth;

                // If we're at the end, smoothly return to start
                if (position >= maxScroll) {
                    position = 0;
                    slider.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    // Increment position by a smaller amount for smoother motion
                    position += 1;
                    slider.scrollLeft = position;
                }
            }
        };

        // Use a shorter interval for smoother animation
        autoPlayRef.current = setInterval(autoPlay, 16); // Approximately 60fps

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, []);

    return (
        <div className="relative mx-auto px-4 py-8">
            <h2 className="text-4xl text-center text-black mb-8">HOT DEALS</h2>
            <div className="overflow-hidden">
                <div
                    ref={sliderRef}
                    className="flex gap-6 overflow-x-scroll transition-all duration-500 ease-linear pointer-events-none"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch',
                    }}
                >
                    <style jsx>{`
                        div::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>

                    {deals.map((deal, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-72 overflow-hidden"
                        >
                            <div className="h-[100%] flex items-center justify-center">
                                <img
                                    className='h-full w-full object-cover'
                                    src={deal.img}
                                    alt={`Deal ${index + 1}`}
                                    draggable="false"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DealSlider;