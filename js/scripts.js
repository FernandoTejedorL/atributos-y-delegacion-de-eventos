const rootStyles = document.documentElement.style;
const textElement = document.getElementById('text')
console.dir(textElement)

//podemos poner todos los data-x que queramos, nos servirá igual para acceder al
// elemento y la info la tenemos dentro del "dataset"

//const buttonPaperElement = document.getElementById('button-paper')
//const buttonRockElement = document.getElementById('button-rock')
//const buttonScissorsElement = document.getElementById('button-scissors')

//const viewdata = (event) => {
//console.log(event.target.dataset.value)
//}
//buttonPaperElement.addEventListener('click', viewdata);
//buttonRockElement.addEventListener('click', viewdata);
//buttonScissorsElement.addEventListener('click', viewdata);

// Delegación de eventos - Se pone todo lo que hay que delegar en un div
const buttonsElement = document.getElementById('buttons');

const viewdata2 = (event) => {
    console.log(event.target.dataset.value)
}
buttonsElement.addEventListener('click', viewdata2);
