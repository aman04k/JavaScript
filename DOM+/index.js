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

let links = document.querySelectorAll('a');
let thirdLink = links[2];

thirdLink.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('maza aaya, accha lga');
});


