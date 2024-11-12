import React, { useState, useEffect } from 'react';
import one from '../assets/client/1.png';
import two from '../assets/client/2.png';
import three from '../assets/client/3.png';
import four from '../assets/client/4.jpg';
import five from '../assets/client/5.png';
import six from '../assets/client/6.png';
import seven from '../assets/client/8.jpg';
import eight from '../assets/client/9.png';
import nine from '../assets/client/10.png';
import ten from '../assets/client/11.png';
import tenone from '../assets/client/12.png';
import tentwo from '../assets/client/13.png';
import tenthree from '../assets/client/14.png';
import tenfour from '../assets/client/15.png';
import tenfive from '../assets/client/16.png';


const ClientsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const clients = [
        { id: 1, imageUrl: one },
        { id: 2, imageUrl: two },
        { id: 3, imageUrl: three },
        { id: 4, imageUrl: four },
        { id: 5, imageUrl: five },
        { id: 6, imageUrl: six },
        { id: 7, imageUrl: seven },
        { id: 8, imageUrl: eight },
        { id: 9, imageUrl: nine },
        { id: 10, imageUrl: ten },
        { id: 11, imageUrl: tenone },
        { id: 12, imageUrl: tentwo },
        { id: 13, imageUrl: tenthree },
        { id: 14, imageUrl: tenfour },
        { id: 15, imageUrl: tenfive },
    ];

    // Number of items to show at once
    const itemsToShow = 5;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % (clients.length - itemsToShow + 1)
            );
        }, 3000); // Change slides every 3 seconds

        return () => clearInterval(timer);
    }, [clients.length]);

    return (
        <div id="clientele" className="w-full py-16 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    Our Clients
                </h2>

                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                        }}
                    >
                        {clients.map((client) => (
                            <div
                                key={client.id}
                                className="lg:min-w-[20%] min-w-[100%] px-4 flex items-center justify-center"
                            >
                                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <img
                                        src={client.imageUrl}
                                        alt={`Client ${client.id}`}
                                        className="h-32 w-auto object-contain mx-auto "
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-8 gap-2">
                    {[...Array(clients.length - itemsToShow + 1)].map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                                }`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientsSection;