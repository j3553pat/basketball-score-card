let homesideEl = document.getElementById("homeside");
let guestsideEl = document.getElementById("guestside")

let resetEl = document.getElementById("reset");;


// -------- HOME SCORE AND BUTTONS --------
function plus1Btn() {
    homesideEl.textContent++;
}

function plus2Btn() {
    homesideEl.textContent = Number(homesideEl.textContent) + 2;
}

function plus3Btn() {
    homesideEl.textContent = Number(homesideEl.textContent) + 3
}

function resethome() {
    homesideEl.textContent = 0

}


// --------  GUEST SCORE AND BUTTONS --------
function plus1Gbtn() {
    guestsideEl.textContent++;
}

function plus2Gbtn() {
guestsideEl.textContent = Number(guestsideEl.textContent) + 2;
}

function plus3Gbtn() {
    guestsideEl.textContent = Number(guestsideEl.textContent) + 3;
}

function resetguest() {
    guestsideEl.textContent = 0
   
}

