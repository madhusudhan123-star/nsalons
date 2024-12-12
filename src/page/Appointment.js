import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const AppointmentHeader = () => (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-white text-2xl font-medium">
            Book your appointment here
        </h2>
        <p className="text-gray-300">
            or call <span className="text-orange-500">+91 879 066 6095/+91 910 026 9331</span> to book an appointment.
        </p>
    </div>
);

const AppointmentForm = () => {
    const [state, handleSubmit] = useForm("mjkvzbgv");

    if (state.succeeded) {
        return <p className="text-green-500 mt-4">Thanks for booking your appointment!</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
            {/* Name Input */}
            <input
                type="text"
                name="name"
                placeholder="Name*"
                className="p-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            {/* Mobile Number Input */}
            <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number*"
                className="p-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400"
            />
            <ValidationError prefix="Mobile" field="mobile" errors={state.errors} />

            {/* Date Input */}
            <input
                type="date"
                name="date"
                className="p-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400"
            />
            <ValidationError prefix="Date" field="date" errors={state.errors} />

            {/* Submit Button */}
            <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition-colors"
            >
                Book an Appointment
            </button>
        </form>
    );
};

const Appointment = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="w-full max-w-4xl p-8 bg-gray-900 rounded-lg shadow-lg">
                <AppointmentHeader />
                <AppointmentForm />
            </div>
        </div>
    );
};

export default Appointment;
