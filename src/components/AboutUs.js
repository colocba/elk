import React from 'react'
import {Container} from "semantic-ui-react";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import './fonts.css'

// Our mission component
function AboutUs() {

    const style = {
        padding: "30px"
    }


    return (
        <Container textAlign='center' padding="20px">
            <div style={style} id="about-us">
                <h1>Our mission <Icon name="flag checkered"></Icon></h1>
                <hr/>
                <p className="comforta-font med-font">In Elk moving and hauling our mission is to give you the best experience of moving your house or remove all the junk and clean your property.
                    We will give you service you will remember in the future.</p>
                <p className="comforta-font med-font">We offer full service by comming to your property, removing all junk and trash and leaving it spotless.
                    We clean garages, home and backyard.</p>
            </div>
        </Container>
    )
}

export default AboutUs