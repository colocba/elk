import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PicCarousel from "./PicCarousel";
import LogosGrid from "./LogosGrid";
import AboutUs from "./AboutUs"
import Coverage from "./Coverage"

const Body = () => (
    <div>
        <PicCarousel/>
        <LogosGrid/>
        <Coverage/>
        <AboutUs/>
    </div>
)

export default Body