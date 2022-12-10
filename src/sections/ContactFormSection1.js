import React, {useState} from 'react'


const ContactFormSection = () => {
    const [contactForm, setContactForm] = useState ({name: '', email: '', comment: ''})
    const [formErrors, setFormErrors] = useState({})
    const [canSubmit, setCanSubmit] = useState(false)

    const validate = (values) => {
        const errors = {}
        const regex_email = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if(!values.name)
        errors.name = "You must enter a name"

        if(!values.email)
        errors.email = "You must enter an email adress"

        else if(!regex_email.test(values.email))
        errors.email = "You must enter a valid email adress (eg. name@domaim.com)"

        if(!values.comment)
        errors.comment = "You must enter a comment"
        else if(values.comment.length < 5)
        errors.comment = "Your comment must be longer then five character"

        if(Object.keys(errors).length === 0)
        setCanSubmit(true)
        else
        setCanSubmit(false)


        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))
    }

    return (
        <section className="contact-form">
            <div className="container">
               {
                canSubmit ? 
                    (<div className="d-flex justify-content-center align-items-center">
                    <div>Thank you for your comment!</div>
                    </div>)
                    :
                    (
                        <>
                            <h2>Come in Contact with Us</h2>
                            <form onSubmit={handleSubmit} noValidate>
                            <div>
                            <input id="name" type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange} />
                            <div className="errorMessage">{formErrors.name}</div>
                            </div>
                            <div>
                            <input id="email" type="email" placeholder="Your Mail" value={contactForm.email}  onChange={handleChange} />
                            <div className="errorMessage">{formErrors.email}</div>
                            </div>
                            <div className="textarea">
                            <textarea id="comment" placeholder="Comments" value={contactForm.comment}  onChange={handleChange}></textarea>                   
                            <div className="errorMessage">{formErrors.comment}</div>
                            </div>
                            <div className="formBtn">
                                <button type="submit" className="btn-theme">Post Comments</button> 
                            </div>
                </form>
                        </>
                    )
               }
            </div>
        </section>
        
    )
}
export default ContactFormSection