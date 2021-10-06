const stickyHeader = document.querySelector('.header-sticky');
const toggleHeader = function() {
    let y = window.scrollY;
    if (y >= 800) {
        stickyHeader.className = "header-sticky show"
    } else {
        stickyHeader.className = "header-sticky hide"
    }
};

window.addEventListener("scroll", toggleHeader);

// book slider

(function(){
    const carousels = document.querySelectorAll('.book-slider-with-arrows');
    carousels.forEach(
       function(carousel) {
         carouselize(carousel);
       }
    );
})();


function carouselize(e) {
    const slider = e.querySelector('.book-display-container');
    const sliderWrapper = e.querySelector('.book-display');
    const sliderWrapperWidth = parseFloat(window.getComputedStyle(sliderWrapper).width);
    let sliderShift = 0;
    const bookCards = e.querySelectorAll('.book-card');
    const bookCardMarginR = parseInt(window.getComputedStyle(bookCards[0]).marginRight, 10);
    const bookCardSlot = bookCards[0].getBoundingClientRect().width + bookCardMarginR;
    let bookCardNum = 0;
    let bookCardVisable = (sliderWrapperWidth - (sliderWrapperWidth % bookCardSlot))/bookCardSlot;
    const nextBtn = e.querySelector('.book-slider-nav-arrow-right');
    const prevBtn = e.querySelector('.book-slider-nav-arrow-left');
    
    bookCards.forEach(
        function(bookCard) {
            bookCardNum++;
        }
    );

    nextBtn.addEventListener('click', moveRight);

    function moveRight() {
        if(sliderShift < bookCardNum - bookCardVisable) {
            sliderShift +=bookCardVisable;
            moveSlider();
            if(sliderShift > 0) {
                prevBtn.removeAttribute('disabled');
            }
        }
    }

    prevBtn.addEventListener('click', moveLeft);

    function moveLeft() {
        if(sliderShift > 0) {
            sliderShift-=bookCardVisable;
            moveSlider();
            if(sliderShift === 0) {
                prevBtn.setAttribute('disabled','');
            }    
        }
    }

    function moveSlider() {
            slider.style.transform = "translateX(-" + bookCardSlot*sliderShift + "px)"; 
    }
}



