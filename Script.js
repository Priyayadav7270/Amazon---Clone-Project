// SEARCH
let searchInput = document.querySelector(".search-input");
let searchBtn = document.querySelector("#searchBtn");
let boxes = document.querySelectorAll(".box");

searchBtn.addEventListener("click", function () {

    let searchText = searchInput.value.trim().toLowerCase();

    if (searchText === "") {
        alert("Please enter something to search!");
        return;
    }

    let found = false;

    boxes.forEach(function (box) {

        let productName = box.querySelector("h2").innerText.toLowerCase();

        if (productName.includes(searchText)) {
            box.style.display = "block";
            found = true;
        } else {
            box.style.display = "none";
        }

    });

    if (!found) {
        alert("Product/category not found!");
    }

});
