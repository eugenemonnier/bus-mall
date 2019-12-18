'use strict';

// Global variables
var allProducts = [];
var totalClicks = 0;
var numOfRounds = 25;
var randoOne, randoTwo, randoThree, prevRandoOne, prevRandoTwo, prevRandoThree;
var productImage = document.getElementsByTagName('img');
var resultsChart = document.getElementById('results-chart');
var percentageChart = document.getElementById('percentage-chart');
var resultsPie = document.getElementById('results-pie');
var lineHolder = document.getElementById('final-results');

// Product constructor
function GetProducts(name, imageUrl) {
  this.name = name;
  this.imageUrl = imageUrl;
  this.viewed = 0;
  this.score = 0;
  this.selected = false;
  this.barColor = makeRgbColor();
  this.percentageScore = 0;
  allProducts.push(this);
}

GetProducts.prototype.displayResults = function() {
  if(this.selected === true) {
    var newLi = document.createElement('li');
    newLi.textContent = `${this.name} had ${this.score} votes and was shown ${this.viewed} time(s).`;
    lineHolder.appendChild(newLi);
  }
};

// Calculate the percentage of the number of times the item was picked compared to how many times the item was viewed
GetProducts.prototype.viewedVsSelected = function() {
  if (this.viewed === 0) {
    this.percentageScore = 0;
  } else {
    this.percentageScore = Math.round(this.score / this.viewed * 100);
  }
};

function randomColorGen() {
  return Math.round(Math.random() * 255);
}
function makeRgbColor(){
  return `rgba(${randomColorGen()}, ${randomColorGen()}, ${randomColorGen()}, 1)`;
}

// build allProducts array
new GetProducts('R2D2 Luggage', 'img/bag.jpg');
new GetProducts('Banana Slicer', 'img/banana.jpg');
new GetProducts('Toilet Stand', 'img/bathroom.jpg');
new GetProducts('Open-Toed Rain Boots', 'img/boots.jpg');
new GetProducts('Breakfast Station', 'img/breakfast.jpg');
new GetProducts('Meatball Bubble Gum', 'img/bubblegum.jpg');
new GetProducts('Concave Ass Chair', 'img/chair.jpg');
new GetProducts('Cthulu Figurine', 'img/cthulhu.jpg');
new GetProducts('Dog Muzzle - Duck', 'img/dog-duck.jpg');
new GetProducts('Can o\' Dragon Meat', 'img/dragon.jpg');
new GetProducts('Pen Cap Utensils', 'img/pen.jpg');
new GetProducts('Pet Sweep Dog Shoes', 'img/pet-sweep.jpg');
new GetProducts('Pizza Scissors', 'img/scissors.jpg');
new GetProducts('Man-Eating Shark Sleeping Bag', 'img/shark.jpg');
new GetProducts('Sweeping Baby Onsie', 'img/sweep.png');
new GetProducts('Gutted Tauntaun Sleeping Bag', 'img/tauntaun.jpg');
new GetProducts('Can o\' Unicorn Meat', 'img/unicorn.jpg');
new GetProducts('Tentacle USB Drive 128MB', 'img/usb.gif');
new GetProducts('Self-Watering Water Can', 'img/water-can.jpg');
new GetProducts('Smell This Wine Glass', 'img/wine-glass.jpg');

// Generate random number be 0-19
function genRandomNum() {
  randoOne = Math.floor(Math.random() * 20);
  while (randoOne === prevRandoOne || randoOne === prevRandoTwo || randoOne === prevRandoThree) {
    randoOne = Math.floor(Math.random() * 20);
  }
  prevRandoOne = randoOne;
  randoTwo = Math.floor(Math.random() * 20);
  while (randoTwo === prevRandoOne || randoTwo === prevRandoTwo || randoTwo === prevRandoThree || randoTwo === randoOne) {
    randoTwo = Math.floor(Math.random() * 20);
  }
  prevRandoTwo = randoTwo;
  randoThree = Math.floor(Math.random() * 20);
  while (randoThree === prevRandoOne || randoThree === prevRandoTwo || randoThree === prevRandoThree || randoThree === randoOne || randoThree === randoTwo){
    randoThree = Math.floor(Math.random() * 20);
  }
  prevRandoThree = randoThree;
}

// Set product images 1-3
function displayImages() {
  productImage[1].src = allProducts[randoOne].imageUrl;
  allProducts[randoOne].viewed++;
  productImage[2].src = allProducts[randoTwo].imageUrl;
  allProducts[randoTwo].viewed++;
  productImage[3].src = allProducts[randoThree].imageUrl;
  allProducts[randoThree].viewed++;
}
// add event listener to those image tags
for(var i = 1; i < productImage.length; i++) {
  productImage[i].addEventListener('click', picked);
}

// Function called when user clicks on image
// Adds to obj selected score
// renders new random images
// does't allow user to select more than 25 images
function picked() {
  if (totalClicks < numOfRounds) {
    if(event.srcElement.id === 'optionOne') {
      allProducts[randoOne].score++;
      allProducts[randoOne].selected = true;
    } else if(event.srcElement.id === 'optionTwo') {
      allProducts[randoTwo].score++;
      allProducts[randoTwo].selected = true;
    } else if(event.srcElement.id === 'optionThree') {
      allProducts[randoThree].score++;
      allProducts[randoThree].selected = true;
    }
  }
  if (totalClicks === numOfRounds - 1) {
    for(var i = 1; i < productImage.length; i++) {
      productImage[i].removeEventListener('click', picked);
    }
    for(i = 0; i < allProducts.length; i++) {
      allProducts[i].viewedVsSelected();
      allProducts[i].displayResults();
    }
    renderChart();
  }
  if (totalClicks < numOfRounds - 1) {
    genRandomNum();
    displayImages();
  }
  totalClicks++;
}

function getProductsArray (prop) {
  var gottenProp = [];
  for(var i = 0; i < allProducts.length; i++) {
    if(allProducts[i].selected === true) {
      gottenProp.push(allProducts[i][prop]);
    }
  }
  return gottenProp;
}
function renderChart() {
// eslint-disable-next-line no-undef
  new Chart(resultsChart,{
    type: 'bar',
    data: {
      labels: getProductsArray('name'),
      datasets: [{
        label: '# of Votes',
        data: getProductsArray('score'),
        backgroundColor: getProductsArray('barColor'),
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1,
          },
        }],
      },
    },
  });
  new Chart(percentageChart,{
    type: 'bar',
    data: {
      labels: getProductsArray('name'),
      datasets: [{
        label: '% of Times Picked vs Viewed',
        data: getProductsArray('percentageScore'),
        backgroundColor: getProductsArray('barColor'),
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1,
          },
        }],
      },
    },
  });
  new Chart(resultsPie, {
    type: 'doughnut',
    data: {
      labels: getProductsArray('name'),
      datasets: [
        {
          backgroundColor: getProductsArray('barColor'),
          data: getProductsArray('score'),
        }
      ],
    },
    options: {
      title: {
        display: true,
        text: 'Percentage of Vote',
      },
      animation: {
        onProgress: function(animation) {
          ProgressEvent.value = animation.animationObject.currentStep /
          animation.animationObject.numSteps;
        },
      },
    },
  });
}

genRandomNum();
displayImages();
