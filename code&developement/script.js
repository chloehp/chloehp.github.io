let readyStateHasChanged = false;

document.onreadystatechange = function () {
    if (readyStateHasChanged === false) {
        const ring = document.getElementById("s005-001");
        const circle = document.getElementById("s005-000");
        const heading = document.getElementById("s005-h");

        setTimeout(function(){
            ring.style.rotate = "420deg";
            circle.style.opacity = "0.09";
            setTimeout(function(){heading.style.opacity = "1";}, 30);
        }, 150);
    }
    else {
        //console.log("document has finished loading");
    }
    readyStateHasChanged = true;
}

let codeElementsHaveBeenLoaded = false;
function loadCodeElements() {
    if (codeElementsHaveBeenLoaded === false) {
        const jsColumn = document.getElementById("js-column");
        const everythingColumn = document.getElementById("everything-else-column");
        codeElementsHaveBeenLoaded = true;
        setTimeout(function(){
            loadElement(codeList, "js", jsColumn);
            loadElement(codeList, "", everythingColumn);
        }, 600);
    }
}