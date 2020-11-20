window.onload = hide;
let car = 0;

function hide() {
    document.getElementById("alkatOS").style.display = "none";
    document.getElementById("alkatTS").style.display = "none";
    document.getElementById("alkatAÜ").style.display = "none";
}

function os() {
    document.getElementById("alkatOS").style.display = "inline";
    document.getElementById("alkatTS").style.display = "none";
    document.getElementById("alkatAÜ").style.display = "none";
    car = 0;
    //passValues("os")
}

function ts() {
    document.getElementById("alkatTS").style.display = "inline";
    document.getElementById("alkatOS").style.display = "none";
    document.getElementById("alkatAÜ").style.display = "none";
    car = 0;
    //passValues("ts")
}

function aü() {
    document.getElementById("alkatAÜ").style.display = "inline";
    document.getElementById("alkatOS").style.display = "none";
    document.getElementById("alkatTS").style.display = "none";
    car = 1;
    //passValues("aü")
}


function ellenörzés() {
    if (car == 1) {
        window.location.href = "autos.html";
    }
    else {
        window.location.href = "vegleges.html";
    }
}

function passValues(choice) {
    var passV = choice;
    localStorage.setItem("choice", passV);
    return false;
}

function sum(cb, amount) {
    //let amountInput = amount
    //let showAmount = document.querySelector("span.show-amount");
    passValues(amount)
    //if (cb.checked == true) {
    //    sumCash += Number(amountInput);
    //}
    //else {
    //    sumCash -= Number(amountInput);
    //}
    //showAmount.innerHTML = sumCash;
}