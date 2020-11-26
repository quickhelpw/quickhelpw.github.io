window.onload = hide;
let car = 0;
let keys = ["fokat", "alkat"];

lista = [,]
let dataOfDiv = [
    {
        fokat: ["ts()", "Távoli segítségnyújtás", "alkatTS"],
        alkat: [["passValues('1800')", "'Tanulás, minimum 1 óra 1800 Ft/óra'"], ["passValues('5000')", "'Plakátok, borítók dizájnja 1 hónapban max 5 projekt, 5000 Ft/óra'"]]
    },
    {
        fokat: ["os()", "Otthoni segítségnyújtás", "alkatOS"],
        alkat: [["passValues('2000')", "'Gépes melók, minimum 1 óra 2000 Ft/óra'"], ["passValues('2000')", "'Csak kézi, minimum 1 óra 2000 Ft/óra'"],["passValues('1800')", "'Takarítás, minimum 1 óra 1800 Ft/óra'"],["passValues('2000')", "'Babysitter, minimum 1 óra 2000 Ft/óra'"],["passValues('2000')", "'Pakolás, minimum 1 óra 2000 Ft/óra'"],["passValues('2000')", "'Idős ember felügyelése, minimum 1 óra 2000 Ft/óra'"],["passValues('2000')", "'Kutyával kapcsolatos teendők, sétáltatás, kozmetikus, nyírás, fürdetés.'"]]
    },
    {
        fokat: ["aü()", "Autós ügyintézés", "alkatAÜ"],
        alkat: [["passValues('2500')", "'Kormányablak, minimum 1 óra 2500 Ft/óra'"], ["passValues('2000')", "'Csomag a-ből b-be, minimum 1 óra 2000 Ft/óra(km költség + 110 Ft/km)'"],["passValues('2500')", "'Ügyfélszállítás egyszerű autóval, minimum 1 óra 2500 Ft/óra(km költség + 110 Ft/km)'"],["passValues('3000')", "'Ügyfélszállítás elegáns autóval, minimum 1 óra 3000 Ft/óra(km költség + 110 Ft/km)'"],["'passValues(2000')", "'Vásárlás, minimum 1 óra 2000 Ft/óra(km költség + 110 Ft/km)'" ],["passValues('0')", "'Posta, km költség + 110 Ft/km'"],["passValues('0')", "'Csomagátvétel(bermelyik üzlet), km költség + 110 Ft/km'"],["passValues('0')", "'Gyógyszertár, km költség + 110 Ft/km'"],["passValues('0')", "'Tisztító, öltöny, cipő km költség + 110 Ft/km'"]]
    }
]

function createAnyElement(name, attributes) {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes[k]);
    }
    return element;
}

function getDataToCreateAlkatDiv(row){
    for (let k of keys){
        if (k == "alkat"){
            listAlkat = row[k]
            for (i=0; i<listAlkat.length; i++){
                idDiv = row["fokat"][2] + i;
                var a = row[k][i][0];
                var b = ", " + row[k][i][1];
                var position = -1;
                var divOnclick = [a.slice(0, position), b, a.slice(position)].join('');
                let div = createAnyElement("div", {
                    id: idDiv,
                    class: "container",
                    onclick: divOnclick,
                    role: "button"
                })
                document.getElementById(row["fokat"][2]).appendChild(div);
                document.getElementById(idDiv).innerHTML = (row[k][i][1]).slice(1, -1);
            }
        }
    }
}

function getDataToCreateFokatDiv() {
    for (let row of dataOfDiv) {
        for (let k of keys) {
            if (k == "fokat") {
                let idDiv = row[k][0];
                let div = createAnyElement("div", {
                    id: idDiv,
                    class: "container",
                    onclick: row[k][0],
                    role: "button"
                });
                document.getElementById("fokat").appendChild(div);
                document.getElementById(idDiv).innerHTML = row[k][1];
            }
        }
        getDataToCreateAlkatDiv(row);
    }
}



getDataToCreateFokatDiv();

function hide() {
    document.getElementById("alkat").style.display = "none";
    document.getElementById("alkatOS").style.display = "none";
    document.getElementById("alkatTS").style.display = "none";
    document.getElementById("alkatAÜ").style.display = "none";
}

function os() {
    document.getElementById("alkat").style.display = "block";
    document.getElementById("alkatOS").style.display = "inline";
    document.getElementById("alkatTS").style.display = "none";
    document.getElementById("alkatAÜ").style.display = "none";
    car = 0;
}

function ts() {
    document.getElementById("alkat").style.display = "block";
    document.getElementById("alkatTS").style.display = "inline";
    document.getElementById("alkatOS").style.display = "none";
    document.getElementById("alkatAÜ").style.display = "none";
    car = 0;
}

function aü() {
    document.getElementById("alkat").style.display = "block";
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

function passValues(money, text) {
    //var passV = money;
    //var passText = text;
    localStorage.setItem("money", money);
    localStorage.setItem("text", text);
    return false;
}


function numberOfDay() {
    for (var e = nap; e < getDaysInMonth(hónap, év) + 1; e++) {
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