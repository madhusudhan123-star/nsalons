// Appointment.js
import React from 'react';

const AppointmentHeader = () => (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-white text-2xl font-medium">
            Book your appointment here
        </h2>
        <p className="text-gray-300">
            or call <span className="text-orange-500">709 770 9722</span> to book an appointment.
        </p>
    </div>
);

const AppointmentForm = () => (
    <div className="mt-4 flex flex-col md:flex-row gap-4">
        {["Name*", "Mobile Number*"].map((placeholder, index) => (
            <input
                key={index}
                type={placeholder === "Mobile Number*" ? "tel" : "text"}
                placeholder={placeholder}
                className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400"
            />
        ))}
        <input
            type="date"
            className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400"
        />
    </div>
);

const AppointmentButton = () => (
    <button className="w-full mt-4 bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition-colors">
        Book an Appointment
    </button>
);

const Appointment = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="w-full max-w-4xl p-8 bg-gray-900 rounded-lg shadow-lg">
                <AppointmentHeader />
                <AppointmentForm />
                <AppointmentButton />
            </div>
        </div>
    );
};

export default Appointment;
