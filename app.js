// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  // renderButtons();
  // renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  //you can also use getElementById
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.querySelector("#tomato");
  //you can also use getElementById
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
  } else {
    tomatoes.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.querySelector("#onion");
  //you can also use getElementById
  if (state.Onions) {
    onions.style.display = "inherit";
  } else {
    onions.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  //you can also use getElementById
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  let now = document.querySelector(".btn-patty")
  if(!state.Patty) {
    now.classList = 'button btn-patty inactive';
    document.getElementById('in-p').style.display = 'none';
  }
  if(state.Patty) {
    now.classList = 'button btn-patty active';
    document.getElementById('in-p').style.display = 'block';
  }
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  let now = document.querySelector(".btn-cheese")
  if(!state.Cheese) {
    now.classList = 'button btn-cheese inactive';
    document.getElementById('in-c').style.display = 'none';
  }
  if(state.Cheese) {
    now.classList = 'button btn-cheese active';
    document.getElementById('in-c').style.display = 'block';
  }
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  let now = document.querySelector(".btn-tomatoes")
  if(!state.Tomatoes) {
    now.classList = 'button btn-tomatoes inactive';
    document.getElementById('in-t').style.display = 'none';
  }
  if(state.Tomatoes) {
    now.classList = 'button btn-tomatoes active';
    document.getElementById('in-t').style.display = 'block';
  }
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  let now = document.querySelector(".btn-onions")
  if(!state.Onions) {
    now.classList = 'button btn-onions inactive';
    document.getElementById('in-o').style.display = 'none';
  }
  if(state.Onions) {
    now.classList = 'button btn-onions active';
    document.getElementById('in-o').style.display = 'block';
  }
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  let now = document.querySelector(".btn-lettuce")
  if(!state.Lettuce) {
    now.classList = 'button btn-lettuce inactive';
    document.getElementById('in-l').style.display = 'none';
  }
  if(state.Lettuce) {
    now.classList = 'button btn-lettuce active';
    document.getElementById('in-l').style.display = 'block';
  }
  renderAll();
};

function renderPrice(){
  var price = 40;
  if(state.Patty)
  price += 50
  if(state.Cheese)
  price += 40
  if(state.Lettuce)
  price += 50
  if(state.Onions)
  price += 30
  if(state.Tomatoes)
  price += 20
  document.getElementById('final-price').innerText = 'INR ' + price;
}

//Challenge 1 - Add/Remove the class active to the buttons based on state


//Challenge 2 - Render only the items selected in the ingredients board based on the state


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
