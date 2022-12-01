import React from "react"
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ContactFormSection from "../sections/ContactFormSection"
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import MapSection from "../sections/MapSection"

const ContactsView = () => {
    window.top.document.title = "Contact/Fixxo"
    return (
        <>
        <MainMenuSection />
        <BreadcrumbSection currentPage="Contacts" />
        <MapSection />
        <ContactFormSection />
        <FooterSection /> 
        </>
    )
}
export default ContactsView