import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BranchesSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const branches = [
        {
            name: "Pragathi Nagar, Hyderabad",
            image: "/path/to/pragathi-nagar.jpg"
        },
        {
            name: "DK Road, Ameerpet",
            image: "/path/to/dk-road.jpg"
        },
        {
            name: "Jubilee Hills",
            image: "/path/to/jubilee-hills.jpg"
        },
        {
            name: "Madhapur",
            image: "/path/to/madhapur.jpg"
        },
        // Add more branches as needed
    ];

    const slidesToShow = 2;
    const totalSlides = Math.ceil(branches.length / slidesToShow);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const visibleBranches = branches.slice(
        currentSlide * slidesToShow,
        (currentSlide * slidesToShow) + slidesToShow
    );

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section - Franchise Info */}
                <div className="bg-black text-white rounded-lg p-8 flex items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="">VISIT</span> ANY STORE
                        </h2>
                        <p className="text-2xl mb-6">
                            Join <span className="">India's</span> and also the
                            <br />
                            <span className=" font-semibold">World's Only</span>
                            <br />
                            <span className=" font-semibold">Digitised</span>
                            <br />
                            <span className=" font-semibold">Experiential</span>
                            <br />
                            <span className=" font-semibold">Salon Brand</span>
                        </p>
                    </div>
                </div>

                {/* Right Section - Branches Showcase */}
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-4xl font-bold text-blue-600">BRANCHES</h2>
                            <p className="text-gray-600">35 already & growing</p>
                        </div>
                        <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                            VIEW ALL
                            <ChevronRight size={20} />
                        </a>
                    </div>

                    <div className="relative">
                        <div className="flex gap-4 overflow-hidden">
                            {visibleBranches.map((branch, index) => (
                                <div
                                    key={index}
                                    className="w-full relative group transition-transform duration-300"
                                >
                                    <img
                                        src={branch.image}
                                        alt={branch.name}
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg" />
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="text-xl font-semibold mb-2">{branch.name}</h3>
                                        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                                            Know More
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                            disabled={currentSlide === 0}
                        >
                            <ChevronLeft size={24} className="text-gray-600" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                            disabled={currentSlide === totalSlides - 1}
                        >
                            <ChevronRight size={24} className="text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BranchesSection;