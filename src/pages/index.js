import React from "react"
import SEO from "../components/seo"
import PageBase from '../components/page-base';
import AboutSection from '../components/section/about-section';
import HeroSection from "../components/section/hero-section";
import PortfolioSection from '../components/section/portfolio-section';
import FeatureToggle from '../components/feature-toggle';

const HomePage = () => (
    <PageBase>
        <SEO title="Matheus Bernardes" />
        <HeroSection />
        <AboutSection/>
        <PortfolioSection/>
    </PageBase>
)

export default HomePage
