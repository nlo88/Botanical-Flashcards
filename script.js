
console.log("CONNECTED")

var displayCardsArray = [
    {'name': 'Eucalyptus', 'img': '	https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Eucalyptus.jpg?raw=true',},
    {'name': 'Ginger', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/ginger.jpg?raw=true',},
    {'name': 'Elderberry', 'img': '	https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Elderberry.jpg?raw=true',},
    {'name': 'Chicory', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Chicory.jpg?raw=true',},
    {'name': 'Black-pepper', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/BlackPepper.jpg?raw=true',},
    {'name': 'Bay-Laurel', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/BayLaurel.jpg?raw=true',},
    {'name': 'Calendula', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Calendula.jpg?raw=true',},
    {'name': 'Lavender', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Lavender.jpg?raw=true',},
    {'name': 'Licorice', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Licorice.jpg?raw=true',},
    {'name': 'Valerian', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Valerian.jpg?raw=true',},
    
    {'name': 'Chamomile', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Chamomile.jpg?raw=true',},
    {'name': 'Arugula', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Arugula.jpg?raw=true',}, 
    {'name': 'Dill', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Dill.jpg?raw=true',},
    {'name': 'Basil', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Basil.jpg?raw=true',},
    {'name': 'Rosemary', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Rosemary.jpg?raw=true',},
    {'name': 'Cumin', 'img': '	https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Cumin.jpg?raw=true',},
    {'name': 'Parsley', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Parsley.jpg?raw=true',},
    {'name': 'Echinacea', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Echinacea.jpg?raw=true',},
    {'name': 'Fennel', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Fennel.jpg?raw=true',},
    {'name': 'Garlic', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Garlic.jpg?raw=true',},
    {'name': 'Oregano', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Oregano.jpg?raw=true',},
    
    {'name': 'Peppermint', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Peppermint.jpg?raw=true',},
    {'name': 'Plantain', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Plantain.jpg?raw=true',},
    {'name': 'Rose-Hip', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/RoseHip.jpg?raw=true',},
    {'name': 'Sage', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Sage.jpg?raw=true',},
    {'name': 'Star-Anise', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Star-Anise.jpg?raw=true',},
    {'name': 'Chive', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Chive.jpg?raw=true',},
    {'name': 'Thyme', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Thyme.jpg?raw=true',},
    {'name': 'Cilantro', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Cilantro.jpg?raw=true',},
    {'name' : 'Tarragon', 'img' : 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Taragon.jpg?raw=true',}
];
var indexCardsArray = [
    {'name': 'Parsley', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Parsley-Index.jpg?raw=true',},
    {'name': 'Arugula', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Arugula-Index.jpg?raw=true',},
    {'name': 'Basil', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Basil-Index.jpg?raw=true', },
    {'name': 'Bay-Laurel', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/BayLaurel-Index.jpg?raw=true',},
    {'name': 'Black-pepper', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/BlackPepper-Index.jpg?raw=true',},
    {'name': 'Calendula', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Calendula-Index.jpg?raw=true',},
    {'name': 'Rosemary', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Rosemary_index.jpg?raw=true',},
    {'name': 'Cilantro', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Cilantro-Index.jpg?raw=true',},
    {'name': 'Cumin', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Cumin-Index.jpg?raw=true',},
    {'name': 'Dill', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Dill_index.jpg?raw=true',},
    
    {'name': 'Echinacea', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Echinacea-Index.jpg?raw=true',},
    {'name': 'Elderberry', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Elderberry-Index.jpg?raw=true',},
    {'name': 'Eucalyptus', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Eucalyptus-Index.jpg?raw=true',},
    {'name': 'Fennel', 'img': '	https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Fennel-Index.jpg?raw=true',},
    {'name': 'Garlic', 'img': '	https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Garlic-Index.jpg?raw=true',},
    {'name': 'Lavender', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Lavender-Index.jpg?raw=true',},
    {'name': 'Licorice', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Licorice-Index.jpg?raw=true',},
    {'name': 'Oregano', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Oregano-Index.jpg?raw=true',},
    {'name': 'Chicory', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Chicory-Index.jpg?raw=true',},
    
    {'name': 'Peppermint', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/peppermint-index.jpg?raw=true',},
    {'name': 'Rose-Hip', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/RoseHip-Index.jpg?raw=true',},
    {'name': 'Sage', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/sage-Index.jpg?raw=true',},
    {'name': 'Star-Anise', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Star-Anise-Index.jpg?raw=true'},
    {'name': 'Chive', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Chive-Index.jpg?raw=true',},
    {'name': 'Thyme', 'img': '	https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Thyme-Index.jpg?raw=true',},
    {'name': 'Valerian', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Valerian-Index%20copy.jpg?raw=true',},
    {'name': 'Ginger', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Ginger-Index.jpg?raw=true',},
    {'name': 'Tarragon', 'img': 'https://github.com/nlo88/Botanical-Flashcards/blob/main/Images/Tarragon-Index.jpg?raw=true',}
];

// assign a variable name to section class = image-container
var target =document.getElementById('image-container');
// assign function to display images on the flecbox class name = cardPlacement
displayCardsArray.forEach(function(imgSrc){
    var newImg = document.createElement('img');
    newImg.src = imgSrc.img;
    target.appendChild(newImg)
})

const openModalIndex =document.querySelectorAll('[data-modal-target]')

openModalIndex.forEach( popIndex => {
    popIndex.addEventListener('click',() => {
        const modal = document.querySelector(popIndex.dataset.modalTarget)
            })
    })
   
// //duplicate displayCartArray 
// var gameGrid = displayCardsArray.concat(displayCardsArray);

// // Random game grid on each load
// gameGrid.sort(function() {
//     return 0.5 -Math.random();
// })


// var game = document.getElementById('game-board');
// // create a section element and assign it to the variable grid
// var grid =document.createElement('section');
// // give a section element a class of a grid
// grid.setAttribute('class', 'grid');
// //apend the grid section to the game board game inside the div
// game.appendChild(grid)

// // set count to 0
// var count = 0;

// loop our items in array
// for ( i=0; i< displayCardsArray.length; i++ ) {
// // create a div element and assign to each variable / cards
// var card = document.createElement('div');
// // apply the cards to the div
// card.classList.add('card');
// // apply the background image of the div to the cards array
// card.dataset.name = gameGrid[i].name;
// // in this case another array (index card)
// card.style.backgroundImage = `url(${gameGrid[i].img})`;
// // append the div the the grid section
// grid.appendChild(card);
// };

// // add event listener to grid
// grid.addEventListener('click', function(event) {
//     //declare varribale to target our clicked card
//     var clicked = event.target;
//     // do not allow the grid section itself to be selected
//     // only select divs inside the grid
//     if(clicked.nodeName === 'SECTION'){
//         return;
//     }
//     // // // we only want to add 'selected' class if the current count is less than 2
//     if (count < 2) {
//         count++;
//     }
//     // add selected class
//     clicked.classList.add('selected');
// });

