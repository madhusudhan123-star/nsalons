
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Second from "../components/Second";
import ReviewSection from "../components/ReviewSection";
import SalonServices from "../components/SalonServices";
import StatsAndTestimonials from "../components/StatsAndTestimonials";

const Home = () => {
    const [headerLoaded, setHeaderLoaded] = useState(false);

    // Modify Header component to accept onVideoLoaded prop
    const modifiedHeaderProps = {
        onVideoLoaded: () => {
            setHeaderLoaded(true);
        }
    };

    return (
        <div>
            <Header />
            <ReviewSection />
            <SalonServices />
            <Second />
            <StatsAndTestimonials />
            {/* {headerLoaded && (
                <>
                </>
            )} */}
        </div>
    );
};

export default Home;