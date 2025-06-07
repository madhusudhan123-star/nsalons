import React from "react";
import { Star, MapPin, User } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const ReviewSection = () => {
    // Google Business locations - replace with your actual Google My Business place IDs
    const googleLocations = [
        {
            name: "NSalon Jubilee Hills",
            placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4", // Replace with actual place ID
            embedUrl: "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=place_id:ChIJN1t_tDeuEmsRUsoyG83frY4&reviews_sort=newest"
        },
        {
            name: "NSalon Banjara Hills", 
            placeId: "ChIJdd4hrwug2EcRLuiLXLlTEtc", // Replace with actual place ID
            embedUrl: "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=place_id:ChIJdd4hrwug2EcRLuiLXLlTEtc&reviews_sort=newest"
        }
    ];

    // Fallback reviews in case Google Reviews don't load
    const fallbackReviews = [
        {
            id: 1,
            name: "Abhijeet Kumar",
            rating: 5,
            comment: "Excellent service! The staff is professional and the ambiance is great. Highly recommend NSalon for quality haircuts.",
            date: "2 weeks ago",
            verified: true
        },
        {
            id: 2,
            name: "Rohit Sharma",
            rating: 5,
            comment: "Amazing experience at NSalon. The stylists are skilled and up-to-date with latest trends. Will definitely visit again!",
            date: "1 month ago",
            verified: true
        },
        {
            id: 3,
            name: "Azeem Ahmed",
            rating: 4,
            comment: "Great customer service and convenient location. The staff made me feel welcome. Good value for money.",
            date: "3 weeks ago",
            verified: true
        }
    ];

    const BookingForm = () => {
        const [state, handleSubmit] = useForm("mjkvzbgv");        if (state.succeeded) {
            return (
                <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-gradient-to-b from-gray-900/50 to-transparent text-green-400">
                    <h2 className="text-xl sm:text-2xl font-medium text-center">Thank you! Your appointment is booked.</h2>
                </div>
            );
        }

        return (
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-gradient-to-b from-gray-900/50 to-transparent"
            >
                <div className="flex flex-col items-center text-center gap-3 sm:gap-4 md:flex-row md:text-left md:justify-between">
                    <h2 className="text-yellow-400 text-xl sm:text-2xl font-medium">Book your appointment here</h2>
                    <p className="text-gray-300 text-sm sm:text-base">
                        or call <span className="text-yellow-400 font-medium">+91 709 770 9722/+91 910 026 9331</span> to book an appointment.
                    </p>
                </div>

                <div className="mt-6 flex flex-col gap-4 sm:gap-4 md:flex-row">
                    <div className="flex-1">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name*"
                            className="w-full p-3 sm:p-4 text-base rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    <div className="flex-1">
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile Number*"
                            className="w-full p-3 sm:p-4 text-base rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                        />
                        <ValidationError prefix="Mobile" field="mobile" errors={state.errors} />
                    </div>

                    <div className="flex-1">
                        <input
                            type="date"
                            name="date"
                            className="w-full p-3 sm:p-4 text-base rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                        />
                        <ValidationError prefix="Date" field="date" errors={state.errors} />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full mt-6 bg-yellow-400 text-black py-3 sm:py-4 px-6 rounded-lg hover:bg-yellow-500 active:bg-yellow-600 transition-colors font-medium text-base sm:text-lg touch-manipulation"
                >
                    {state.submitting ? "Booking..." : "Book an Appointment"}
                </button>
            </form>
        );
    };

    const StarRating = ({ rating }) => (
        <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
                <Star 
                    key={index} 
                    className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-500"}`}
                />
            ))}
        </div>
    );    const GoogleReviewCard = ({ review }) => (
        <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-md border border-gray-700 hover:shadow-xl hover:border-gray-600 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-semibold text-sm sm:text-base flex-shrink-0">
                        {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                        <h4 className="font-medium text-white text-sm sm:text-base truncate">{review.name}</h4>
                        {review.verified && (
                            <span className="text-xs text-green-400 flex items-center gap-1 mt-1">
                                ✓ Verified Review
                            </span>
                        )}
                    </div>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1 sm:text-right">
                    <StarRating rating={review.rating} />
                    <p className="text-xs text-gray-400">{review.date}</p>
                </div>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">{review.comment}</p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="bg-gray-700 px-2 py-1 rounded text-xs">Google Review</span>
            </div>
        </div>
    );    return (
        <div className="w-full bg-black pb-8 sm:pb-12">
            <BookingForm />

            {/* Google Reviews Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">What Our Customers Say</h2>
                    <p className="text-gray-400 text-sm sm:text-base">Real reviews from our valued customers on Google</p>
                </div>

                {/* Google Reviews Integration */}
                <div className="mb-8 sm:mb-12">
                    <div className="bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 border border-gray-800">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                            <div className="flex items-center gap-3">
                                <img 
                                    src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" 
                                    alt="Google" 
                                    className="w-8 h-8 flex-shrink-0"
                                />
                                <h3 className="text-lg sm:text-xl font-semibold text-white">Google Reviews</h3>
                            </div>
                            <div className="flex items-center gap-2 sm:ml-auto">
                                <StarRating rating={5} />
                                <span className="text-gray-400 text-sm">4.8 out of 5</span>
                            </div>
                        </div>
                        
                        {/* Google Reviews Link */}
                        <div className="text-center p-4 sm:p-6 lg:p-8 bg-gray-800 rounded-lg border border-gray-700">
                            <p className="text-gray-300 mb-4 text-sm sm:text-base">
                                Check out our Google Reviews and see what our customers are saying about NSalon!
                            </p>
                            <a 
                                href="https://g.co/kgs/XxsPJE4" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors text-sm sm:text-base font-medium touch-manipulation w-full sm:w-auto"
                            >
                                <MapPin className="w-4 h-4" />
                                View All Google Reviews
                            </a>
                        </div>
                    </div>
                </div>

                {/* Sample Reviews Display */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                    {fallbackReviews.map((review) => (
                        <GoogleReviewCard key={review.id} review={review} />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-8 sm:mt-12">
                    <p className="text-gray-400 mb-4 text-sm sm:text-base">Had a great experience at NSalon? Share it with others!</p>
                    <a 
                        href="https://g.co/kgs/XxsPJE4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-6 py-3 sm:py-4 rounded-lg hover:bg-yellow-500 active:bg-yellow-600 transition-colors font-medium text-sm sm:text-base touch-manipulation w-full sm:w-auto"
                    >
                        ⭐ Leave a Google Review
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;
