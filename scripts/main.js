/* saisir une autre image dans le website qui s'affiche
en clickant sur l'image principale du site */
let myImage = document.querySelector('img');
myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/tunisia.jpg') {
      myImage.setAttribute('src', 'images/tunisia.jpg');
    } else {
      myImage.setAttribute('src', 'images/tunisia.jpg');
    }
});
//créer un bouton 
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
//en clickant sur le bouton il te demande le saisie de votre nom
function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Traveling is amazing, ' + myName;
  }

if (!localStorage.getItem('nom')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Traceling is cool, ' + storedName;
}

myButton.addEventListener('click', function() {
    setUserName();
  });