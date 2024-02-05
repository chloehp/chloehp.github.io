var languageObj;
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
            languageObj = JSON.parse(fileReader.result);
            downloadButton.style.opacity = 1;
            downloadButton.style.pointerEvents = "all";
        } 
        else {
            alert("JSON only!!!!!!! pleeease!!! 🐣");
            downloadButton.style.opacity = 0.45;
            downloadButton.style.pointerEvents = "none";
        }
    }; 
    fileReader.onerror = function() {
        alert(fileReader.error);
    }; 
}

function replaceTextX() {    
    textInput = document.getElementById("text-input").value + " ";

    if (languageObj.pages) { //truthy, if exists
        for (let x = 0; x < languageObj.pages.length; x++) {
            const fields = languageObj.pages[x].fields;
            for (let i = 0; i < fields.length; i++) {
                if (fields[i] !== "key"){
                    const text = fields[i].Text;
                    const result = text.replace(text, textInput.repeat(text.length / textInput.length));
                    languageObj.pages[x].fields[i].Text = result;
                }
            }
        }        
    }
    else {
        printObject(languageObj);
    }    
    //console.log(languageObj);
    
    const download = document.createElement('a');
    download.setAttribute('href', 'data:text/plain;charset=utf-16,' + encodeURIComponent(JSON.stringify(languageObj)));
    download.setAttribute('download', 'output.json');
    document.body.appendChild(download);
    download.click();
    document.body.removeChild(download);
}


function printObject(obj) {
    for (let key in obj) {
      let innerObj = obj[key]
      if (innerObj instanceof Object) {
        printObject(innerObj)
      } else {
        obj[key] = innerObj.replace(innerObj, textInput.repeat(innerObj.length / textInput.length));
        //console.log(key + ":", innerObj)
      }
    }
  }
