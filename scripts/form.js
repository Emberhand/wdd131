// get dates for the footer
const currentyear = document.getElementById("currentyear")
currentyear.innerText = new Date().getFullYear();
const lastModified = document.getElementById("lastModified")
lastModified.innerText = new Date(document.lastModified);

const products = [
    {
      id: fc-1888,
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: fc-2050,
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: fs-1987,
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: ac-2000,
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: jj-1969,
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  function createInfoBox(selectedPage) {
	document.querySelector(".res-grid").innerHTML = "";
	selectedPage.forEach(page => {
		let title = document.createElement("h2");

        card.setAttribute("class", "card")
		title.textContent = page.title;
        img.setAttribute("src", page.image);
		img.setAttribute("alt", `${page.title}`);
		img.setAttribute("loading", "lazy");
		text.textContent = page.text;
		button.innerHTML = `<div class="button">
                        <button onClick="window.location.reload();">Return</button>
                    </div>`;


		card.appendChild(title);
		card.appendChild(img);
		card.appendChild(text);
		card.appendChild(button);