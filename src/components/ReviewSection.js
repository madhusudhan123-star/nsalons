import React from "react";
import { User } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const ReviewSection = () => {
    const reviews = [
        {
            id: 1,
            name: "Abhijeet",
            rating: 5,
            comment: "Convenient locations all over Hyderabad. There's always a TrimX nearby.",
        },
        {
            id: 2,
            name: "Rohit",
            rating: 5,
            comment: "Stylists are up-to-date on latest trends. Got a modern cut I love.",
        },
        {
            id: 3,
            name: "Azeem",
            rating: 4,
            comment: "Excellent customer service. They really make you feel welcome.",
        },
    ];

    const BookingForm = () => {
        const [state, handleSubmit] = useForm("mjkvzbgv");

        if (state.succeeded) {
            return (
                <div className="w-full max-w-4xl mx-auto p-8 bg-gradient-to-b from-gray-900/50 to-transparent text-green-400">
                    <h2 className="text-2xl font-medium">Thank you! Your appointment is booked.</h2>
                </div>
            );
        }

        return (
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-4xl mx-auto p-8 bg-gradient-to-b from-gray-900/50 to-transparent"
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <h2 className="text-yellow-400 text-2xl font-medium">Book your appointment here</h2>
                    <p className="text-gray-300">
                        or call <span className="text-yellow-400">+91 879 066 6095/+91 910 026 9331</span> to book an appointment.
                    </p>
                </div>

                <div className="mt-4 flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        className="flex-1 p-2 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />

                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile Number*"
                        className="flex-1 p-2 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                    />
                    <ValidationError prefix="Mobile" field="mobile" errors={state.errors} />

                    <input
                        type="date"
                        name="date"
                        className="flex-1 p-2 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                    />
                    <ValidationError prefix="Date" field="date" errors={state.errors} />
                </div>

                <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full mt-4 bg-yellow-400 text-black py-3 rounded hover:bg-yellow-500 transition-colors font-medium"
                >
                    Book an Appointment
                </button>
            </form>
        );
    };

    const StarRating = ({ rating }) => (
        <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
                <span key={index} className={`text-2xl ${index < rating ? "text-yellow-400" : "text-gray-700"}`}>
                    ★
                </span>
            ))}
        </div>
    );

    return (
        <div className="w-full bg-black py-12">
            <BookingForm />

            <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="flex flex-col items-start p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                            <User className="w-8 h-8 text-yellow-400" />
                        </div>
                        <h3 className="mt-4 text-xl font-medium text-white">{review.name}</h3>
                        <StarRating rating={review.rating} />
                        <p className="mt-2 text-gray-300">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;
