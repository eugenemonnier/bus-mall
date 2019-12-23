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
var prevButton = document.getElementById('prev-button');
var nextButton = document.getElementById('next-button');
var graphIndex = 0;

// add event listeners for previous and next buttons
prevButton.addEventListener('click', prevGraph);
nextButton.addEventListener('click', nextGraph);

// switch statement to render render various graphs
function switchGraph() {
  switch(graphIndex){
  case 0:
    document.getElementById('results-chart').style.visibility = 'visible';
    document.getElementById('results-chart').style.height = '530px';
    document.getElementById('results-pie').style.visibility = 'hidden';
    document.getElementById('results-pie').style.height = '0px';
    document.getElementById('percentage-chart').style.visibility = 'hidden';
    document.getElementById('percentage-chart').style.height = '0px';
    break;
  case 1:
    document.getElementById('results-chart').style.visibility = 'hidden';
    document.getElementById('results-chart').style.height = '0px';
    document.getElementById('results-pie').style.visibility = 'hidden';
    document.getElementById('results-pie').style.height = '0px';
    document.getElementById('percentage-chart').style.visibility = 'visible';
    document.getElementById('percentage-chart').style.height = '530px';
    break;
  case 2:
    document.getElementById('results-chart').style.visibility = 'hidden';
    document.getElementById('results-chart').style.height = '0px';
    document.getElementById('results-pie').style.visibility = 'visible';
    document.getElementById('results-pie').style.height = '530px';
    document.getElementById('percentage-chart').style.visibility = 'hidden';
    document.getElementById('percentage-chart').style.height = '0px';
    break;
  default:
    //do nothing
  }
}

// set graph to previous graph and jump to prev anchor
function prevGraph() {
  if(graphIndex === 0) {
    graphIndex = 2;
  } else {
    graphIndex--;
  }
  switchGraph();
  location.href = '#prev-button';
}

// set graph to next graph and jump to next anchor
function nextGraph() {
  if(graphIndex === 2) {
    graphIndex = 0;
  } else {
    graphIndex++;
  }
  switchGraph();
  location.href = '#next-button';
}

// Product constructor
function GetProducts(name, imageUrl, viewed = 0, score = 0, selected = 0, barColor = makeRgbColor()) {
  this.name = name;
  this.imageUrl = imageUrl;
  this.viewed = viewed;
  this.score = score;
  this.selected = selected;
  this.barColor = barColor;
  this.percentageScore = 0;
  allProducts.push(this);
}

// displays text results in <aside>
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
// generates random number between 0 - 255
function randomColorGen() {
  return Math.round(Math.random() * 255);
}
// returns concat string of RGB value
function makeRgbColor(){
  return `rgba(${randomColorGen()}, ${randomColorGen()}, ${randomColorGen()}, 1)`;
}

// store allProducts to localStorage
function storeProducts(){
  localStorage.setItem('allProductsString', JSON.stringify(allProducts));
}

// retrieve localStorage and build allProducts
function getProducts(){
  var retrievedProductsParsed = JSON.parse(localStorage.getItem('allProductsString'));
  for(var i = 0; i < retrievedProductsParsed.length; i++) {
    new GetProducts(
      retrievedProductsParsed[i].name, retrievedProductsParsed[i].imageUrl,
      retrievedProductsParsed[i].viewed,
      retrievedProductsParsed[i].score,
      retrievedProductsParsed[i].selected,
      retrievedProductsParsed[i].barColor);
  }
}
// build allProducts array
// if localStorage is empty
if (localStorage.getItem('allProductsString') === null) {
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
  // if localStorage has key allProductsString
} else {
  getProducts();
}

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
    document.getElementById('select-graph').style.visibility = 'visible';
    renderChart();
  }
  if (totalClicks < numOfRounds - 1) {
    genRandomNum();
    displayImages();
  }
  storeProducts();
  totalClicks++;
}

// creates an array of values specified by argument entered for prop
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
  // eslint-disable-next-line no-undef
  new Chart(percentageChart.getContext('2d'),{
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
  // eslint-disable-next-line no-undef
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
