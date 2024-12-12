import React, { useState } from 'react';
import { X } from 'lucide-react';
import hair from '../assets/haircut.jpg';
import style from '../assets/style_service.jpg';
import color from '../assets/color.jpg';
import care from '../assets/hair_care.jpg';
import detan from '../assets/detan.jpg';
import insurance from '../assets/insurance.jpeg';
import dtan from '../assets/d-tan.jpg';
import cleanup from '../assets/cleanup.jpg';
import facial from '../assets/facial.jpg';
import texture from '../assets/texture.jpg'
import body from '../assets/body.jpg';
import manicure from '../assets/manicure.jpg';
import wax from '../assets/wax.jpg';
import threading from '../assets/threading.jpg';

const ServiceCard = ({ title, image, onClick }) => (
    <div
        className="relative group cursor-pointer transform transition-transform duration-300 hover:scale-105"
        onClick={onClick}
    >
        <div className="relative overflow-hidden aspect-square">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
                    BOOK NOW
                </button>
            </div>
        </div>
    </div>
);

const ServiceModal = ({ isOpen, onClose, serviceData }) => {
    if (!isOpen || !serviceData) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-blue-700">{serviceData.title}</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <X size={24} />
                        </button>
                    </div>

                    <p className="text-gray-600 mb-6">{serviceData.description}</p>

                    {serviceData.treatments.map((treatment, index) => (
                        <div
                            key={index}
                            className="border-b last:border-b-0 py-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-center"
                        >
                            <div className="md:col-span-2 flex items-center gap-4">
                                <div>
                                    <h3 className="font-bold text-lg">{treatment.name}</h3>
                                    <p className="text-sm text-gray-600">{treatment.description}</p>
                                </div>
                            </div>

                            <div className="space-y-1 text-right">
                                <div>
                                    <span className="text-gray-600">Regular:</span>
                                    <span className="font-bold ml-2">₹{treatment.nonMemberPrice}</span>
                                </div>
                                <div>
                                    {treatment.memberPrice > 0 && (
                                        <div>
                                            <span className="text-gray-600">Premium:</span>
                                            <span className="font-bold ml-2">₹{treatment.memberPrice}</span>
                                        </div>
                                    )}
                                </div>

                            </div>

                            <div className="flex justify-end">
                                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                                    <a href='/appointment'>
                                        BOOK NOW
                                    </a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Menu = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const servicesData = {
        "Hair Cut": {
            title: "Hair Cut Services",
            description: "Transform your look with our expert hair cutting services tailored to your style and preference.",
            treatments: [
                {
                    name: "Hair Cut-Kids",
                    description: "For Men Professional haircut",
                    nonMemberPrice: 120,
                },
                {
                    name: "Hair Cut",
                    description: "For Men Advanced cutting techniques",
                    nonMemberPrice: 200,
                },
                {
                    name: "Threading",
                    description: "For Men Advanced cutting techniques",
                    nonMemberPrice: 69,
                },
                {
                    name: "Shampoo & conditioner",
                    description: "For Men",
                    nonMemberPrice: 100,
                },
                {
                    name: "Baby cut",
                    description: "For Women (upto 5years)",
                    nonMemberPrice: 300,
                },
                {
                    name: "Hair trim",
                    description: "For Women (without wash)",
                    nonMemberPrice: 400,
                },
                {
                    name: "Advance Hair cut",
                    description: "For Women (with shampoo & blowdry)",
                    nonMemberPrice: 700,
                },
                {
                    name: "Shampoo & conditioner",
                    description: "For Women",
                    nonMemberPrice: 250,
                }
            ]
        },
        "Styling Service": {
            title: "Styling Services",
            description: "Expert styling services for both men and women.",
            treatments: [
                {
                    name: "Shave",
                    description: "For Men Full shave",
                    nonMemberPrice: 99,
                },
                {
                    name: "Beard Trim",
                    description: "For Men",
                    nonMemberPrice: 99,
                },
                {
                    name: "Beard Styling",
                    description: "For Men",
                    nonMemberPrice: 120,
                },
                {
                    name: "Head Shave",
                    description: "For Men",
                    nonMemberPrice: 250,
                },
                {
                    name: "Stright blow dry",
                    description: "For Women",
                    nonMemberPrice: 300,
                },
                {
                    name: "Out curls",
                    description: "For Women",
                    nonMemberPrice: 400,
                },
                {
                    name: "Ironing",
                    description: "For Women",
                    nonMemberPrice: 500,
                }
            ]
        },
        "Color": {
            title: "Hair Color Services",
            description: "Express yourself with our premium hair coloring services using top-quality products.",
            treatments: [
                {
                    name: "Moustache",
                    description: "For Men",
                    nonMemberPrice: 99,
                },
                {
                    name: "Fashion Streak",
                    description: "For Men (per Streak)",
                    nonMemberPrice: 250,
                },
                {
                    name: "Beard Colour",
                    description: "For Men ",
                    nonMemberPrice: 250,
                },
                {
                    name: "Highlights",
                    description: "For Men",
                    nonMemberPrice: 800,
                },
                {
                    name: "INOA - Ammonia Free",
                    description: "For Men",
                    nonMemberPrice: 700,
                },
                {
                    name: "Majirel",
                    description: "For Men",
                    nonMemberPrice: 500,
                },
                {
                    name: "Root Touch",
                    description: "For Women (up -majirel)",
                    nonMemberPrice: 800,
                },
                {
                    name: "Root Touch",
                    description: "For Women (up -inoa)",
                    nonMemberPrice: 1000,
                },
                {
                    name: "Prelight",
                    description: "For Women ",
                    nonMemberPrice: 1000,
                },
                {
                    name: "Highlight",
                    description: "For Women (crown)",
                    nonMemberPrice: 2000,
                },
                {
                    name: "Highlight 20 fall",
                    description: "For Women ",
                    nonMemberPrice: 3500,
                },
                {
                    name: "Highlight 30 fall",
                    description: "For Women",
                    nonMemberPrice: 4500,
                },
                {
                    name: "Highlight 40 fall",
                    description: "For Women ",
                    nonMemberPrice: 5500,
                },
                {
                    name: "Global Colour",
                    description: "For Women ( S(3000) M(4000) L(5000) ",
                    nonMemberPrice: 3000,
                },
                {
                    name: "Highlight",
                    description: "For Women (per streak)",
                    nonMemberPrice: 400,
                },
                {
                    name: "Funkey colour",
                    description: "For Women (per streak)",
                    nonMemberPrice: 1000,
                }

            ]
        },
        "Hair Care": {
            title: "Hair Care Treatments",
            description: "Revitalize your hair with our specialized care treatments.",
            treatments: [
                {
                    name: "Head Massage",
                    description: "For Men ",
                    nonMemberPrice: 150,
                    memberPrice: 250
                },
                {
                    name: "Hair Spa",
                    description: "For Men",
                    nonMemberPrice: 700,
                    memberPrice: 1000
                },
                {
                    name: "Anti",
                    description: "For Men Dandruff/Hair Fall / Dry hair",
                    nonMemberPrice: 1000,
                },
                {
                    name: "Hair Spa",
                    description: "For Women",
                    nonMemberPrice: 1200,
                    memberPrice: 1500
                },
                {
                    name: "Head Massage",
                    description: "For Women",
                    nonMemberPrice: 400,
                    memberPrice: 600
                },
                {
                    name: "Head Massage",
                    description: "For Women ( olive /almond )",
                    nonMemberPrice: 500,
                    memberPrice: 700
                }
            ]
        },
        "Detan": {
            title: "Men's Hair and Skin Treatments",
            description: "Revitalize your look with our premium grooming treatments for men.",
            treatments: [
                {
                    name: "Face Treatment",
                    description: "For Men Face rejuvenation for a refreshed appearance.",
                    nonMemberPrice: 400,
                },
                {
                    name: "Face and Neck Treatment",
                    description: "For Men Revitalizing face and neck care.",
                    nonMemberPrice: 500,
                },
                {
                    name: "O3 Face Treatment",
                    description: "For Men O3 therapy for radiant skin.",
                    nonMemberPrice: 500,

                },
                {
                    name: "O3 Face and Neck Treatment",
                    description: "For Men O3 therapy for face and neck.",
                    nonMemberPrice: 600,
                },
                {
                    name: "Arms Treatment",
                    description: "For Men Revitalizing treatment for arms.",
                    nonMemberPrice: 400
                }
            ]
        },
        "Hair Insurance": {
            title: "Hair Insurance",
            description: "Ensuring the You Hair Will be safe",
            treatments: [
                {
                    name: "Hair care",
                    description: "For Women ( anti dandruff/hairfall/power mix )",
                    nonMemberPrice: 1200,
                },
                {
                    name: "Hair Strengthening",
                    description: "For Women",
                    nonMemberPrice: 1750,
                }
            ]
        },
        "Bleach & D-TAN": {
            title: "Bleach & D-TAN",
            description: "Brighten and rejuvenate your skin with our specialized Bleach and D-TAN treatments designed to remove tan, even out skin tone, and restore a natural glow.",
            treatments: [
                {
                    name: "Face",
                    description: "For  Women",
                    nonMemberPrice: 500,
                },
                {
                    name: "Arms",
                    description: "For Women",
                    nonMemberPrice: 600,
                },
                {
                    name: "Legs",
                    description: "For Women",
                    nonMemberPrice: 700,
                },
                {
                    name: "Front",
                    description: "For Women",
                    nonMemberPrice: 700,
                },
                {
                    name: "Back",
                    description: "For Women",
                    nonMemberPrice: 700,
                },
                {
                    name: "Full Body",
                    description: "For Women",
                    nonMemberPrice: 2200,
                }
            ]
        },
        "Cleanup": {
            title: "Cleanup",
            description: "Refresh and purify your skin with our Cleanup treatments, designed to deeply cleanse, exfoliate, and revitalize for a healthier, glowing complexion.",
            treatments: [
                {
                    name: "Clean Up - Normal",
                    description: "For Men",
                    nonMemberPrice: 600,
                },
                {
                    name: "Clean Up - O3",
                    description: "For Men",
                    nonMemberPrice: 1000,
                },
                {
                    name: "signature express cleanup",
                    description: "For Women",
                    nonMemberPrice: 800,
                },
                {
                    name: "O3+ cleanup",
                    description: "For Women",
                    nonMemberPrice: 1500,
                }
            ]
        },
        "Signature Facial": {
            title: "Signature Facial Services",
            description: "Luxurious facial treatments for radiant and healthy skin.",
            treatments: [
                {
                    name: "Detan - Repairs Damaged",
                    description: "Caused by Sun",
                    nonMemberPrice: 1400,
                },
                {
                    name: "Whitening Brightening",
                    description: "Removes Tan & Deep Cleansing For A Vibrant Look",
                    nonMemberPrice: 2200,
                },
                {
                    name: "O3 Signature",
                    description: "Boosts Radiance For Multiple Skin Concern",
                    nonMemberPrice: 2500,
                },
                {
                    name: "Anti Ageing",
                    description: "Moisturizes Dehydrated Skin And Tightens Skin",
                    nonMemberPrice: 1600,
                },
                {
                    name: "Gold Moroccan",
                    description: "Increases skin Elasticity & Rejuvenates Skin",
                    nonMemberPrice: 2500,
                },
                {
                    name: "Signature Classic Facial",
                    description: "For Women",
                    nonMemberPrice: 1000,
                },
                {
                    name: "Signature Facial Insta",
                    description: "Aloe vera/charcoal",
                    nonMemberPrice: 1500,
                },
                {
                    name: "Signature Facial White",
                    description: "Brightening/insta fair",
                    nonMemberPrice: 2500,
                },
                {
                    name: "Signature Facial Anti Aging",
                    description: "For Women",
                    nonMemberPrice: 2500,
                },
                {
                    name: "Signature Facial Gold",
                    description: "For Women",
                    nonMemberPrice: 3000,
                },
                {
                    name: "O3+ Facial",
                    description: "For Women",
                    nonMemberPrice: 3500,
                }
            ]
        },
        "Texture Services": {
            title: "Texture Services",
            description: "Advanced hair texturing and treatment services.",
            treatments: [
                {
                    name: "LOREAL Smoothining",
                    description: "Professional smoothing treatment",
                    nonMemberPrice: 4500,
                },
                {
                    name: "LOREAL Straightining",
                    description: "Professional straightening service",
                    nonMemberPrice: 3000,
                },
                {
                    name: "ProteinTherapy",
                    description: "Keratin Treatment",
                    nonMemberPrice: 3500,
                },
                {
                    name: "Botox",
                    description: "Hair Botox Treatment",
                    nonMemberPrice: 5000,
                },
                {
                    name: "Protein Treatment",
                    description: "For Women",
                    nonMemberPrice: 2200,
                },
                {
                    name: "Loreal Straightening",
                    description: "For Women",
                    nonMemberPrice: 2200,
                }
            ]
        },
        "Body Rituals": {
            title: "Body Rituals",
            description: "Relaxing and rejuvenating body treatments.",
            treatments: [
                {
                    name: "Body Massage",
                    description: "Regular massage therapy",
                    nonMemberPrice: 1500,
                },
                {
                    name: "Body Massage (olive)",
                    description: "Olive oil massage therapy",
                    nonMemberPrice: 2000,
                },
                {
                    name: "Body Polish",
                    description: "Full Body Polish Treatment",
                    nonMemberPrice: 3000,
                }
            ]
        },
        "Manicure & Pedicure": {
            title: "Manicure & Pedicure",
            description: "Professional nail care services.",
            treatments: [
                {
                    name: "Classic",
                    description: "30MIN",
                    nonMemberPrice: 400,
                    womenPrice: 550,
                },
                {
                    name: "Citrus/Lemongrass",
                    description: "30MIN",
                    nonMemberPrice: 600,
                    womenPrice: 700,
                },
                {
                    name: "Sugar & Salt/Coffee",
                    description: "45MIN",
                    nonMemberPrice: 700,
                    womenPrice: 800,
                },
                {
                    name: "Crystal",
                    description: "Premium treatment",
                    nonMemberPrice: 800,
                    womenPrice: 900,
                },
                {
                    name: "Sugar candy",
                    description: "60MIN",
                    nonMemberPrice: 1000,
                    womenPrice: 1200,
                },
                {
                    name: "Foot Massage",
                    description: "30MIN",
                    nonMemberPrice: 300,
                },
                {
                    name: "Nail Cut & File",
                    description: "Basic nail care",
                    nonMemberPrice: 250,
                    womenPrice: 250,
                },
                {
                    name: "Change of polish",
                    description: "Polish change service",
                    nonMemberPrice: 150,
                    womenPrice: 150,
                }
            ]
        },
        "Wax": {
            title: "Waxing Services",
            description: "Professional waxing services for all needs.",
            treatments: [
                {
                    name: "Under Arms",
                    description: "Underarm waxing",
                    nonMemberPrice: 80,
                    womenPrice: 110,
                },
                {
                    name: "Arms",
                    description: "Full arms waxing",
                    nonMemberPrice: 300,
                    womenPrice: 450,
                },
                {
                    name: "Legs",
                    description: "Full legs waxing",
                    nonMemberPrice: 400,
                    womenPrice: 550,
                },
                {
                    name: "Front",
                    description: "Front body waxing",
                    nonMemberPrice: 500,
                    womenPrice: 1000,
                },
                {
                    name: "Back",
                    description: "Back body waxing",
                    nonMemberPrice: 500,
                    womenPrice: 1000,
                },
                {
                    name: "Extra wax",
                    description: "Additional waxing service",
                    nonMemberPrice: 1000,
                    womenPrice: 1500,
                },
                {
                    name: "Full Body wax",
                    description: "Complete body waxing",
                    nonMemberPrice: 1800,
                    womenPrice: 3000,
                }
            ]
        },
        "Threading": {
            title: "Threading Services",
            description: "Precise threading services for facial hair removal.",
            treatments: [
                {
                    name: "Upper lip",
                    description: "Basic threading service",
                    nonMemberPrice: 50,
                    womenPrice: 80,
                },
                {
                    name: "Eyebrows",
                    description: "Basic threading service",
                    nonMemberPrice: 50,
                    womenPrice: 80,
                },
                {
                    name: "CHIN",
                    description: "Facial threading",
                    nonMemberPrice: 80,
                    womenPrice: 80,
                },
                {
                    name: "Forhead",
                    description: "Facial threading",
                    nonMemberPrice: 50,
                    womenPrice: 80,
                },
                {
                    name: "Side locks",
                    description: "Sideburns threading",
                    nonMemberPrice: 100,
                    womenPrice: 150,
                },
                {
                    name: "Full face",
                    description: "Complete facial threading",
                    nonMemberPrice: 200,
                    womenPrice: 300,
                }
            ]
        }
    };

    const services = [
        {
            title: "Hair Cut",
            image: hair,
        },
        {
            title: "Styling Service",
            image: style,
        },
        {
            title: "Color",
            image: color,
        },
        {
            title: "Hair Care",
            image: care,
        },
        {
            title: "Detan",
            image: detan,
        },
        {
            title: "Hair Insurance",
            image: insurance,
        },
        {
            title: "Bleach & D-TAN",
            image: dtan,
        },
        {
            title: "Cleanup",
            image: cleanup,
        },
        {
            title: "Signature Facial",
            image: facial,
        },
        {
            title: "Texture Services",
            image: texture,
        },
        {
            title: "Body Rituals",
            image: body,
        },
        {
            title: "Manicure & Pedicure",
            image: manicure,
        },
        {
            title: "Wax",
            image: wax,
        },
        {
            title: "Threading",
            image: threading,
        }
    ];

    const handleServiceClick = (service) => {
        setSelectedService(servicesData[service.title]);
        setIsModalOpen(true);
    };

    return (
        <div className="max-w-7xl mx-auto p-4 mt-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        image={service.image}
                        onClick={() => handleServiceClick(service)}
                    />
                ))}
            </div>

            <ServiceModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setSelectedService(null);
                }}
                serviceData={selectedService}
            />
        </div>
    );
};

export default Menu;