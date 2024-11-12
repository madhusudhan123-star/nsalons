import React from 'react';

const Service = () => {
    const services = [
        {
            id: 1,
            quote: "Corporate films are tailored video productions that effectively communicate your company’s vision, values, and objectives. They serve as powerful tools to engage employees, clients, and stakeholders, leaving a memorable impression on all viewers.",
            title: "Corporate Films​",
        },
        {
            id: 2,
            quote: "3D walkthroughs provide immersive virtual experiences of unbuilt spaces, allowing audiences to explore architectural designs in stunning detail. These visuals are ideal for real estate presentations, offering clients a realistic preview of the final product.",
            title: "3D Walkthroughs​",
        },
        {
            id: 3,
            quote: "Television commercials deliver high-impact advertising through engaging narratives and visuals that capture the audience's attention. These short, powerful videos promote products or services, boosting brand visibility and recognition.",
            title: "Television Commercials​",
        },
        {
            id: 4,
            quote: "Corporate presentations combine visual storytelling with impactful messaging to deliver information clearly and compellingly. Perfect for meetings, product launches, and company introductions, these presentations effectively engage viewers.",
            title: "Corporate Presentations​",
        },
        {
            id: 5,
            quote: "Jingles are catchy musical pieces crafted to enhance brand recall and build emotional connections with audiences. These short, memorable tunes are ideal for radio, TV, and digital platforms, leaving a lasting impression.",
            title: "Jingles​",
        },
        {
            id: 6,
            quote: "Motivational films inspire and uplift audiences, using powerful stories and visuals to drive positive change. Perfect for internal events, leadership training, and team building, these films create a lasting motivational impact.",
            title: "Motivational Films​",
        }
    ];

    return (
        <section id="whatwedo" className="py-16 bg-white text-black">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 relative">
                    Our Service
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-green-500 mt-4"></span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white text-black p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="mb-6">
                                <svg
                                    className="w-8 h-8 text-green-500 mb-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
                                </svg>
                                <h1 className='text-2xl font-bold pb-3'>{testimonial.title}</h1>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {testimonial.quote}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Service;