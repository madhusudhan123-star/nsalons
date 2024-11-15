import React from 'react'
import Header from '../components/Header'
import Second from '../components/Second';
import Dealslide from '../components/Dealslide';
import ReviewSection from '../components/ReviewSection';
import SalonServices from "../components/SalonServices";
import BranchesSection from "../components/BranchesSection";
import StatsAndTestimonials from "../components/StatsAndTestimonials";

const Home = () => {
    return (
        <div>
            <Header />
            <Dealslide />
            <ReviewSection />
            <SalonServices />
            <BranchesSection />
            <Second />
            <StatsAndTestimonials />
        </div>
    )
}

export default Home