var newGlobal;
var initialGlobal;
var textInput;

function readFile(input) {
    const downloadButton = document.getElementById("download-button");
    const file = input.files[0]; 
    const fileReader = new FileReader(); 
    let fileType;
    fileReader.readAsText(file); 

    fileReader.onload = function() {
        fileType = file.name.split(".").pop();
        if (fileType == "json") {       
            if (initialGlobal) {//if there's already an initial object                
                newGlobal = JSON.parse(fileReader.result);

                addToGlobal();

                console.log("Globals compiled with " + file.name);
                if (matchingFiles === true){console.log("Files match")}
                else{console.log("Objects added")}
                console.log(initialGlobal);
            }
            else {//create initial
                initialGlobal = JSON.parse(fileReader.result);
                console.log("Initial global loaded");
                console.log(initialGlobal);
            }
            downloadButton.style.opacity = 1;
            downloadButton.style.pointerEvents = "all";
        } 
        else {
            alert("JSON only!!!!!!! pleeease!!! 🐴");
            downloadButton.style.opacity = 0.45;
            downloadButton.style.pointerEvents = "none";
        }
    }; 
    fileReader.onerror = function() {
        alert(fileReader.error);
    }; 
}

let matchingFiles = true;
function addToGlobal() {  
    matchingFiles = true;
    const ngbl = newGlobal.length  
    const igbl = initialGlobal.length
    for (let x = 0; x < ngbl; x++) { 
        let foundKeyMatch = false;      
        for (let y = 0; y < igbl; y++) {
            if (newGlobal[x].key === initialGlobal[y].key) {        
                foundKeyMatch = true; 
                if (newGlobal[x].Text != initialGlobal[y].Text) {
                    console.warn("Two objects with the same key but different text. Fix required!");
                    console.warn("key: " + initialGlobal[y].key);
                    console.warn("Initial objects text: ");
                    console.log(initialGlobal[y].Text)
                    console.warn("New objects text: ");
                    console.log(newGlobal[x].Text);
                }
            }
        }      
        if (foundKeyMatch === false) {
            matchingFiles = false;
            initialGlobal.push({
                key: newGlobal[x].key,
                Text: newGlobal[x].Text,
            });
            console.log("Added: " + newGlobal[x].key);
        }
    }       
    
}


function downloadGlobal() {
    const download = document.createElement('a');
    download.setAttribute('href', 'data:text/plain;charset=utf-16,' + encodeURIComponent(JSON.stringify(initialGlobal)));
    download.setAttribute('download', 'output.json');
    document.body.appendChild(download);
    download.click();
    document.body.removeChild(download);    
}