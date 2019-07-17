import React from 'react'
//import {Carousel} from 'react-responsive-carousel'
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CompanyFooter.css'
import './style.css'
import {Carousel} from 'react-bootstrap'
import {Container} from "semantic-ui-react";

const PicCarousel = () => (
    <div className="gold-bg">
        <Container>
            <Carousel indicators={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../assets/truck1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className="text-shad">Moving your home from day one</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../assets/truck2.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2 className="text-shad">Cleaning up the junk and trash leaving your place spotless</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    </div>
)

export default PicCarousel