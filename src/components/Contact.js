import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactUs = () => {
    const [state, handleSubmit] = useForm("manyjjpb");

    if (state.succeeded) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
                    <p className="text-gray-600">Your message has been successfully sent. We'll get back to you soon!</p>
                </div>
            </div>
        );
    }

    return (
        <div id="contact" className="min-h-screen ">

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                            <p className="text-gray-600 mb-8">
                                Have questions about our services? We're here to help. Contact us through any of the following methods.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Our Location</h3>
                                    <p className="text-gray-600">123 Business Avenue, Technology Park, Suite 101</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Phone</h3>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Email</h3>
                                    <p className="text-gray-600">info@yourcompany.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Clock className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div>
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Phone Number"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <ValidationError
                                    prefix="Phone"
                                    field="phone"
                                    errors={state.errors}
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>
                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full bg-[#DC2626] text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {state.submitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;