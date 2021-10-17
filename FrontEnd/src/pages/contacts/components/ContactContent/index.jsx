import React from 'react';
import ContactForm from './components/ContactForm';
import ContactMap from './components/ContactMap';

export default function ContactContent() {
    return (
        <div className="contact__content--container">
            <ContactMap></ContactMap>
            <ContactForm></ContactForm>
        </div>
    );
}
