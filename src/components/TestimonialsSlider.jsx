import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/TestimonialsSlider.css';

function TestimonialsSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,          // Slow down the scrolling speed
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,       // Enable autoplay
        autoplaySpeed: 5000,  // Time in milliseconds before sliding to the next slide
        cssEase: 'linear',    // Ensure smooth linear transition
        pauseOnHover: true,   // Pause the autoplay when the user hovers over the slider
    };

    const testimonials = [
        {
            name: 'Landon Beard',
            quote: `Starting my first IT job under Adam's guidance has been an incredible journey. 
                    He taught me the ropes with patience and precision, making complex systems seem manageable. 
                    His unwavering support and clear instructions helped me grow into my position with ease. 
                    Adam's expertise and leadership turned our service desk into a model of efficiency. 
                    He’s a true leader who inspires confidence and camaraderie in every project. 
                    I couldn’t have asked for a better mentor to start my career.`,
            role: 'IT Specialist at Stan Weaver.',
        },
        {
            name: 'Jane Smith',
            quote: 'Adam is a highly skilled developer who consistently delivers top-quality work. I highly recommend him for any IT or development project.',
            role: 'CTO at Innovatech',
        },
        {
            name: 'John Doe',
            quote: 'Adam’s ability to lead and mentor his team is outstanding. He is an asset to any organization.',
            role: 'Director of IT at FutureTech',
        },
    ];

    return (
        <div className="testimonials-slider">
            <h2>Testimonials</h2>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <p>"{testimonial.quote}"</p>
                        <h4>- {testimonial.name}</h4>
                        <h5>{testimonial.role}</h5>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default TestimonialsSlider;
