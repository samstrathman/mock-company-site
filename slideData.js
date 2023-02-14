const data = [
    {
        'img': './assets/company1.jpg',
        'name': 'This Company' 
    },
    {
        'img': './assets/company2.jpg',
        'name': 'That Company' 
    },
    {
        'img': './assets/company3.jpg',
        'name': 'Another Company' 
    },
    {
        'img': './assets/company4.jpg',
        'name': 'Best Company' 
    }
];

data.map((i) => {
    let img = document.createElement('img');
    img.src = i.img;
    img.className = 'slideshow-img';
    document.getElementById('slide-container').appendChild(img);
})

var slideIndex = 1;
showDivs(slideIndex);
                        
function plusDivs(n) {
    showDivs(slideIndex += n);
}
                        
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slideshow-img");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}

/*
    let index = 0;

    //set company name
    document.getElementById('company-name').innerText = data[index].name;
    //set image
    let imgNode = document.createElement('img');
    //imgNode.src = data[index].src;
    //imgNode.className = 'slideshow-img';
    //document.getElementById('display-box').appendChild(node);


/*
const para = document.createElement("p");
    const node = document.createTextNode("This is new.");
    para.appendChild(node);
    
    const element = document.getElementById("div1");
    element.appendChild(para);
    
    console.log("hi");
    */

