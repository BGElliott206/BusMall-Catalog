/* global Product, Cart */
'use strict';
// Set up an empty cart for use on this page.
var cart = new Cart([]);
// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {

    var optionEl = document.createElement('option');
    optionEl.value = Product.allProducts[i].name;
    optionEl.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionEl);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  addSelectedItemToCart(event);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  var selectedItem = document.getElementById('items').value;

  var desiredQuantity = document.getElementById('quantity').value;

  cart.addItem(selectedItem, desiredQuantity);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {}
var counter = 0;
function updateCounter() {
  counter += parseInt(document.getElementById('quantity').value);
  var spanEl = document.getElementById('itemCount');
  spanEl.textContent = counter;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  var previewList = document.getElementById('cartContents');
  var liElement = document.createElement('li');
  liElement.style.listStyle = 'none';
  liElement.textContent = `${document.getElementById('items').value}: ${document.getElementById('quantity').value}`;
  previewList.appendChild(liElement);
}

// Set up the "submit" event listener on the form.