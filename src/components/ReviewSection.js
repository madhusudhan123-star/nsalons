import React from 'react';
import { User } from 'lucide-react';

const ReviewSection = () => {
    const reviews = [
        {
            id: 1,
            name: "Abhijeet",
            rating: 5,
            comment: "Convenient locations all over Hyderabad. There's always a TrimX nearby."
        },
        {
            id: 2,
            name: "Rohit",
            rating: 5,
            comment: "Stylists are up-to-date on latest trends. Got a modern cut I love."
        },
        {
            id: 3,
            name: "Azeem",
            rating: 4,
            comment: "Excellent customer service. They really make you feel welcome."
        }
    ];

    const BookingForm = () => (
        <div className="w-full max-w-4xl mx-auto p-8 bg-gradient-to-b from-yellow-50/50 to-transparent">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <h2 className="text-blue-700 text-2xl font-medium">
                    Book your appointment here
                </h2>
                <p className="text-gray-600">
                    or call <span className="text-orange-500">709 770 9722</span> to book an appointment.
                </p>
            </div>

            <div className="mt-4 flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Name*"
                    className="flex-1 p-2 border rounded"
                />
                <input
                    type="tel"
                    placeholder="Mobile Number*"
                    className="flex-1 p-2 border rounded"
                />
                <input
                    type="date"
                    className="flex-1 p-2 border rounded"
                />
            </div>

            <button className="w-full mt-4 bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition-colors">
                Book an Appointment
            </button>
        </div>
    );

    const StarRating = ({ rating }) => (
        <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
                <span key={index} className={`text-2xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                    ★
                </span>
            ))}
        </div>
    );

    return (
        <div className="w-full bg-white">
            <BookingForm />

            <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review) => (
                    <div key={review.id} className="flex flex-col items-start p-6 border rounded-lg">
                        <div className="w-12 h-12 rounded-full border-2 border-blue-400 flex items-center justify-center">
                            <User className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="mt-4 text-xl font-medium">{review.name}</h3>
                        <StarRating rating={review.rating} />
                        <p className="mt-2 text-gray-600">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;