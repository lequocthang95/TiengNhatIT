import React from 'react';

export default function ContactMap() {
    return (
        <div className="contact__map">
            <h3>Contact Us</h3>
            <h2>Keep in touch</h2>
            <p>We'd love to talk about how we can help you.</p>
            <iframe
                title="My daily"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                width="500"
                height="350"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                className="contact__map--googleMap"
            ></iframe>
        </div>
    );
}
