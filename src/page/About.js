import React from 'react';
import { useForm } from '@formspree/react';

const Second = () => {
    const [state, handleSubmit] = useForm("manyjjpb");

    if (state.succeeded) {
        return (
            <div className="p-8 bg-gray-50">
                <div className="flex justify-center items-center min-h-[400px]">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-green-600 mb-4">Thanks for reaching out!</h2>
                        <p className="text-gray-600">We'll get back to you as soon as possible.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-8 bg-gray-50 mt-20">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
                {/* Left Section */}
                <div className="lg:w-3/5 mb-8 lg:mb-0 lg:p-10">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">N Salons - Your Destination for Style & Elegance</h1>
                    <p className="text-gray-600 leading-relaxed text-xl">
                        For over a decade, N Salons has been at the forefront of style, beauty, and personal care, dedicated to delivering exceptional salon experiences. Our highly skilled team specializes in personalized services that enhance natural beauty, using the latest trends and techniques. At N Salons, we believe in quality, consistency, and a unique approach to every client, ensuring you leave with a refreshed, confident look every time.
                        <br /><br />
                        We offer an extensive range of services, including haircuts, styling, coloring, skin treatments, manicures, pedicures, and more. Our expertise extends to specialized treatments such as hair spa, anti-dandruff care, skin brightening facials, and customized grooming packages. At N Salons, we prioritize using premium products that promote healthy hair and skin while achieving the results you desire.
                        <br /><br />
                        Experience the art of relaxation and transformation at N Salons. Our commitment to exceptional service, ambiance, and client satisfaction sets us apart as your trusted salon partner. Discover elegance and style at N Salons—where beauty meets sophistication.
                    </p>
                </div>

                {/* Right Section with Floating Image */}
                <div className="lg:w-2/5 flex flex-col items-center p-6">
                    <div className="relative">
                        {/* Background decorative elements for floating effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-40 rounded-full animate-pulse" />

                        {/* Image container with floating animation */}
                        <div className="relative animate-floating">
                            <img
                                src="https://trimx.in/wp-content/uploads/2024/03/gayathri-about.jpg"
                                alt="Salon Services"
                                className="rounded-lg shadow-xl"
                            />

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-100 rounded-full animate-bubble opacity-50" />
                            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-100 rounded-full animate-bubble opacity-50" />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes floating {
                    0% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                    100% {
                        transform: translateY(0px);
                    }
                }

                @keyframes bubble {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.2);
                    }
                    100% {
                        transform: scale(1);
                    }
                }

                .animate-floating {
                    animation: floating 6s ease-in-out infinite;
                }

                .animate-bubble {
                    animation: bubble 4s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}

export default Second;