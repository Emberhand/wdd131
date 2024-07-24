// get dates for the footer
const currentyear = document.getElementById("currentyear")
currentyear.innerText = new Date().getFullYear();
const lastModified = document.getElementById("lastModified")
lastModified.innerText = new Date(document.lastModified);

const pages = [
    {
        title: "Activities",
        image: "images/bike.webp",
        text: "Lyman Lake is full of activities for people of all interests. It is connected to a large trail system that allows for ATVs, trail bikes, razors, and many other OHVs. The trail system is extensive, allowing for hours and hours of nonstop riding and exploring. Don't want to get all dirty? No sweat! The lake is the perfect temperature for aquatic activites: cold enough to refresh, but not so cold that you freeze! On the lake you can enjoy any sort of non-motorized aquatic equipment. You can swim off one of the two docks leading out into the lake as well. As for you anglers, you'll find plenty of fish waiting to be caught in the cold waters and plenty of firepits along the shores to cook them up and enjoy a nice dinner. There truly is something for everyone who is looking to get out of the house!"
      },
      {
        title: "Lodging",
        image: "images/lodgelyman.webp",
        text: "Lyman Lake has many options for lodging. Starting at the north end of the lake, you will be able to see the massive Lyman Lake Lodge, which is rentable and able to house parties of over twenty people! The lodge has a fireplace, a parking lot, and bathrooms nearby. If you want to go beyond the lodge, there are many cabins around the perimeter that will serve to expand the lodging of your group. The cabins enjoy the same amenities as the lodge and have a great view of the lake. Along the road into camp, you will find many campsites that cater to RVs and campers which are also available for rent throughout the summer. Haven't made a reservation? No problem! Our tent sites circle the entirety of the lake and are offered on a first-come first-serve basis!"
      }
]

const activitesButton = document.getElementById('activities');
const lodgingButton = document.getElementById('lodging');
const returnButton = document.getElementById('home');

activitesButton.addEventListener('click', displayActivities);
lodgingButton.addEventListener('click', displayLodging);
returnButton.addEventListener("click", () => {
    window.location.reload(true);
});

function clearBoxes() {
    document.getElementById('options').style.display = 'none';
}

function displayActivities() {
    clearBoxes();
    createInfoBox(pages.filter(pages => (pages.title) == "Activities"));
}

function displayLodging() {
    clearBoxes();
    createInfoBox(pages.filter(pages => (pages.title) == "Lodging"));
}

function createInfoBox(selectedPage) {
	document.querySelector(".res-grid").innerHTML = "";
	selectedPage.forEach(page => {
		let card = document.createElement("section");
		let title = document.createElement("h2");
		let img = document.createElement("img");
		let text = document.createElement("p");
		let button = document.createElement("div");

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

		document.querySelector(".res-grid").appendChild(card);
	}); }