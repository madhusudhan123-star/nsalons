import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Branches = () => {
    const branches = [
        {
            name: "Pragathi Nagar, Hyderabad",
            address: "Plot No. 8, Ground Floor, Pragathi Nagar Main Road, Hyderabad",
            phone: "+91 9876543210",
            hours: "10:00 AM - 9:00 PM",
            image: "/api/placeholder/400/300"
        },
        {
            name: "DK Road, Ameerpet",
            address: "Shop No. 4, DK Road, Near Metro Station, Ameerpet, Hyderabad",
            phone: "+91 9876543211",
            hours: "10:00 AM - 9:00 PM",
            image: "/api/placeholder/400/300"
        },
        {
            name: "Jubilee Hills",
            address: "Road No. 36, Jubilee Hills, Near Checkpost, Hyderabad",
            phone: "+91 9876543212",
            hours: "10:00 AM - 9:00 PM",
            image: "/api/placeholder/400/300"
        },
        {
            name: "Madhapur",
            address: "Plot 123, Beside Tech Park, Madhapur Main Road, Hyderabad",
            phone: "+91 9876543213",
            hours: "10:00 AM - 9:00 PM",
            image: "/api/placeholder/400/300"
        },
        {
            name: "Kukatpally",
            address: "KPHB Phase 6, Near JNTU, Kukatpally, Hyderabad",
            phone: "+91 9876543214",
            hours: "10:00 AM - 9:00 PM",
            image: "/api/placeholder/400/300"
        },
        {
            name: "Gachibowli",
            address: "DLF Cybercity, Gachibowli Main Road, Hyderabad",
            phone: "+91 9876543215",
            hours: "10:00 AM - 9:00 PM",
            image: "/api/placeholder/400/300"
        }
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