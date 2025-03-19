let firstParagraph = document.getElementById('first-paragraph');
let secondParagraph = document.getElementById('second-paragraph');
let thirdParagraph = document.getElementById('third-paragraph');
let button1 = document.getElementById('project-1');
let button2 = document.getElementById('project-2');
let button3 = document.getElementById('project-3');

function showfirstParagraph() {
    firstParagraph.style.display = "block";
    hidesecondParagraph();
    hidethirdParagraph();
    button1.innerHTML = "V Encore";
    button1.removeEventListener('click', showfirstParagraph)
    button1.addEventListener('click', hidefirstParagraph)
}

function hidefirstParagraph() {
    firstParagraph.style.display = "none";
    button1.innerHTML = "> Encore";
    button1.removeEventListener('click', hidefirstParagraph)
    button1.addEventListener('click', showfirstParagraph)
}

function showsecondParagraph() {
    secondParagraph.style.display = "block";
    hidefirstParagraph();
    hidethirdParagraph();
    button2.innerHTML = "V Tea Cozy";
    button2.removeEventListener('click', showsecondParagraph)
    button2.addEventListener('click', hidesecondParagraph)
}

function hidesecondParagraph() {
    secondParagraph.style.display = "none";
    button2.innerHTML = "> Tea Cozy";
    button2.removeEventListener('click', hidesecondParagraph)
    button2.addEventListener('click', showsecondParagraph)
}

function showthirdParagraph() {
    thirdParagraph.style.display = "block";
    hidefirstParagraph();
    hidesecondParagraph();
    button3.innerHTML = "V Project 3";
    button3.removeEventListener('click', showthirdParagraph)
    button3.addEventListener('click', hidethirdParagraph)
}

function hidethirdParagraph() {
    thirdParagraph.style.display = "none";
    button3.innerHTML = "> Project 3";
    button3.removeEventListener('click', hidethirdParagraph)
    button3.addEventListener('click', showthirdParagraph)
 
}


button1.addEventListener('click', showfirstParagraph)
button2.addEventListener('click', showsecondParagraph)
button3.addEventListener('click', showthirdParagraph)