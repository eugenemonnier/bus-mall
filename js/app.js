
// Global variables
var allProducts = [];
var optionOne = 0;
var optionTwo = 1;
var optionThree = 2;
var totalClicks = 0;
var randoOne, randoTwo, randoThree;
var productImage = document.getElementsByTagName('img');

// Product constructor
function GetProducts(name, imageUrl) {
  this.name = name;
  this.imageUrl = imageUrl;
  this.score = 0;
  allProducts.push(this);
}

// build allProducts array
new GetProducts('R2D2 Luggage', 'img/bag.jpg');
new GetProducts('Banana Slicer', 'img/banana.jpg');
new GetProducts('Toilet Stant', 'img/bathroom.jpg');
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
// debugger;
// Generate random number be 0-19
function genRandomNum() {
  randoOne = Math.floor(Math.random() * 20);
  while (randoOne === prevRandoOne || randoOne === prevRandoTwo || randoOne === prevRandoThree) {
    randoOne = Math.floor(Math.random() * 20);
  }
  var prevRandoOne = randoOne;
  randoTwo = Math.floor(Math.random() * 20);
  while (randoTwo === prevRandoOne || randoTwo === prevRandoTwo || randoTwo === prevRandoThree || randoTwo === randoOne) {
    randoTwo = Math.floor(Math.random() * 20);
  }
  var prevRandoTwo = randoTwo;
  randoThree = Math.floor(Math.random() * 20);
  while (randoThree === prevRandoOne || randoThree === prevRandoTwo || randoThree === prevRandoThree || randoThree === randoOne || randoThree === randoTwo){
    randoThree = Math.floor(Math.random() * 20);
  }
  var prevRandoThree = randoThree;
}

genRandomNum();
// Set product images 1-3
productImage[1].src = allProducts[randoOne].imageUrl;
productImage[2].src = allProducts[randoTwo].imageUrl;
productImage[3].src = allProducts[randoThree].imageUrl;
