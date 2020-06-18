import React from "react"
import Image from "../components/image"
import SEO from "../components/seo"
import PageBase from '../components/page-base';
import AboutSection from '../components/section/about-section';
import HeroSection from "../components/section/hero-section";
import PortfolioSection from '../components/section/portfolio-section';
import FeatureToggle from '../components/feature-toggle';

const HomePage = () => (
    <PageBase>
        <SEO title="Home" />
        <div style={{ margin: '0 auto', padding: '20px 40px 0px 40px', maxWidth: `620px` }}>
            <Image />
        </div>
        <HeroSection />
        <FeatureToggle disabled>
            <AboutSection/>
            <PortfolioSection/>
        </FeatureToggle>
    </PageBase>
)

export default HomePage
