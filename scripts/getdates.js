const currentyear = document.getElementById("currentyear")

currentyear.innerText = new Date().getFullYear();

const lastModified = document.getElementById("lastModified")

lastModified.innerText = new Date(document.lastModified);