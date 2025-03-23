window.addEventListener('scroll', function(event) {
    const header = document.querySelector('header');
    const span = document.querySelector('header span');

    if (window.scrollY === 0) {
        header.style.height = '6rem'; 
        span.style.lineHeight = '2.1rem'; 
    } else {
        header.style.height = '5rem';  // Adjust as needed
        span.style.lineHeight = '1.3rem';
    }
});