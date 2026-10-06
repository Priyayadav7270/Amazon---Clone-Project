// SEARCH
let searchInput = document.querySelector(".search-input");
let searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", function () {

    let searchText = searchInput.value.trim();

    if (searchText === "") {
        alert("Please enter something to search!");
    } else {
        alert("You searched for: " + searchText);
    }

});


// CART
let cartCount = 0;

let cartBtn = document.querySelector("#cartBtn");
let cartNumber = document.querySelector("#cartCount");

cartBtn.addEventListener("click", function () {

    cartCount++;

    cartNumber.innerText = cartCount;

    alert("Product added to cart!");

});


// SEE MORE
let seeMore = document.querySelectorAll(".box-content p");

seeMore.forEach(function(item) {

    item.addEventListener("click", function() {

        alert("More products are coming soon!");

    });

});


// BACK TO TOP
let backToTop = document.querySelector("#backToTop");

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});