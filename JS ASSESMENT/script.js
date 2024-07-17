let slideIndex = 1;

// Function to show a specific slide
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Wrap around the slides if the index is out of bounds
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
   


    // Hide all slides
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

        // console screen display
        console.clear();
        console.log(`current slide: ${slideIndex}`);
 }
    

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        
        
    }
    
    // Show the current slide and add active class to the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
   
    
}

// Function to change the slide when clicking next/prev buttons
function changeSlide(n) {
    showSlides(slideIndex += n);
   
    
}

// Function to display a specific slide when a dot is clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
   
   
}

// Initialize the slider by showing the first slide
showSlides(slideIndex);
