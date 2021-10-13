import React from 'react';

export default function ContactForm() {
    return (
        <div className="contact__form--container">
            <div className="contact__form--item">
                <input type="text" />
                <label>FirstName</label>
            </div>
            <div className="contact__form--item">
                <input type="text" />
                <label>LastName</label>
            </div>
            <div className="contact__form--item">
                <input type="text" />
                <label>Email</label>
            </div>
            <div className="contact__form--item">
                <textarea name="Message" id="" cols="20" rows="5"></textarea>
                <label>Message</label>
            </div>
            <button>Submit</button>
            <p>
                By clicking on "submit" you agree to our Privacy Policy, Data
                Policy and Cookie Policy.
            </p>
        </div>
    );
}
