// get dates for the footer
const currentyear = document.getElementById("currentyear")
currentyear.innerText = new Date().getFullYear();
const lastModified = document.getElementById("lastModified")
lastModified.innerText = new Date(document.lastModified);

const products = [
    {
        id: fc - 1888,
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: fc - 2050,
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: fs - 1987,
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: ac - 2000,
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: jj - 1969,
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const dropbox = document.getElementById("products");

for (var i = 0; i < products.length; i++) {
    var option = document.createElement('option');
    option.setAttribute("value", products[i].id);
    option.setAttribute("name", `${products[i].name}`);
    dropbox.appendChild(option);
}