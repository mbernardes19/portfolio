import React from "react"
import Image from "../components/image"
import SEO from "../components/seo"
import PageBase from './page-base';

const HomePage = () => (
    <PageBase>
        <SEO title="Home" />
        <div style={{ margin: '0 auto', padding: '20px 40px 0px 40px', maxWidth: `620px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
    </PageBase>
)

export default HomePage
