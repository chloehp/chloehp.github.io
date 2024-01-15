let number = 5;
let textNum = 1;
let circleSize = 1;

let blobject = {
    colourOut: "",
    heightOut: 0,
    speedOut: 0,
    sizeOut: 0
  }

function lightInit() {
    settingsClose();
    //document.getElementById("big-text" + textNum).setAttribute("class", "big-text");
    //document.getElementById("loader").style.display = "none";
    document.getElementById("text").innerHTML = elementText;

    create("rgb(255, 123, 0)", "75vh", "12s ", "30vw ");
    create("rgb(204, 0, 34)", "15vh", "12s ", "30vw ", "-1.5s");
    create("palevioletred", "18vh", "12s ", "30vw ", "-6s");
    create("rgb(255, 208, 0)", "72vh", "12s ", "30vw ", "-9s");
    create("rgb(231, 46, 0)", "50vh", "9s ", "30vw ", "0s", true);
}

function settingsOpen() {
    document.getElementById("settings").setAttribute("class", "settings");
    document.getElementById("eye-open").setAttribute("class", "display-none");
    document.getElementById("eye-closed").setAttribute("class", "");
}
function settingsClose() {
    document.getElementById("settings").setAttribute("class", "settings display-none");
    document.getElementById("eye-open").setAttribute("class", "");
    document.getElementById("eye-closed").setAttribute("class", "display-none");
}

function nextText(x, max) {
    document.getElementById("big-text" + textNum).setAttribute("class", "big-text display-none");
    textNum += x;
    if (textNum > max) {
        textNum = max;
    }
    if (textNum < 1) {
        textNum = 1;
    }
    console.log("new text, page: " + textNum);
    document.getElementById("big-text" + textNum).setAttribute("class", "big-text");
}

function circle() {
    console.log("circle");
    circleSize++;
    if (circleSize > 4) {
        circleSize = 1;
    }
    switch (circleSize) {
        default:
            document.getElementById("circle").style.animation = "small 2s forwards";
            console.log("go small");
            break;
        case 2:
            document.getElementById("circle").style.animation = "big 1s forwards";
            console.log("go big");
            break;
        case 3:
            document.getElementById("circle").style.animation = "bigger 1s forwards";
            console.log("go bigger");
            break;
        case 4:
            document.getElementById("circle").style.animation = "biggest 1s forwards";
            console.log("go biggest");
            break;
    }
}

function inputForm() {
    //get input
    blobject.colourOut = document.getElementById("colour-in").value;
    blobject.heightOut = document.getElementById("height-in").value;
    blobject.speedOut = (document.getElementById("speed-in").value) * 3;
    blobject.sizeOut = document.getElementById("size-in").value;

    document.getElementById("form").reset();

    //make values
    let colour = blobject.colourOut;
    let height = (blobject.heightOut * 10) + "vh";
    let speed;
    if ((blobject.speedOut > 0) && (blobject.speedOut < 30)) {
        speed = ((blobject.speedOut - 30) * -1) + "s ";
    }
    else {
        speed = "0.5s ";
    }
    let size = " " + (blobject.sizeOut * 3) + "vw ";
    
    create(colour, height, speed, size);
}

function create(colour, height, speed, size, delay, direction) {
    number++;

    if (direction === undefined)
    {
        direction = "";
    }
    else {
        direction = " reverse";
    }
    if (delay === undefined)
    {
        delay = "";
    }

    console.log("Making a blob . . . blob" + number);
    console.log("Colour: " + colour);
    console.log("Height: " + height);
    console.log("Speed: " + speed);
    console.log("Size: " + size);

    let newBlob = document.createElement("div");
    newBlob.setAttribute("class", "blob");
    newBlob.setAttribute("id", "blob" + number);
    newBlob.style.boxShadow = ("0 0 " + size + size + colour);
    newBlob.style.bottom = height;
    newBlob.style.animation = "glide1 linear infinite " + speed + delay + direction;
    document.getElementById("container").appendChild(newBlob);

    let tab = document.createElement("div");
    tab.setAttribute("class", "tab");
    tab.setAttribute("id", "tab" + number);
    //tab.setAttribute("onclick", "tabSwitch(" + number + ")");
    tab.innerHTML = "Blob" + number;
    document.getElementById("tab-cont").appendChild(tab);

    let tabX = document.createElement("div");
    tabX.innerHTML = "x";
    tabX.setAttribute("class", "tab--x");
    tabX.setAttribute("onclick", "destroy(" + number + ")");
    document.getElementById("tab" + number).appendChild(tabX);

}

function destroy(x) {
    console.log("destroy " + "blob" + x);
    document.getElementById("tab" + x).remove();
    document.getElementById("blob" + x).remove();
}

function tabSwitch(x) {
    console.log("tabSwitch");

    let aFig = document.getElementById("colour-figure");
    let bFig = document.getElementById("height-figure");
    let cFig = document.getElementById("speed-figure");
    let dFig = document.getElementById("size-figure");
    
    aFig.innerHTML = colour;
    bFig.innerHTML = heightIn;
    cFig.innerHTML = speedIn;
    dFig.innerHTML = sizeIn;

    aFig.style.display = "inherit";
    bFig.style.display = "inherit";
    cFig.style.display = "inherit";
    dFig.style.display = "inherit";
}