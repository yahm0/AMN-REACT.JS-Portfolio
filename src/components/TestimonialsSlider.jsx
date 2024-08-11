import React from 'react';
import Slider from 'react-slick';
import '../styles/TestimonialsSlider.css';

function TestimonialsSlider() {
    // Slider settings
    const settings = {
        dots: true,              // Display navigation dots below the slider. Each dot represents a slide and allows the user to navigate to a specific slide.
        infinite: true,          // Enable infinite scrolling. When the last slide is reached, the slider will seamlessly transition back to the first slide.
        speed: 5000,             // The duration of the transition between slides in milliseconds. Here, 2000ms means it takes 2 seconds to complete a slide transition, providing a smooth and slower scrolling effect.
        slidesToShow: 1,         // Number of slides to display at one time. Set to 1 to show only one testimonial at a time.
        slidesToScroll: 1,       // Number of slides to scroll through at one time. Set to 1 so each click or autoplay event scrolls through one slide.
        autoplay: true,          // Enable automatic scrolling through slides. The slider will automatically progress to the next slide after the delay specified in autoplaySpeed.
        autoplaySpeed: 5000,    // Time delay in milliseconds before automatically transitioning to the next slide. Set to 15000ms (15 seconds) to allow the user ample time to read each testimonial.
        cssEase: 'linear',       // Defines the CSS easing function to apply to the transition effect between slides. 'linear' creates a consistent, steady transition speed without acceleration or deceleration.
        pauseOnHover: true,      // Pause the autoplay when the user hovers over the slider. This allows the user to take more time reading a testimonial without being interrupted by an automatic slide transition.
    };

    // Testimonials data
    const testimonials = [
        {
            name: 'Landon Beard',
            quote: `Starting my first IT job under Adam's guidance has been an incredible journey. 
                    He taught me the ropes with patience and precision, making complex systems seem manageable. 
                    His unwavering support and clear instructions helped me grow into my position with ease. 
                    Adam's expertise and leadership turned our service desk into a model of efficiency. 
                    He’s a true leader who inspires confidence and camaraderie in every project. 
                    I couldn’t have asked for a better mentor to start my career.`,
            role: 'IT Specialist at Stan Weaver.', // Role of the person giving the testimonial
        },
    ];

    // Return JSX to render the slider
    return (
        <div className="testimonials-slider">
            <h2>Testimonials</h2>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <p>"{testimonial.quote}"</p>  {/* Display the testimonial quote */}
                        <h4>- {testimonial.name}</h4>  {/* Display the name of the person giving the testimonial */}
                        <h5>{testimonial.role}</h5>    {/* Display the role/title of the person */}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default TestimonialsSlider;
