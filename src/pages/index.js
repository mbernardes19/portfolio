import React from "react"
import Image from "../components/image"
import SEO from "../components/seo"
import PageBase from '../components/page-base';
import AboutSection from '../components/about-section';
import HeroSection from "../components/hero-section";
import PortfolioSection from '../components/portfolio-section';

const HomePage = () => (
    <PageBase>
        <SEO title="Home" />
        <div style={{ margin: '0 auto', padding: '20px 40px 0px 40px', maxWidth: `620px` }}>
            <Image />
        </div>
        <HeroSection />
        <AboutSection/>
        <PortfolioSection/>
    </PageBase>
)

export default HomePage
