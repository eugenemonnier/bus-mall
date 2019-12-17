// Global variables
var allProducts = [];
var optionOne = 0;
var optionTwo = 1;
var optionThree = 2;

// Product constructor
function getProducts(name, imageUrl) {
  this.name = name;
  this.imageUrl = imageUrl;
  this.score = 0;
  allProducts.push(this);
}

// build allProducts array
new getProducts('R2D2 Luggage', 'img/bag.jpg');
new getProducts('Banana Slicer', 'img/banana.jpg');
new getProducts('Toilet Stant', 'img/bathroom.jpg');
new getProducts('Open-Toed Rain Boots', 'img/boots.jpg');
new getProducts('Breakfast Station', 'img/breakfast.jpg');
new getProducts('Meatball Bubble Gum', 'img/bubblegum.jpg');
new getProducts('Concave Ass Chair', 'img/chair.jpg');
new getProducts('Cthulu Figurine', 'img/cthulu.jpg');
new getProducts('Dog Muzzle - Duck', 'img/dog-duck');
new getProducts('Can o\' Dragon Meat', 'img/dragon.jpg');
new getProducts('Pen Cap Utensils', 'img/pen.jpg');
new getProducts('Pet Sweep Dog Shoes', 'img/pet-sweep.jpg');
new getProducts('Pizza Scissors', 'img/scissors.jpg');
new getProducts('Man-Eating Shark Sleeping Bag', 'img/shark.jpg');
new getProducts('Sweeping Baby Onsie', 'img/sweep.png');
new getProducts('Gutted Tauntaun Sleeping Bag', 'img/tauntaun.jpg');
new getProducts('Can o\' Unicorn Meat', 'img/unicorn.jpg');
new getProducts('Tentacle USB Drive 128MB', 'img/usb.jpg');
new getProducts('Self-Watering Water Can', 'img/water-can.jpg');
new getProducts('Smell This Wine Glass', 'img/wine-glass.img');
