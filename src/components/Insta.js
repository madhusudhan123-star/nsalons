import React from 'react'
import post1 from '../assets/post1.jpg'
import post2 from '../assets/post2.jpg'
import post3 from '../assets/post3.jpg'
import post4 from '../assets/post4.jpg'

const Insta = () => {  // Actual Instagram posts from N Salons Hyderabad
  const instagramPosts = [
    {
      id: 1,
      postUrl: "https://www.instagram.com/p/DBGnuiLTpEv/?utm_source=ig_web_copy_link&igsh=M2VmYmJleXdodHM0",
      embedUrl: "https://www.instagram.com/p/DBGnuiLTpEv/embed",
      image: post1,
    //   caption: "Gorgeous curly hair transformation at N Salons! Our expert stylists know how to enhance your natural texture ✨ #NSalonsHyderabad #CurlyHair #HairTransformation #SalonLife",
    //   likes: 428,
    //   comments: 35
    },
    {
      id: 2,
      postUrl: "https://www.instagram.com/p/C07GZDMymSG/?utm_source=ig_web_copy_link&igsh=MXdiYzN0d2FoejI2Ng==",
      embedUrl: "https://www.instagram.com/p/C07GZDMymSG/embed",
      image: post2,
    //   caption: "Flawless makeup artistry for our beautiful client! Perfect for any occasion 💄✨ #NSalons #MakeupArtist #ProfessionalMakeup #HyderabadSalons #GlowUp",
    //   likes: 312,
    //   comments: 28
    },
    {
      id: 3,
      postUrl: "https://www.instagram.com/p/C0tw87nvoSW/?utm_source=ig_web_copy_link&igsh=MTl4ZGlibjFpczFtbA==",
      embedUrl: "https://www.instagram.com/p/C0tw87nvoSW/embed",
      image: post3,
    //   caption: "Stunning bridal makeover! Every bride deserves to feel like a queen on her special day 👰💐 #BridalMakeup #NSalonsHyderabad #WeddingReady #BridalGlow #IndianBride",
    //   likes: 567,
    //   comments: 82
    },
    {
      id: 4,
      postUrl: "https://www.instagram.com/p/C0mM_YgP5Dm/?utm_source=ig_web_copy_link&igsh=cmM3ZXZ4Z21hMWdo",
      embedUrl: "https://www.instagram.com/p/C0mM_YgP5Dm/embed",
      image: post4,
    //   caption: "Get your botox done for affordable prices at Nsalons now.",
    //   likes: 389,
    //   comments: 45
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Follow Us On Instagram
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Stay updated with our latest styles and transformations
          </p>
          <div className="flex justify-center">
            <span className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
          </div>
        </div>        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Post Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Instagram Icon Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-medium mb-2 line-clamp-2">{post.caption}</p>
                    <div className="flex items-center space-x-4 text-xs">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        {post.likes}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram Profile Link */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/nsalonshyderabad/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @nsalonshyderabad
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-20">
          <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  )
}

export default Insta