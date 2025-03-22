let firstParagraph = document.getElementById('first-paragraph');
let secondParagraph = document.getElementById('second-paragraph');
let thirdParagraph = document.getElementById('third-paragraph');
let button1 = document.getElementById('project-1');
let button2 = document.getElementById('project-2');
let button3 = document.getElementById('project-3');
let image1 = document.getElementById("project-1-image");
let image2 = document.getElementById("project-2-image");
let image3 = document.getElementById("project-3-image")

function showfirstParagraph() {
    firstParagraph.style.color = "black";
    image1.style.display = "block"
    hidesecondParagraph();
    hidethirdParagraph();
    button1.innerHTML = "V Encore";
    button1.removeEventListener('click', showfirstParagraph)
    button1.addEventListener('click', hidefirstParagraph)
}

function hidefirstParagraph() {
    firstParagraph.style.color = "transparent";
    image1.style.display = "none"
    button1.innerHTML = "> Encore";
    button1.removeEventListener('click', hidefirstParagraph)
    button1.addEventListener('click', showfirstParagraph)
}

function showsecondParagraph() {
    secondParagraph.style.color = "black";
    image2.style.display = "block";
    hidefirstParagraph();
    hidethirdParagraph();
    button2.innerHTML = "V Tea Cozy";
    button2.removeEventListener('click', showsecondParagraph)
    button2.addEventListener('click', hidesecondParagraph)
}

function hidesecondParagraph() {
    secondParagraph.style.color = "transparent";
    image2.style.display = "none"
    button2.innerHTML = "> Tea Cozy";
    button2.removeEventListener('click', hidesecondParagraph)
    button2.addEventListener('click', showsecondParagraph)
}

function showthirdParagraph() {
    thirdParagraph.style.color = "black";
    image3.style.display = "block";
    hidefirstParagraph();
    hidesecondParagraph();
    button3.innerHTML = "V Style Guide";
    button3.removeEventListener('click', showthirdParagraph)
    button3.addEventListener('click', hidethirdParagraph)
}

function hidethirdParagraph() {
    thirdParagraph.style.color = "transparent";
    image3.style.display = "none"
    button3.innerHTML = "> Style Guide";
    button3.removeEventListener('click', hidethirdParagraph)
    button3.addEventListener('click', showthirdParagraph)
 
}


button1.addEventListener('click', showfirstParagraph)
button2.addEventListener('click', showsecondParagraph)
button3.addEventListener('click', showthirdParagraph)