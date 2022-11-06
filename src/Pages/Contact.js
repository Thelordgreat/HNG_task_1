import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [messageField, setMessageField] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (messageField.length === 0) {
            setError(true)
        }
        e.target.reset();
    }

    return (
        <div className='form_container'>
            <form onSubmit={handleSubmit}>
                <h2>Contact Me</h2>
                <p className='heading'>Hi there, contact me to ask me about anything you have in mind.</p>

                <div className='name_row'>
                    <div>
                        <label>First Name:</label>
                        <input type="name" placeholder='Enter your first name' id='first_name' required />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="name" placeholder='Enter your last name' id='last_name' required />
                    </div>
                </div>

                <div className='row'>
                    <label>Email:</label>
                    <input type="email" placeholder='yourname@email.com' id='email' required />
                </div>

                <div className='row'>
                    <label>Message:</label>
                    <input type="text" className='message_field' placeholder="" id='message' onChange={e => setMessageField(e.target.value)} />
                    {error&&messageField.length<=0? <span>Please enter a message</span> : ""}
                </div>

                <div className='terms'>
                    <input type="checkbox" required />
                    <p>You agree to providing your data to Great who may contact you.</p>
                </div>

                <div>
                    <button id='btn_submit'>Send message</button>
                </div>
            </form>
        </div>
    )
}

export default Contact