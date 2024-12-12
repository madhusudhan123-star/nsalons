import React, { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "./Navbar";

const SequentialVideoPlayer = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [hoveredVideoIndex, setHoveredVideoIndex] = useState(null);
    const videoRefs = useRef([]);

    // List of YouTube Shorts URLs (adding video IDs to use in playlist)
    const youtubeVideos = [
        { src: "https://www.youtube.com/embed/RZ6567Y1Ix0", title: "Short 1", videoId: "RZ6567Y1Ix0" },
        { src: "https://www.youtube.com/embed/Z1vTGOO80ew", title: "Short 3", videoId: "Z1vTGOO80ew" },
        { src: "https://www.youtube.com/embed/vh0co7ZpQVk", title: "Short 4", videoId: "vh0co7ZpQVk" },
        { src: "https://www.youtube.com/embed/Pym91PDQC4w", title: "Short 2", videoId: "Pym91PDQC4w" },
    ];

    // Move to the next video in the list
    const playNextVideo = useCallback(() => {
        // Pause the current video
        if (videoRefs.current[currentVideoIndex]) {
            videoRefs.current[currentVideoIndex].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }

        // Move to next video
        const nextIndex = (currentVideoIndex + 1) % youtubeVideos.length;
        setCurrentVideoIndex(nextIndex);
    }, [currentVideoIndex, youtubeVideos.length]);

    // Play a specific video
    const playVideo = useCallback((index) => {
        // Pause all videos first
        videoRefs.current.forEach((ref, i) => {
            if (ref) {
                ref.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            }
        });

        // Play the selected video
        setCurrentVideoIndex(index);
    }, []);

    useEffect(() => {
        // Listen for YouTube player state changes
        const onPlayerStateChangeHandler = (event) => {
            // YouTube player state codes:
            // 0 - ended
            // 1 - playing
            // 2 - paused
            if (event.data === 0) {
                playNextVideo();
            }
        };

        window.onPlayerStateChange = onPlayerStateChangeHandler;

        // Add message event listener for player state changes
        const messageHandler = (event) => {
            if (event.data && typeof event.data === 'string' && event.data.includes('onStateChange')) {
                const state = JSON.parse(event.data).info;
                if (state === 0) {
                    playNextVideo();
                }
            }
        };

        window.addEventListener('message', messageHandler);

        return () => {
            window.removeEventListener('message', messageHandler);
        };
    }, [playNextVideo]);

    return (
        <div className="bg-black py-4 sm:py-10">
            <div className="container gap-4 flex flex-col items-center justify-around sm:flex-row scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-800">
                {youtubeVideos.map((video, index) => (
                    <div
                        key={index}
                        className="min-w-[300px] flex-shrink-0 relative"
                        onMouseEnter={() => {
                            setHoveredVideoIndex(index);
                            // Pause current video and play hovered video
                            if (index !== currentVideoIndex) {
                                playVideo(index);
                            }
                        }}
                        onMouseLeave={() => setHoveredVideoIndex(null)}
                    >
                        {/* <iframe
                            ref={el => videoRefs.current[index] = el}
                            width="320"
                            height="550"
                            src={`${video.src}?enablejsapi=1&autoplay=${index === currentVideoIndex ? 1 : 0}&mute=1&loop=1&playlist=${video.videoId}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-2xl"
                        ></iframe> */}
                        <iframe
                            ref={(el) => (videoRefs.current[index] = el)}
                            src={`https://www.youtube.com/embed/${video.videoId}?enablejsapi=1&autoplay=${index === currentVideoIndex ? 1 : 0}&mute=1&loop=1&playlist=${video.videoId}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                            className="rounded-2xl w-[320px] h-[550px]"
                            style={{
                                aspectRatio: '16/9', // Maintain aspect ratio for all devices
                            }}
                        ></iframe>

                        {/* Overlay for non-playing videos */}
                        {index !== currentVideoIndex && (
                            <div className="absolute inset-0 bg-black opacity-50 z-10 rounded-2xl"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};


const Header = () => {
    return (
        <div className="min-h-screen pb-40">
            <Navbar />
            <div className="pt-16">
                <SequentialVideoPlayer />
            </div>
            <div>
                <div className="text-center py-6 sm:py-12 flex justify-center mt-10 sm:mt-20">
                    <h2 className="text-lg sm:text-5xl text-black font-bold bg-white px-4 sm:px-8 rounded-md w-11/12 sm:w-auto shadow-md">
                        LOOK SHARP FEEL GOOD
                    </h2>
                </div>

            </div>
        </div>
    );
};

export default Header;

