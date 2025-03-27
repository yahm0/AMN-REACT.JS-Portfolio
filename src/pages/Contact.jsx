import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact_us_green">
      <div className="responsive-container-block big-container">
        <div className="responsive-container-block container">
          <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b-2">
            <div className="form-box">
              <div className="container-block form-wrapper">
                <div className="head-text-box">
                  <p className="text-blk contactus-head">
                    Contact Me
                  </p>
                  <p className="text-blk contactus-subhead">
                    I'd love to hear from you about potential opportunities, collaborations, or any questions you may have.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10" id="ifgi">
            <div className="container-box">
              <div className="text-content">
                <p className="text-blk contactus-head">
                  Get in Touch
                </p>
                <p className="text-blk contactus-subhead">
                  Feel free to reach out through any of the following methods
                </p>
              </div>
              <div className="workik-contact-bigbox">
                <div className="workik-contact-box">
                  <div className="phone text-box">
                    <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg" alt="Phone" />
                    <p className="contact-text">
                      +1 (813) 743-5217
                    </p>
                  </div>
                  <div className="address text-box">
                    <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg" alt="Email" />
                    <p className="contact-text">
                      stnt190@outlook.com
                    </p>
                  </div>
                  <div className="mail text-box">
                    <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg" alt="Location" />
                    <p className="contact-text">
                      Tampa, FL
                    </p>
                  </div>
                </div>
                <div className="social-media-links">
                  {/* <a href="https://github.com/">
                    <img className="social-svg" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style={{ width: "24px", height: "24px" }} />
                  </a>
                  <a href="https://linkedin.com/">
                    <img className="social-svg" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={{ width: "24px", height: "24px" }} />
                  </a>
                  <a href="https://stackoverflow.com/">
                    <img className="social-svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png" alt="Stack Overflow" style={{ width: "24px", height: "24px" }} />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
