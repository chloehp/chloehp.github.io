var languageObj;
var fileName;

function readFile(input) {
    const downloadButton = document.getElementById("download-button");
    const file = input.files[0]; 
    const fileReader = new FileReader(); 
    let fileType;
    fileReader.readAsText(file); 

    fileReader.onload = function() {
        let fileSplitName = file.name.split(".")
        let textInput = document.getElementById("text-input").value;
        fileName = ("DHLE_CSA_SBL_" + textInput + "_" + fileSplitName[0] + "_TEXT").toUpperCase();
        fileType = fileSplitName.pop();
        if (fileType == "json") {       
            languageObj = JSON.parse(fileReader.result);
            downloadButton.style.opacity = 1;
            downloadButton.style.pointerEvents = "all";
        } 
        else {
            alert("JSON only!!!!!!! pleeease!!! 🧙‍♂️");
            downloadButton.style.opacity = 0.45;
            downloadButton.style.pointerEvents = "none";
        }
    }; 
    fileReader.onerror = function() {
        alert(fileReader.error);
    }; 
}

function replaceTextX() {    
    const keyList = [];

    for (let x = 0; x < languageObj.length; x++) {
       
        languageObj[x] = {
            key: "[DO_NOT_EDIT]" + languageObj[x].key + "[DO_NOT_EDIT]",
            Text: languageObj[x].Text,
        }

        keyList.push(languageObj[x].key);
    }       
    console.log(keyList);
    
    const download = document.createElement('a');
    download.setAttribute('href', 'data:text/plain;charset=utf-16,' + encodeURIComponent(JSON.stringify(languageObj)));
    download.setAttribute('download', fileName + '.json');
    document.body.appendChild(download);
    download.click();
    document.body.removeChild(download);
}
