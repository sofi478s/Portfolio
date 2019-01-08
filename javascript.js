window.addEventListener("load", sidenVises);

let vinderMusik = false;
let taberMusik = false;

function sidenVises() {
	console.log("Siden er loadet");

	document.querySelector("#vindermusik_klik").addEventListener("click", klikketVinderBillede);

	document.querySelector("#tabermusik_klik").addEventListener("click", klikketTaberBillede);

}

function klikketVinderBillede() {
	console.log("Klikket på vinderbillede");
	if (vinderMusik == true) {
		vinderMusik = false;
		vinderMusicOff();


	} else {
		vinderMusik = true;
		vinderMusicOn();

	}
}

function vinderMusicOff() {
	console.log("vinderMusicOff");
	document.querySelector("#musik_vinder").pause()
}

function vinderMusicOn() {
	console.log("vinderMusicOn");
	document.querySelector("#musik_vinder").play();

}


function klikketTaberBillede() {
	console.log("Klikket på taberbillede");
	if (taberMusik == true) {
		taberMusik = false;
		taberMusicOff();


	} else {
		taberMusik = true;
		taberMusicOn();

	}
}

function taberMusicOff() {
	console.log("taberMusicOff");
	document.querySelector("#musik_taber").pause()
}

function taberMusicOn() {
	console.log("taberMusicOn");
	document.querySelector("#musik_taber").play();

}
