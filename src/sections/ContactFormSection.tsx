import React, { useState } from 'react'
import AlertNotification from '../components/AlertNotification'
import { validateEmail, validateText } from '../utilities/validation'

export interface FormDataType {
    name: string
    email: string
    comments: string
}

const ContactFormSection: React.FC = () => {
    const DEFAULT_VALUES: FormDataType = {name: '', email: '', comments: ''}
    const [formData, setFormData] = useState<FormDataType>(DEFAULT_VALUES)
    const [errors, setErrors] = useState<FormDataType>(DEFAULT_VALUES)
    const [submittet, setSubmittet] = useState<boolean>(false)
    const [failedSubmit, setFailedSubmit] = useState<boolean>(false)

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id,  value} = e.target
            setFormData({...formData, [id]: value})
    
        if (id === 'name')
            setErrors({...errors, [id]: validateText(id, value)})

        if (id === 'email')
            setErrors({...errors, [id]: validateEmail(id, value)})
    }
    
    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {id, value} = e.target

        if (id === 'comments')
        setErrors({...errors, [id]: validateText(id, value, 5)})
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmittet(false)
        setFailedSubmit(false)

        if (formData.name !== '' && formData.name !== '' && formData.name !== '')
            if (errors.name === '' && errors.email === '' && errors.comments === '') {
               
        const res = await fetch('https://win22-webapi.azurewebsites.net/api/comtactform', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
            })

            if (res.status === 200) {
                setSubmittet(true)
                setFormData(DEFAULT_VALUES)
            } else {
                setSubmittet(false)
                setFailedSubmit(true)
            }
        }
    }



return (
    <section className="contact-form">
    <div className="container">
    { submittet ? (<AlertNotification alertType="success" title="Thank you for your comments!" text="We will be contact you as soon as possible." />) :  (<></>)}
    { failedSubmit ? (<AlertNotification alertType="danger" title="Something went wrong!" text="We couldn't submit your comments right now." />) :  (<></>)}

    <h2>Come in Contact with Us</h2>
    <form onSubmit={handleSubmit} noValidate>
    <div>
    <input id="name" className={(errors.name ? 'error': '')} value={formData.name} onChange={(e) => handleChange(e)} type="text" placeholder="Your Name" />
    <div className="errorMessage">{errors.name}</div>
    </div>
    <div>
    <input id="email" className={(errors.email ? 'error': '')} type="email" placeholder="Your Mail" value={formData.email}  onChange={(e) => handleChange(e)} />
    <div className="errorMessage">{errors.email}</div>
    </div>
    <div className="textarea">
    <textarea id="comment" className={(errors.comments ? 'error': '')} style={(errors.comments ? {border: '1px solid #FF7373'}: {} )} placeholder="Comments" value={formData.comments}  onChange={(e) => handleTextAreaChange(e)}></textarea>                   
    <div className="errorMessage">{errors.comments}</div>
    </div>
    <div className="formBtn">
        <button type="submit" className="btn-theme">Post Comments</button> 
    </div>
</form>
</div>
</section>
)
}

export default ContactFormSection
     


