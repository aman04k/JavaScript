//////addEventListener////

// document.addEventListener('click', function(){
//     console.log ('I click on the Page');
// });

// document.removeEventListener('click', function(){
//     console.log ('I click on the Page');
// });

// const content = document.querySelectorAll('#wraper') ;
// content.addEventListener('click', function( event){
//     console.log(event);
// })



/// The Default action 
let links = document.querySelectorAll('a');
let thirdLink = links[2];

thirdLink.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('maza aaya, accha lga');
});

let  myDev  = document.createElement('div');

for(let i=0; i<100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is Para ' + i;

    newElement.addEventListener('click', function(event) {
        console.log('I  have clicked on para');
    });

    myDev.appendChild(newElement);

}
document.body.appendChild(myDev);


