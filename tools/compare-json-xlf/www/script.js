function readFile(input) {
    const file = input.files[0]; 
    const fileReader = new FileReader(); 
    let fileType;
    fileReader.readAsText(file); 

    fileReader.onload = function() {
        fileType = file.name.split(".").pop();
        //alert(file.type);
        if (fileType == "xlf") {
            document.querySelector(".xlf-content").innerText = fileReader.result;
        } 
        else if (fileType == "json") {       
            document.querySelector(".json-content").innerText = fileReader.result;
        } 
        else {
            alert("XLIFF or JSON only!!!!!!! pleeease!!! 👽");
        }
    }; 
    fileReader.onerror = function() {
        alert(fileReader.error);
    }; 
}

function JSONsplot() {

    if ((document.querySelector(".xlf-content").hasChildNodes() != true) && (document.querySelector(".json-content").hasChildNodes() != true)) {
        alert("Add XLIFF and JSON files.");
        return
    }
    if (document.querySelector(".xlf-content").hasChildNodes() != true) {
        alert("Add an XLIFF file.");
        return
    }
    if (document.querySelector(".json-content").hasChildNodes() != true) {
        alert("Add an JSON file.");
        return
    }
    
    const containerDiv = document.querySelector(".json-lines");

    while (containerDiv.hasChildNodes()) {      containerDiv.removeChild(containerDiv.firstChild);    }

    let splitXLF = document.querySelector(".xlf-content").innerHTML.split("<br>");
    let splitJSON = document.querySelector(".json-content").innerHTML.split("<br>");
    
    for (let i = 0; i < splitJSON.length; i++) {
        let brokenLine = splitJSON[i].split('"');
        let textSegment = brokenLine[brokenLine.length - 2]
        if (textSegment) { //truthy
            const jl = document.createElement("p");
            jl.setAttribute("class", "json-text");
            jl.innerText = textSegment;

            containerDiv.appendChild(jl);

            let hits = 0;
            for (let x = 0; x < splitXLF.length; x++) {
                if (checkXLF(splitXLF[x], textSegment) == true) {
                    const whereMatch = document.createElement("p");
                    whereMatch.setAttribute("class", "xlf-match");
                    whereMatch.innerText = "First match in XLF: line " + (x + 1);

                    containerDiv.appendChild(whereMatch);
                    hits++;
                    break
                }
            }       
            if (hits == 0) {
                const noMatch = document.createElement("p");
                noMatch.setAttribute("class", "no-match");
                noMatch.innerText = "No matches!";
                containerDiv.appendChild(noMatch);
                
            }    

            const line = document.createElement("div");
            line.setAttribute("class", "line");
            containerDiv.appendChild(line);
        }
    }
}

function checkXLF(xlf, json) {
    const sch = xlf.search(json);
    if (sch >= 0) {return true}
    else {return false}
}