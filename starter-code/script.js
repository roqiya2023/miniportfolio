const slides = document.querySelectorAll('.sliderimg img');
const prevButtton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlideIndex = 0;
console.log(slides)


function showSlide(index){
    slides.forEach((slide,i)=>{
        slide.classList.toggle('active', i === index);
    })
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
   showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

prevButtton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

