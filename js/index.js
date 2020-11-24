window.onload = hide;
let car = 0;
let keys = ["fokat", "alkat"];

lista = [, ]
let dataOfDiv = [
    {
        fokat: ["ts()", "távoli segítségnyújtás"], 
        alkat: [["passValues(1800)", "tanulás, minimum 1 óra 1800 Ft/óra"], ["passValues(12000)", "Plakátok, borítók dizájnja 1 hónapban max 5 projekt, 12000 Ft/db"]]
    },
    {
        fokat: ["os()", "otthoni segítségnyújtás"],
        alkat: [["passValues(2000)", "gépes melók, minimum 1 óra 2000 Ft/óra"]]
    },
    {
        fokat: ["aü()", "Autós ügyintézés"],
        alkat: [["passValues(2500)", "kormányablak, minimum 1 óra 2500 Ft/óra"], ["passValues(2000)", "csomag a-ből b-be, minimum 1 óra 2000 Ft/óra(km költség + 110 Ft/km)"]]
    }
]

function createAnyElement(name, attributes) {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes[k]);
    }
    return element;
}

function getData(){
    for (let row of dataOfDiv){
        for (let k of keys){
            if (k == "fokat"){
                let div = createAnyElement("div", {
                    id: row[k][0],
                    class: "container",
                    onclick: row[k][0]               
                });
                document.getElementById("ide").appendChild(div);
                document.getElementById(row[k][0]).innerHTML = row[k][1];
                        
        }
}
    }
}

getData();

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
}

function ts() {
    document.getElementById("alkatTS").style.display = "inline";
    document.getElementById("alkatOS").style.display = "none";
    document.getElementById("alkatAÜ").style.display = "none";
    car = 0;
}

function aü() {
    document.getElementById("alkatAÜ").style.display = "inline";
    document.getElementById("alkatOS").style.display = "none";
    document.getElementById("alkatTS").style.display = "none";
    car = 1;
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


function numberOfDay(){
    for (var e = nap; e < getDaysInMonth(hónap, év)+1; e++){
        let div = createAnyElement("div", {
            id: hónap + "," + e,
            class: "container",
            style: "text-align: left",
            style: "background-color: lightblue",
            
        });
        document.getElementById("ide").appendChild(div);
        document.getElementById(hónap + "," + e).innerHTML = év + "." + hónap + "." + e + "      ";
        takeMyTime(e)
    }
}