//Stuff for scroll animations
window.addEventListener(
    "scroll",
    () => {
        //create the --scroll variable for the 3 rectangles that slide across the screen
        document.body.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
        //create the --scroll-fade variable for all the animations that handle the color shifts
        document.body.style.setProperty(
            "--scroll-fade",
            (window.pageYOffset - document.getElementById('works-section').offsetHeight * 1.95) / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);

//The rest of this code is for handling the elongating rectangle animation
//listen for scroll event and call animate function
document.addEventListener('scroll', animate);

//get the element to animate
let bar = document.getElementById('ten');

//animate element when it is in view
function animate() {
    if (inView(bar)) {
        // element is in view, add class to element
        bar.classList.add('elongate');
    }
}

//check if element is in view
function inView(element) {
    var elementHeight = element.clientHeight;
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;
  
    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > elementPosition) {
        return true;
    }
    return false;
}
