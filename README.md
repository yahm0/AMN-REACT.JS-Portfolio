# Adam Nuccio's React.js Portfolio

A modern, responsive portfolio website built with React.js showcasing Adam Nuccio's technical expertise in Machine Learning Engineering, Cloud Architecture, Full Stack Development, and IT Management. Features an interactive design with project showcases, professional bio, contact functionality, and downloadable resume.

## Table of Contents

1. [Features](#1-features)
2. [Technologies Used](#2-technologies-used)
3. [Installation](#3-installation)
4. [Usage](#4-usage)
5. [Project Structure](#5-project-structure)
6. [Deployment](#6-deployment)
7. [Contributing](#7-contributing)
8. [Issues](#8-issues)
9. [License](#9-license)
10. [Acknowledgements](#10-acknowledgements)
11. [Environment Variables](#11-environment-variables)

## 1. Features

- **About Me Section**: Professional bio highlighting career achievements, profile picture, and technical disciplines (Machine Learning Engineering, Full Stack Development, IT Management, Cloud Architecture)
- **Portfolio Section**: Showcase of key projects including Atlas Ingest, Lyra Insight, Quant Analytics Notebook, and other technical implementations with GitHub repository links
- **Contact Section**: Functional contact form powered by EmailJS with phone, email, and location information
- **Resume Section**: Downloadable PDF resume (`Adam_Nuccio_Resume_MLE_2026.pdf`) with embedded viewer
- **Responsive Design**: Mobile-first design that works seamlessly across all device sizes
- **Social Media Integration**: GitHub and LinkedIn profile links in header and footer
- **Modern UI/UX**: Clean, professional design with hover effects and smooth transitions

## 2. Technologies Used

### Frontend
- **React** (18.2.0) - Main frontend framework
- **React Router DOM** (6.10.0) - Client-side routing and navigation
- **React Icons** (5.2.1) - Icon library for social media and UI elements
- **CSS3** - Custom styling with responsive design and animations

### Form Handling
- **EmailJS** (3.2.0) - Contact form functionality without backend server

### Development Tools
- **React Scripts** (5.0.1) - Build tooling and development server
- **ESLint** & **Prettier** - Code formatting and linting
- **Web Vitals** - Performance monitoring

### Deployment
- **Netlify** - Static site hosting and deployment

## 3. Installation

Make sure you have **Node.js 16.x or 18.x** installed before setting up the project.

1. Clone the repository:

```bash
git clone https://github.com/yahm0/AMN-REACT.JS-Portfolio.git
```

2. Navigate to the project directory:

```bash
cd AMN-REACT.JS-Portfolio
```

3. Install dependencies:

```bash
 npm install
```

4. Start the development server:

```bash
 npm start
```

**Note:** Opening `public/index.html` directly will display a blank page. Use `npm start` for local development.

## 4. Usage

Once the development server is running, you can view the portfolio in your browser at http://localhost:3000.

Navigate through the sections using the navigation bar:

- **About Me**: View Adam's professional photo, comprehensive career bio, and technical disciplines
- **Portfolio**: Explore featured projects including:
  - Atlas Ingest (Financial document processing pipeline)
  - Lyra Insight (RAG + Custom AI models)
  - Quant Analytics Notebook (Financial risk modeling)
  - Terminal Software Website
  - Book Search Engine
  - Infrastructure as Code examples
  - Machine Learning with SageMaker
- **Contact**: Send messages via functional contact form with EmailJS integration
- **Resume**: Download the latest resume PDF and view in embedded viewer

## 5. Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ContactForm.jsx  # Contact form with EmailJS integration
│   ├── Footer.jsx       # Footer with social media links
│   ├── Header.jsx       # Header with navigation and social icons
│   ├── Navigation.jsx   # Main navigation component
│   ├── Project.jsx      # Individual project card component
│   └── TestimonialsSlider.jsx
├── pages/              # Main page components
│   ├── AboutMe.jsx     # About section with bio and disciplines
│   ├── Contact.jsx     # Contact page wrapper
│   ├── Portfolio.jsx   # Portfolio showcase
│   └── Resume.jsx      # Resume display and download
├── styles/             # CSS stylesheets
│   ├── App.css         # Global application styles
│   ├── Contact.css     # Contact page styling
│   ├── Portfolio.css   # Portfolio grid and card styling
│   ├── Project.css     # Individual project styling
│   └── [other].css     # Component-specific styles
├── App.jsx             # Main application component
└── index.jsx           # Application entry point

public/
├── assets/
│   ├── imgs/           # Project images and profile photos
│   └── resume/         # Resume PDF files
└── index.html          # HTML template
```

## 6. Deployment

This project is deployed to Netlify. You can view it at [your-netlify-url.](https://main--adam-nuccio-portfolio.netlify.app/)

Steps to Deploy on Netlify

1. Create a new site on Netlify.
2. Connect your GitHub repository.
3. Set the build command to:

```bash
 npm run build
```

4. Set the publish directory to:

```bash
 build
```

5. Deploy the site.

## 7. Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.

2. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes and commit them:

```bash
git commit -m "Add your feature description"
```

4. Push to the branch:

```bash
git push origin feature/your-feature-name
```

5. Create a pull request.

## 8. Issues

If you encounter any issues or have suggestions, please create an issue in the GitHub repository.

## 9. License

This project is licensed under the MIT License. See the LICENSE file for details.

## 10. Acknowledgements

- [Create React App](https://create-react-app.dev/) - React application foundation
- [React Router](https://reactrouter.com/) - Client-side routing
- [EmailJS](https://www.emailjs.com/) - Contact form functionality
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Netlify](https://www.netlify.com/) - Static site hosting
- [Google Fonts](https://fonts.google.com/) - Typography resources

---

**Built with ❤️ by Adam Nuccio**

For more information about Adam's work and projects, visit the live portfolio or connect on [GitHub](https://github.com/yahm0) and [LinkedIn](https://www.linkedin.com/in/adam-nuccio/).

## 11. Environment Variables

This project uses EmailJS to handle contact form submissions. To set up the contact form functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up a service and email template
3. Create a `.env` file in the root directory with your EmailJS credentials:

```bash
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

4. Replace the placeholder values with your actual EmailJS credentials
5. The contact form will automatically use these environment variables for email delivery

**Note**: Never commit your `.env` file to version control. Add `.env` to your `.gitignore` file.
