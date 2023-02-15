const data = [
    {
        'id': 1,
        'img': './assets/company1.jpg',
        'name': 'This Company', 
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a. Velit ut tortor pretium viverra suspendisse potenti nullam.'
    },
    {
        'id': 2,
        'img': './assets/company2.jpg',
        'name': 'That Company', 
        'desc': 'Justo donec enim diam vulputate. Maecenas sed enim ut sem viverra aliquet eget sit.'
    },
    {
        'id': 3,
        'img': './assets/company3.jpg',
        'name': 'Another Company',
        'desc': 'Cursus turpis massa tincidunt dui ut. Accumsan tortor posuere ac ut.' 
    },
    {
        'id': 4,
        'img': './assets/company4.jpg',
        'name': 'Best Company',
        'desc': 'Ut porttitor leo a diam sollicitudin tempor id eu nisl. Vivamus arcu felis bibendum ut. Dictum sit amet justo donec enim. Viverra nam libero justo laoreet sit.' 
    }
];

//create all the img elements and give them a classname that will keep them hidden
data.map((i) => {
    let img = document.createElement('img');
    img.src = i.img;
    img.className = 'slideshow-img fade';
    document.getElementById('slide-container').appendChild(img);
})

var slideIndex = 1;
showDivs(slideIndex);
                        
function plusDivs(n) {
    showDivs(slideIndex += n);
}
                        
function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("slideshow-img");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    //make the slide visible 
    x[slideIndex-1].style.display = "block";  

    //set company name and description for that slide
    document.getElementById('company-name').innerText = data[slideIndex-1].name;
    document.getElementById('company-desc').innerText = data[slideIndex-1].desc;
    //Not yet working
    //document.getElementById('name-and-desc').classList.remove('fade');
    //document.getElementById('name-and-desc').classList.add('fade');
}


