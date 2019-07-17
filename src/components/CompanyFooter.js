import React from 'react'
import './CompanyFooter.css'
import {Container} from "semantic-ui-react";
import './fonts.css'
import './style.css'

const CompanyFooter = () => (
    <div className="pad-20" id="contact-us">
        <Container textAlign='center'>
            <img className="white-bg" src="../assets/logo1.png" alt="Elk"/>
            <h2 className="ubuntu-font med-font" id="comp-name">Elk Moving and Hauling Services</h2>
            <h2 className="ubuntu-font med-font">elkservices1@gmail.com</h2>
            <h3 className="ubuntu-font med-font">Phone: +1-800-7171323</h3>
        </Container>
    </div>
)

export default CompanyFooter