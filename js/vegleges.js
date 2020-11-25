let óradíj = localStorage.getItem("money");
window.onload = disableFoglaltIdo;
//console.log(óradíj);

let sumCash = 0;
var d = new Date();
var év = d.getFullYear()
var hónap = d.getMonth() + 1;
var nap = d.getDate();
var óra = d.getHours();
let lefoglaltIdok = [[10, 21, 09],[11, 29, 09]];

var lefIdoLen = lefoglaltIdok.length;


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
        idBelyeg = hónap + "," + e + "," + i;
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
        document.getElementById(hónap + "," + e).appendChild(input);
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


function disableFoglaltIdo(){
    for (i = 0; i < lefIdoLen; i++){
        if (lefoglaltIdok[i][0] < hónap){
            continue;
        }
        else{
            document.getElementById(lefoglaltIdok[i]).disabled = true;
            document.getElementById(lefoglaltIdok[i]).style.background = "black";
        }
    }
}

function sumAll() {
    let sumAll = óradíj * munkaidő;
    document.querySelector("span.show-AllMount").innerHTML = sumAll;
}

function arraysEqual(a1,a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1)==JSON.stringify(a2);
}

function foglaltIdokAtnezes(lista, ido){
    for (i=0; i<lista.length; i++){
        console.log(lista[i]);
        console.log(ido);
        if (arraysEqual(lista[i], ido)){
            lista.splice(i,1);
            break;
        }
    }
    lefoglaltIdok.push(ido);
    console.log(lista);
}

function pluszÓra(month, day, hour){
    let list = [month, day, hour];
    let id = month+","+day+","+hour
    console.log(id);
    foglaltIdokAtnezes(lefoglaltIdok, list)
    if (document.getElementById(id).style.background == "red"){
        document.getElementById(id).style.background = "rgb(41, 223, 56)";
    }
    else{
        document.getElementById(id).style.background = "red";
    }
    disableFoglaltIdo(id)
    munkaidő += 1;
    document.querySelector("span.munkaóra").innerHTML = munkaidő;
    sumAll();
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

numberOfDay()

function getTime(id) {
    console.log(document.getElementById(id).value);
}



