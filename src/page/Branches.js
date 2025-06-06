import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import branch1 from '../assets/branch1.jpg';
import branch2 from '../assets/branch2.webp';
import branch3 from '../assets/branch3.webp';
import branch4 from '../assets/branch4.webp';
import branch5 from '../assets/branch5.webp';
import branch6 from '../assets/branch6.webp';

const Branches = () => {
    const branches = [
        {
            name: "Begumpet, Hyderabad",
            address: "shoppers stop, besides, lane, opposite to ramalayam, Telangana 500016",
            phone: "+91 709 770 9722",
            hours: "10:00 AM - 9:00 PM",
            image: branch1
        },
        {
            name: "Chanakyapuri, Hyderabad",
            address: "pt NO .09 , Road : 2, INDRAPRASTHA COLONY, Mannava Enclave, Chanakyapuri, Mansoorabad, Hyderabad, Telangana 500035",
            phone: "+91 087906 66095",
            hours: "10:00 AM - 9:00 PM",
            image: branch2
        },
        {
            name: "Chintalkunta, Hyderabad",
            address: "opp: grab&go, Jahangir Nagar Rd, beside tea kings, Abhyudaya Nagar, Chintalkunta, Hyderabad, Telangana 500074",
            phone: "+91 087906 66095",
            hours: "10:00 AM - 9:00 PM",
            image: branch4
        },
        {
            name: "Old Bowenpally, Hyderabad",
            address: "Ground Floor, Plot.no. 1, opp. Destiny Apartments, Sai Nagar, Kanajiguda, Old Bowenpally, Hyderabad, Secunderabad, Telangana 500015",
            phone: "+91 087906 66095",
            hours: "10:00 AM - 9:00 PM",
            image: branch5
        },
        {
            name: "Sanathnagar, Hyderabad",
            address: "street No :4 Akruthi Nilayam c\"zen colony sanathnagar, Hyderabad, Telangana 500018",
            phone: "+91 087906 66095",
            hours: "10:00 AM - 9:00 PM",
            image: branch6
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 mt-44">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Branches</h1>
                <p className="text-lg text-gray-600">Find the nearest salon branch in your area</p>
            </div>

            {/* Branches Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {branches.map((branch, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <img
                            src={branch.image}
                            alt={branch.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{branch.name}</h3>

                            <div className="space-y-3 text-gray-600">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                                    <p>{branch.address}</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 flex-shrink-0" />
                                    <p>{branch.phone}</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 flex-shrink-0" />
                                    <p>{branch.hours}</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                    <a href='/appointment'>
                                        Book Appointment
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Branches;