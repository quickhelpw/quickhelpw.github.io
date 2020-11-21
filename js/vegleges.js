let óradíj = localStorage.getItem("choice");
//console.log(óradíj);

let sumCash = 0;
var d = new Date();
var év = d.getFullYear()
var hónap = d.getMonth() + 1;
var nap = d.getDate();
var óra = d.getHours();

var getDaysInMonth = function(month,year) {
   return new Date(year, month, 0).getDate();
  };

//console.log(getDaysInMonth(hónap, év) );
let hatralevoNapokSzama = getDaysInMonth(hónap, év) - nap;
//console.log(hatralevoNapokSzama);

function createAnyElement(name, attributes) {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes[k]);
    }
    return element;
}

function createInput(e, i){
    while (i < 19) {
        let idBelyeg = hónap + "," + e + "," + i;
        //console.log(idBelyeg);
        let input = createAnyElement("input", {
            type: "button",
            name: "time",
            id: idBelyeg,
            value: i + ":00",
            class: "smcontainer",
            //onclick: `getTime(${i})`,
            onclick: `pluszÓra(${idBelyeg})`,
            style: "text-align: center"
        });
        document.getElementById(hónap + e).appendChild(input);
        i += 1;
    }
}

function takeMyTime(e) {
    if ((óra > 8 ) && (e == nap)){
        i = óra + 1;
    }
    else {
        i = 8;
    }
    createInput(e, i);
}

let munkaidő = 0;
document.querySelector("span.óradíj").innerHTML = óradíj;

let lefoglaltIdok = [[11, 23, 9],[11, 22, 9]];

function disableFoglaltIdo(id){
    
    document.getElementById(id).disabled = true;
}

function sumAll() {
    let sumAll = óradíj * munkaidő;
    document.querySelector("span.show-AllMount").innerHTML = sumAll;
}

function pluszÓra(month, day, hour){
    let list = [month, day, hour];
    lefoglaltIdok.push(list);
    let id = month+","+day+","+hour
    console.log(id);
    disableFoglaltIdo(id)
    munkaidő += 1;
    document.querySelector("span.munkaóra").innerHTML = munkaidő;
    sumAll();
}

function numberOfDay(){
    for (var e = nap; e < getDaysInMonth(hónap, év)+1; e++){
        let div = createAnyElement("div", {
            id: hónap + e,
            class: "container",
            style: "text-align: left",
            style: "background-color: lightblue",

        });
        document.getElementById("ide").appendChild(div);
        document.getElementById(hónap + e).innerHTML = év + "." + hónap + "." + e + "      ";
        takeMyTime(e)
    }
}

numberOfDay()

function getTime(id) {
    console.log(document.getElementById(id).value);
}



