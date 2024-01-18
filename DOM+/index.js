//////addEventListener////

// document.addEventListener('click', function(){
//     console.log ('I click on the Page');
// });

// document.removeEventListener('click', function(){
//     console.log ('I click on the Page');
// });

const content = document.querySelector('#wraper') ;
content.addEventListener('click', function( event){
    console.log(event);
})