import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import about from '../assets/about.jpeg'

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
        <div className="p-8 bg-black pt-20 text-white">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
                {/* Left Section */}
                <div className="lg:w-3/5 mb-8 lg:mb-0 lg:p-10">
                    <h1 className="text-3xl font-bold  text-orange-500 mb-4">N Salons - Your Destination for Style & Elegance</h1>
                    <p className=" leading-relaxed text-xl">
                        For over a decade, N Salons has been at the forefront of style, beauty, and personal care, dedicated to delivering exceptional salon experiences. Our highly skilled team specializes in personalized services that enhance natural beauty, using the latest trends and techniques. At N Salons, we believe in quality, consistency, and a unique approach to every client, ensuring you leave with a refreshed, confident look every time.
                        {/* <br /><br /> */}
                        {/* We offer an extensive range of services, including haircuts, styling, coloring, skin treatments, manicures, pedicures, and more. Our expertise extends to specialized treatments such as hair spa, anti-dandruff care, skin brightening facials, and customized grooming packages. At N Salons, we prioritize using premium products that promote healthy hair and skin while achieving the results you desire. */}
                        {/* <br /><br /> */}
                        {/* Experience the art of relaxation and transformation at N Salons. Our commitment to exceptional service, ambiance, and client satisfaction sets us apart as your trusted salon partner. Discover elegance and style at N Salons—where beauty meets sophistication. */}
                    </p>
                </div>

                {/* Right Section (Contact Form) */}
                <div className="lg:w-2/5 flex flex-col items-center p-6  ">
                    <img className='rounded' src={about} />
                </div>
            </div>
        </div>
    );
}

export default Second;