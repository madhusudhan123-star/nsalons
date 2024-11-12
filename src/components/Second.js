// // import React from 'react'

// // const Second = () => {
// //     return (
// //         <div>
// //             <div className='flex '>
// //                 <div className='w-1/2 '>
// //                     <h1 className=''>Teamwork creative solutions</h1>
// //                     <p className=''>
// //                         With two decades of expertise, our company stands as a leader in the industry.
// //                         Over the past 20 years, we have expertise in our skills and knowledge, delivering
// //                         exceptional service and innovative solutions to our clients. Our experience spans
// //                         various sectors like Infrastructure, Pharma, Real Estate, Education, Hospitality,
// //                         Healthcare, and Information Technology.We've built a reputation for reliability,
// //                         excellence, and a deep commitment to customer satisfaction
// //                         <br />
// //                         At Teamworks, we offer a wide range of corporate video production services tailored to
// //                         meet your specific video requirements. Distinguishing ourselves among video production
// //                         companies, we seamlessly integrate high-quality professional videos into your marketing
// //                         strategy. Going beyond expectations, we provide comprehensive services including video
// //                         production, Ad films ,3D Walkthrough ,3D Graphics and creative marketing strategies.
// //                     </p>
// //                 </div>
// //                 <div className='w-1/2 flex flex-col items-center'>
// //                     <h1>GET In Touch With Us</h1>
// //                     <input placeholder='Name' className='border-2 border-black' />
// //                     <input placeholder='Email' className='border-2 border-black' />
// //                     <input placeholder='Phone Number' className='border-2 border-black' />
// //                     <input placeholder='Message' className='border-2 border-black' />
// //                     <button className='bg-red-600 px-6 py-2 rounded'>Submit</button>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Second

// import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';

// const Second = () => {
//     const [state, handleSubmit] = useForm("manyjjpb");
//     if (state.succeeded) {
//         return <p>Thanks for joining!</p>;
//     }
//     return (
//         <div className="p-8 bg-gray-50">
//             <div className="flex flex-col lg:flex-row lg:space-x-8">
//                 {/* Left Section */}
//                 <div className="lg:w-3/5 mb-8 lg:mb-0 lg:p-10">
//                     <h1 className="text-3xl font-bold text-gray-800 mb-4">Teamwork Creative Solutions</h1>
//                     <p className="text-gray-600 leading-relaxed  text-xl">
//                         With two decades of expertise, our company stands as a leader in the industry. Over the past 20 years, we have honed our skills and knowledge, delivering exceptional service and innovative solutions to our clients. Our experience spans various sectors like Infrastructure, Pharma, Real Estate, Education, Hospitality, Healthcare, and Information Technology. We've built a reputation for reliability, excellence, and a deep commitment to customer satisfaction.
//                         <br /><br />
//                         At Teamworks, we offer a wide range of corporate video production services tailored to meet your specific video requirements. Distinguishing ourselves among video production companies, we seamlessly integrate high-quality professional videos into your marketing strategy. Going beyond expectations, we provide comprehensive services including video production, Ad films, 3D Walkthroughs, 3D Graphics, and creative marketing strategies.
//                     </p>
//                 </div>
//                 {/* Right Section (Contact Form) */}
//                 <div className="lg:w-2/5 flex flex-col items-center p-6 ">
//                     <h1 className="text-3xl font-semibold text-gray-800 mb-6">Get In Touch With Us</h1>
//                     <form onSubmit={handleSubmit}>
//                         <input placeholder="Name" className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                         <ValidationError
//                             prefix="name"
//                             field="name"
//                             errors={state.errors}
//                         />
//                         <input placeholder="Email" className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                         <ValidationError
//                             prefix="Email"
//                             field="email"
//                             errors={state.errors}
//                         />
//                         <input placeholder="Phone Number" className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                         <ValidationError
//                             prefix="number"
//                             field="number"
//                             errors={state.errors}
//                         />
//                         <button type="submit" disabled={state.submitting} className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Second;

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Second = () => {
    const [state, handleSubmit] = useForm("manyjjpb");

    if (state.succeeded) {
        return (
            <div className="p-8 bg-gray-50">
                <div className="flex justify-center items-center min-h-[400px]">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-green-600 mb-4">Thanks for reaching out!</h2>
                        <p className="text-gray-600">We'll get back to you as soon as possible.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-8 bg-gray-50">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
                {/* Left Section */}
                <div className="lg:w-3/5 mb-8 lg:mb-0 lg:p-10">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Teamwork Creative Solutions</h1>
                    <p className="text-gray-600 leading-relaxed text-xl">
                        With two decades of expertise, our company stands as a leader in the industry. Over the past 20 years, we have honed our skills and knowledge, delivering exceptional service and innovative solutions to our clients. Our experience spans various sectors like Infrastructure, Pharma, Real Estate, Education, Hospitality, Healthcare, and Information Technology. We've built a reputation for reliability, excellence, and a deep commitment to customer satisfaction.
                        <br /><br />
                        At Teamworks, we offer a wide range of corporate video production services tailored to meet your specific video requirements. Distinguishing ourselves among video production companies, we seamlessly integrate high-quality professional videos into your marketing strategy. Going beyond expectations, we provide comprehensive services including video production, Ad films, 3D Walkthroughs, 3D Graphics, and creative marketing strategies.
                    </p>
                </div>
                {/* Right Section (Contact Form) */}
                <div className="lg:w-2/5 flex flex-col items-center p-6">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-6">Get In Touch With Us</h1>
                    <form onSubmit={handleSubmit} className="w-full">
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                            className="text-red-500 text-sm mb-2"
                        />

                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                            className="text-red-500 text-sm mb-2"
                        />

                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <ValidationError
                            prefix="Phone"
                            field="phone"
                            errors={state.errors}
                            className="text-red-500 text-sm mb-2"
                        />

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message (Optional)"
                            rows="4"
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                            className="text-red-500 text-sm mb-2"
                        />

                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {state.submitting ? 'Sending...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Second;