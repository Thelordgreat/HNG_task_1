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
                        <label htmlFor='first_name'>First Name:</label>
                        <input type="name" placeholder='Enter your first name' id='first_name' required />
                    </div>
                    <div>
                        <label htmlFor='last_name'>Last Name:</label>
                        <input type="name" placeholder='Enter your last name' id='last_name' required />
                    </div>
                </div>

                <div className='row'>
                    <label htmlFor='email'>Email:</label>
                    <input type="email" placeholder='yourname@email.com' id='email' required />
                </div>

                <div className='row'>
                    <label htmlFor='message'>Message:</label>
                    <textarea name="" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..." className='message_field' onChange={e => setMessageField(e.target.value)}></textarea>
                    {error && messageField.length <= 0 ? <span>Please enter a message</span> : ""}
                </div>

                <div className='terms'>
                    <input type="checkbox" required />
                    <p>You agree to providing your data to Great who may contact you.</p>
                </div>

                <div>
                    <button id='btn__submit'>Send message</button>
                </div>
            </form>
        </div>
    )
}

export default Contact