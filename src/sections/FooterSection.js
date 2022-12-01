import React from 'react'
import ExternaLinkIcon from '../components/ExternaLinkIcon'


const FooterSection = () => {
    return (
        <footer>
        <div className="social-media">
            <ExternaLinkIcon link="https://facebook.com" icon="fa-brands fa-facebook-f" />
            <ExternaLinkIcon link="https://instagram.com" icon="fa-brands fa-instagram" />
            <ExternaLinkIcon link="https://twitter.com" icon="fa-brands fa-twitter" />
            <ExternaLinkIcon link="https://google.com" icon="fa-brands fa-google" />
            <ExternaLinkIcon link="https://linkedin.com" icon="fa-brands fa-linkedin" />
    </div>
       <div>  <p> © 2022 Fixxo. All Rights Reserved.</p>
       </div>
    </footer>
    )
}
export default FooterSection
