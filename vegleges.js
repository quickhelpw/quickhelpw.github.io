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

function getTime(id) {
    console.log(document.getElementById(id).value);
}

function ellenörzés() {
    if (car == 1) {
        window.location.href = "autos.html";
    }
    else {
        window.location.href = "vegleges.html";
    }

}