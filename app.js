// import functions and grab DOM elements
const buttonOne = document.getElementById('cup1-btn');
const buttonTwo = document.getElementById('cup2-btn');
const buttonThree = document.getElementById('cup3-btn');
const imgOne = document.getElementById('cup-1-img');
const imgTwo = document.getElementById('cup-2-img');
const imgThree = document.getElementById('cup-3-img');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

// let state
let wins = 0;
let total = 0;
// set event listeners 
buttonOne.addEventListener('click', () => {
    // resetImages();
// increment total attempts
    total++;
// Use Math.random() to find out what cup is right
    const randomCupNumber = Math.floor(Math.random() * 3);

    if (randomCupNumber === 0) {

        wins++;

        imgOne.src = './assets/ball-in-cup.png';

    } else if (randomCupNumber === 1) {

        imgTwo.src = './assets/ball-in-cup.png';
    } else {

        imgThree.src = './assets/ball-in-cup.png';

    }
    // displayWinsLossesAndTotal();
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
