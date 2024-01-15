function readFile(input) {
    const file = input.files[0]; 
    const fileReader = new FileReader(); 
    let fileType;
    fileReader.readAsText(file); 

    fileReader.onload = function() {
        fileType = file.name.split(".").pop();
        //alert(file.type);
        if ((fileType == "vtt") || (fileType == "txt")) {
            document.querySelector(".vtt-content").innerText = fileReader.result;
        } 
        else {
            alert("VTT or TXT only!!!!!!! pleeease!!! 👽");
        }
    }; 
    fileReader.onerror = function() {
        alert(fileReader.error);
    }; 
}

var textKey1 = "textKey--";
var textKey2 = "";
function videoManifester(webvttText) {
    const textInput1 = document.getElementById("text-input1").value;
    const textInput2 = document.getElementById("text-input2").value;
    if ((textInput1.length > 0) || (textInput2.length > 0)) {
        textKey1 = textInput1;    
        textKey2 = textInput2;    
    }
    // Split the input text into individual lines
    const lines = webvttText.split('\n').map(line => line.trim());

    const vidManObjects = [];
    const langObjects = [];

    // Iterate through the lines
    const linelen = lines.length;
    let objNo = document.getElementById("num-input").value;
    for (let i = 0; i < linelen; i++) {
        const line = lines[i];

        // Check if the line is a timestamp line
        if (/^(\d+:)?\d+:\d+\.\d+ --> (\d+:)?\d+:\d+\.\d+$/.test(line)) {
            // Extract start and end timestamps
            const [start, end] = line.split(' --> ').map(timestampToSeconds);

            // Extract the text content
            let textExtract;
            if (lines[i + 2].length > 0) {        textExtract = lines[i + 1] + " <br>" + lines[i + 2];            }
            else {        textExtract = lines[i + 1];            }

            // Create a JSON object and push it to the array
            vidManObjects.push({
                start,
                end,
                voice: "coach",
                textKey: textKey1 + objNo + textKey2,
                //text: textExtract
            });
            langObjects.push({
                key: textKey1 + objNo + textKey2,
                Text: textExtract
            });
            objNo++;
        }
    }

    console.log("videoManifest:");
    console.log(vidManObjects);
    console.log("language:");
    console.log(langObjects);
}

// Helper function to convert timestamp to seconds
function timestampToSeconds(timestamp) {
    const [hh, mm, ss] = timestamp.split(':').map(parseFloat);
    return hh * 3600 + mm * 60 + ss;
}


function convertGo() {
    const text = document.querySelector(".vtt-content").innerText;
    if (text.length > 0) {
        videoManifester(text);
    }
    else {        
        alert("Please select a VTT file");
    }
}