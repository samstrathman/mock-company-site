//Stuff for scroll animation
window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);

//listen for scroll event and call animate function
document.addEventListener('scroll', animate);

//Stuff to trigger animation when it's in view
//get the element to animate
var element = document.getElementById('ten');
var elementHeight = element.clientHeight;

//animate element when it is in view
function animate() {
    // is element in view?
    if (inView()) {
        // element is in view, add class to element
        element.classList.add('elongate');
    }
}


//check if element is in view
function inView() {
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



//animate the background color shift and logo and hamburger menu
let worksSection = document.getElementById('works-section');
//inView(worksSection).on('enter', function(el){
//  var color = el.attributes('data-background-color');
//  console.log(color);
//})

inView(worksSection).on('enter', console.log('hi'));

