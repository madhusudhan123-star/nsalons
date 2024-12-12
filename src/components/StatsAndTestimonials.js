import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ThumbsUp, Store, Users, UserCircle, Star } from 'lucide-react';
import video5 from '../assets/video5.mp4';
import video6 from '../assets/video6.mp4';
import video7 from '../assets/video7.mp4';
import video8 from '../assets/video8.mp4';
import video9 from '../assets/video9.mp4';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [end, duration, isVisible]);

    return (
        <div ref={counterRef} className="text-4xl font-bold text-blue-600">
            {count}
            {suffix}
        </div>
    );
};

const StatCard = ({ icon: Icon, value, suffix, label }) => (
    <div className="flex flex-col items-center text-center p-4">
        <Icon className="w-12 h-12 text-orange-500 mb-3" />
        <AnimatedCounter end={value} suffix={suffix} />
        <p className="mt-2 text-gray-700">{label}</p>
    </div>
);

const VideoTestimonial = ({ videoSrc, isActive }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (!isActive && videoRef.current) {
            videoRef.current.pause();
        }
    }, [isActive]);

    return (
        <div className={`w-full transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
            <video
                ref={videoRef}
                className=" w-screen rounded-lg h-80"
                controls
                autoPlay
                loop
                muted
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};


const StatsAndTestimonials = () => {
    const [currentVideo, setCurrentVideo] = useState(0);

    const stats = [
        { icon: ThumbsUp, value: 5, suffix: '+', label: 'Year of Operations' },
        { icon: Store, value: 35, suffix: '', label: 'Salons and Growing' },
        { icon: Users, value: 103000, suffix: '+', label: 'Happy Members' },
        { icon: UserCircle, value: 125, suffix: '', label: 'Team Members' },
        { icon: Star, value: 4.9, suffix: '', label: 'Google Rating' },
    ];

    const testimonials = [
        { videoSrc: video5 },
        { videoSrc: video6 },
        { videoSrc: video7 },
        { videoSrc: video8 },
        { videoSrc: video9 },
    ];

    const nextVideo = () => {
        setCurrentVideo((prev) => (prev + 1) % testimonials.length);
    };

    const prevVideo = () => {
        setCurrentVideo((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 pb-72">
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
                {stats.map((stat, index) => (
                    <StatCard
                        key={index}
                        icon={stat.icon}
                        value={stat.value}
                        suffix={stat.suffix}
                        label={stat.label}
                    />
                ))}
            </div>

            {/* Testimonials Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-500 ${index === currentVideo ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                        >
                            <VideoTestimonial
                                videoSrc={testimonial.videoSrc}
                                isActive={index === currentVideo}
                            />
                        </div>
                    ))}

                    {/* Navigation Buttons */}
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex gap-2">
                        <button
                            onClick={prevVideo}
                            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                        >
                            <ChevronLeft size={24} className="text-gray-600" />
                        </button>
                        <button
                            onClick={nextVideo}
                            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                        >
                            <ChevronRight size={24} className="text-gray-600" />
                        </button>
                    </div>
                </div>

                <div className="mt-80 sm:mt-0 sm:mt-0">
                    <h2 className="text-4xl font-bold text-blue-600 mb-6">TESTIMONIALS</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Read through our cherished Customer Testimonials, where our gratitude meets transformation.
                        These stories are a testament to the trust and satisfaction shared between us and our valued
                        N Salons family.
                    </p>
                </div>
            </div>
        </div>
    );
};


export default StatsAndTestimonials;