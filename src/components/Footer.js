import React from 'react'
import DevInformation from './DevInformation'
import CompanyFooter from './CompanyFooter'
import './Footer.css'
import './style.css'

function Footer() {
    return (
        <div className="gold-bg">
            <CompanyFooter/>
            <div className="foot-divider"></div>
            <DevInformation/>
        </div>
    )
}

export default Footer