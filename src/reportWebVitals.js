// Function to report web vitals for performance monitoring
const reportWebVitals = onPerfEntry => {
    // Check if onPerfEntry is a function before proceeding
    if (onPerfEntry && onPerfEntry instanceof Function) {
      // Dynamically import the 'web-vitals' library
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        // Call the respective functions from the 'web-vitals' library and pass onPerfEntry as a callback
        getCLS(onPerfEntry);   // Cumulative Layout Shift
        getFID(onPerfEntry);   // First Input Delay
        getFCP(onPerfEntry);   // First Contentful Paint
        getLCP(onPerfEntry);   // Largest Contentful Paint
        getTTFB(onPerfEntry);  // Time to First Byte
      });
    }
  };
  
  // Export the reportWebVitals function as the default export
  export default reportWebVitals;
  