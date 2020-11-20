window.onload = hide;
let car = 0;
let sumCash = 0;

function hide(){
    document.getElementById("alkatOS").style.display="none";
    document.getElementById("alkatTS").style.display="none";
    document.getElementById("alkatAÜ").style.display="none";
}

function os(){
    document.getElementById("alkatOS").style.display="inline";
    document.getElementById("alkatTS").style.display="none";
    document.getElementById("alkatAÜ").style.display="none";
    car = 0;
}

function ts(){
    document.getElementById("alkatTS").style.display="inline";
    document.getElementById("alkatOS").style.display="none";
    document.getElementById("alkatAÜ").style.display="none";
    car = 0;
}

function aü(){
    document.getElementById("alkatAÜ").style.display="inline";
    document.getElementById("alkatOS").style.display="none";
    document.getElementById("alkatTS").style.display="none";
    car = 1;
}

function sum(cb, amount){
    let amountInput = amount
    //let amountInput = document.querySelector("input[name='amount-input']").value;
    let showAmount = document.querySelector("span.show-amount");
    if (cb.checked == true){
        sumCash += Number(amountInput);
    }
    else{
        sumCash -= Number(amountInput);
    }
    showAmount.innerHTML = sumCash;
}

function sumAll(){
    let kmInput = document.getElementById("km").value;
    let sumAll = sumCash + Number(kmInput)*110;
    document.querySelector("span.show-AllMount").innerHTML = sumAll;
}
//
//function createList() {
//    for (var i = 0; i < dictData.length; i++) {
//        let div = createAnyElement("div", {
//            id: k,
//            class: "smcontainer"
//        });
//        let input = createAnyElement("input", {
//            type: "radio",
//            name: "feladatok",
//            id: dictData[i][0],
//            value: dictData[i][0]
//        });
//        var label = createAnyElement("label", {
//            for: dictData[i][0],
//            name: "valazstas"
//        });
//        label.innerText = dictData[i][0];
//        document.getElementById("feladatokListája").appendChild(div);
//        document.getElementById(k).appendChild(input);
//        document.getElementById(k).appendChild(label);
//        k += 1;
//    }
//}
//
function createAnyElement(name, attributes) {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes[k]);
    }
    return element;
}

function takeMyTime() {
    i = 8;
    while (i != 19) {
        //let div = createAnyElement("div", {
        //    id: i+100,
        //    class: "smcontainer"
        //});
        let input = createAnyElement("input", {
            type: "button",
            name: "time",
            id: i,
            value: i + ":00",
            class: "smcontainer",
            onclick: `getTime(${i})`
        });
        //document.getElementById("ide").appendChild(div);
        document.getElementById("ide").appendChild(input);
    
        
        i += 1;
    }


}

takeMyTime()

function getTime(id){
    console.log(document.getElementById(id).value);
}

function ellenörzés(){
    if (car == 1){
        window.location.href = "autos.html";
    }
    else {
        window.location.href = "vegleges.html";    
    }
    
}