/* -------------------- Setup -------------------- */

// Preload transition stop

window.addEventListener("load", (event) => {
	document.body.classList.remove("preload");
	active_main();
});

// landing page on reload

function landingpage() {
	active_main();
	document.getElementById("mairies").scroll({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
}

/* -------------------- Design animations -------------------- */

// Highlight of the active link && moving the link indicator

function active_certificats() {
	document.getElementById("main").classList.remove("top_no_fade");
	document.getElementById("main").classList.add("back_fade_l");

	document.getElementById("contact").classList.remove("top_no_fade");
	document.getElementById("contact").classList.add("back_fade_r");

	document
		.getElementById("certificats")
		.classList.remove("back_fade_r", "back_fade_l");
	document.getElementById("certificats").classList.add("top_no_fade");

	document.getElementById("main_link").classList.remove("active_link");
	document.getElementById("main_link").style.pointerEvents = "auto";
	document.getElementById("certificats_link").classList.add("active_link");
	document.getElementById("certificats_link").style.pointerEvents = "none";
	document.getElementById("contact_link").classList.remove("active_link");
	document.getElementById("contact_link").style.pointerEvents = "auto";

	document.getElementById("link_indicator").classList.remove("main_indicator");
	document
		.getElementById("link_indicator")
		.classList.remove("contact_indicator");
	document
		.getElementById("link_indicator")
		.classList.add("certificats_indicator");
}

function active_contact() {
	document.getElementById("main").classList.remove("top_no_fade");
	document.getElementById("main").classList.add("back_fade_l");

	document
		.getElementById("certificats")
		.classList.remove("top_no_fade", "back_fade_r");
	document.getElementById("certificats").classList.add("back_fade_l");

	document.getElementById("contact").classList.remove("back_fade_r");
	document.getElementById("contact").classList.add("top_no_fade");

	document.getElementById("main_link").classList.remove("active_link");
	document.getElementById("main_link").style.pointerEvents = "auto";
	document.getElementById("certificats_link").classList.remove("active_link");
	document.getElementById("certificats_link").style.pointerEvents = "auto";
	document.getElementById("contact_link").classList.add("active_link");
	document.getElementById("contact_link").style.pointerEvents = "none";

	document
		.getElementById("link_indicator")
		.classList.remove("certificats_indicator");
	document.getElementById("link_indicator").classList.remove("main_indicator");
	document.getElementById("link_indicator").classList.add("contact_indicator");
}

function active_main() {
	document.getElementById("main").classList.remove("back_fade_l");
	document.getElementById("main").classList.add("top_no_fade");

	document.getElementById("contact").classList.remove("top_no_fade");
	document.getElementById("contact").classList.add("back_fade_r");

	document
		.getElementById("certificats")
		.classList.remove("top_no_fade", "back_fade_l");
	document.getElementById("certificats").classList.add("back_fade_r");

	document.getElementById("main_link").classList.add("active_link");
	document.getElementById("main_link").style.pointerEvents = "none";
	document.getElementById("certificats_link").classList.remove("active_link");
	document.getElementById("certificats_link").style.pointerEvents = "auto";
	document.getElementById("contact_link").classList.remove("active_link");
	document.getElementById("contact_link").style.pointerEvents = "auto";

	document
		.getElementById("link_indicator")
		.classList.remove("contact_indicator");
	document
		.getElementById("link_indicator")
		.classList.remove("certificats_indicator");
	document.getElementById("link_indicator").classList.add("main_indicator");
}

// Highlight of the regions

let cities = document.getElementsByClassName("city_link");

cities[0].classList.add("active_city"); // hightlight the first region on 1st load

let datas = document.getElementsByClassName("data");

datas[0].classList.add("active_data"); //
datas[1].classList.add("active_data"); // Highlight the 3 datas of the first region
datas[2].classList.add("active_data"); //

let imgs = document.getElementsByClassName("ground_img");
imgs[0].classList.remove("fade"); // display the first image region on 1st load

for (i = 0; i < cities.length; i++) {
	let city1 = cities[i];
	let data1 = datas[3 * i];
	let data2 = datas[3 * i + 1];
	let data3 = datas[3 * i + 2];
	let img = imgs[i];
	city1.onclick = function () {
		for (j = 0; j < cities.length; j++) {
			cities[j].classList.remove("active_city"); // remove the highlights of all regions
			imgs[j].classList.add("fade"); // make all background transparent
		}
		for (j = 0; j < datas.length; j++) {
			datas[j].classList.remove("active_data"); // remove the highlights of all the datas
		}
		img.classList.remove("fade"); //  Make the region's background visible
		city1.classList.add("active_city"); //
		data1.classList.add("active_data"); //  Highlights the click region and each of its data
		data2.classList.add("active_data"); //
		data3.classList.add("active_data"); //
	};
}

// Setting the date

const d = new Date();
const m = d.getMonth() + 1; // adding +1 because the count starts at 0
document.getElementById("date").innerHTML =
	d.getDate() + " / " + m + " / " + d.getFullYear();

// Setting the popup

document.getElementById("popup_naiss_btn").onclick = function () {
	document.getElementById("popup_naiss").classList.add("active_popup");
	document
		.getElementById("popup_naiss_btn")
		.classList.add("not_active_button");
	document.getElementById("popup_mari_btn").classList.add("not_active_button");
	document.getElementById("popup_dead_btn").classList.add("not_active_button");
	document.getElementById("connex_popup_btn").style.zIndex = 0;
	document.getElementById("flag").style.zIndex = 0;
};

document.getElementById("popup_mari_btn").onclick = function () {
	document.getElementById("popup_mari").classList.add("active_popup");
	document
		.getElementById("popup_naiss_btn")
		.classList.add("not_active_button");
	document.getElementById("popup_mari_btn").classList.add("not_active_button");
	document.getElementById("popup_dead_btn").classList.add("not_active_button");
	document.getElementById("connex_popup_btn").style.zIndex = 0;
	document.getElementById("flag").style.zIndex = 0;
};

document.getElementById("popup_dead_btn").onclick = function () {
	document.getElementById("popup_dead").classList.add("active_popup");
	document
		.getElementById("popup_naiss_btn")
		.classList.add("not_active_button");
	document.getElementById("popup_mari_btn").classList.add("not_active_button");
	document.getElementById("popup_dead_btn").classList.add("not_active_button");
	document.getElementById("connex_popup_btn").style.zIndex = 0;
	document.getElementById("flag").style.zIndex = 0;
};

document.getElementById("close_naiss").onclick = function () {
	document
		.getElementById("popup_naiss")
		.classList.replace("active_popup", "popup");
	document.getElementById("naiss_form").reset();
	document
		.getElementById("popup_naiss_btn")
		.classList.remove("not_active_button");
	document
		.getElementById("popup_mari_btn")
		.classList.remove("not_active_button");
	document
		.getElementById("popup_dead_btn")
		.classList.remove("not_active_button");
	document.getElementById("connex_popup_btn").style.zIndex = 1;
	document.getElementById("flag").style.zIndex = 1;
};

document.getElementById("close_mari").onclick = function () {
	document
		.getElementById("popup_mari")
		.classList.replace("active_popup", "popup");
	document.getElementById("mari_form").reset();
	document
		.getElementById("popup_naiss_btn")
		.classList.remove("not_active_button");
	document
		.getElementById("popup_mari_btn")
		.classList.remove("not_active_button");
	document
		.getElementById("popup_dead_btn")
		.classList.remove("not_active_button");
	document.getElementById("connex_popup_btn").style.zIndex = 1;
	document.getElementById("flag").style.zIndex = 1;
};

document.getElementById("close_dead").onclick = function () {
	document
		.getElementById("popup_dead")
		.classList.replace("active_popup", "popup");
	document.getElementById("dead_form").reset();
	document
		.getElementById("popup_naiss_btn")
		.classList.remove("not_active_button");
	document
		.getElementById("popup_mari_btn")
		.classList.remove("not_active_button");
	document
		.getElementById("popup_dead_btn")
		.classList.remove("not_active_button");
	document.getElementById("connex_popup_btn").style.zIndex = 1;
	document.getElementById("flag").style.zIndex = 1;
};

// User connection popup

document.getElementById("connex_popup_btn").onclick = function () {
	document.getElementById("connex_popup").classList.add("active_popup");
	document
		.getElementById("connex_popup_btn")
		.classList.add("not_active_button");
	document.getElementById("general").classList.add("not_active_button");
	document
		.getElementById("popup_naiss_btn")
		.classList.add("not_active_button");
	document.getElementById("popup_mari_btn").classList.add("not_active_button");
	document.getElementById("contact_form").classList.add("not_active_button");
	document.getElementById("popup_dead_btn").classList.add("not_active_button");
};

document.getElementById("close_connex").onclick = function () {
	document.getElementById("connex_popup").classList.remove("active_popup");
	document
		.getElementById("connex_popup_btn")
		.classList.remove("not_active_button");
	document.getElementById("general").classList.remove("not_active_button");
	document
		.getElementById("popup_naiss_btn")
		.classList.remove("not_active_button");
	document
		.getElementById("popup_mari_btn")
		.classList.remove("not_active_button");
	document
		.getElementById("contact_form")
		.classList.remove("not_active_button");
	document
		.getElementById("popup_dead_btn")
		.classList.remove("not_active_button");

	document.getElementById("connex_form").reset();
};
