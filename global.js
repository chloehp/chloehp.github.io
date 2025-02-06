function vanishElement(el) {
    console.log("vanish element: " + el.id)
    el.style.opacity = "0";
    el.style.scale = "0.6";
    setTimeout(function(){el.remove()}, 600);
}

function appirateElement(el) {
    setTimeout(function(){
        console.log("appirate element: " + el.id)
        el.style.opacity = "1";
        el.style.scale = "1";    
    }, 300);
}

function loadElement(from, cat, into, i = 0, columnIndex = 0) {    
    if (from[i]) {                                                  // if next iteration exists, else loadElement loop ends
        if (cat !== from[i].cat) {                                  // if category does not exist
            loadElement(from, cat, into, i + 1, columnIndex + 1);    // skip this loop
            return;
        }
        const newEl = createNewElement(from[i]);        
        const columns = into.querySelectorAll(".content--load-here");
    
        if (columnIndex >= columns.length) {columnIndex = 0}                // iterate through columns
    
        columns[columnIndex].appendChild(newEl);                               // append element to next column
        appirateElement(newEl);
        
        console.log(from[i].title + " into " + into.id);
        if ((i + 1) % 3 === 0) {                                                                    // every third time
            console.log("waiting for last element to load...");
            newEl.children[0].onload = function(){                                                  // wait for this image to load
                setTimeout(function(){loadElement(from, cat, into, i + 1, columnIndex + 1)}, 180);  // before loading the next one
            }; 
        }
        else {setTimeout(function(){loadElement(from, cat, into, i + 1, columnIndex + 1)}, 180)}    // else just wait 180 ms                      
    } 
}

function createNewElement(from) {
    const el = document.createElement("a");
    const img = document.createElement("img");
    const h5 = document.createElement("h5");
    const p = document.createElement("p");
    
    el.setAttribute("class", "content--element  " + from.cat);        // set attributes
    el.setAttribute("href", from.url);
    el.setAttribute("target", "_blank");
    img.setAttribute("alt", from.title + " thumbnail");

    if (from.thumb) {img.setAttribute("src", from.thumb)}               // if object has thumbnail, set thumbnail
    else {img.setAttribute("src", from.url)}                            // else use the url
    
    h5.innerHTML = from.title;
    p.innerHTML = from.desc;

    el.appendChild(img);                                                // append img to element
    el.appendChild(h5);                                                 // append h5 to element
    el.appendChild(p);                                                  // append p to element

    return el;
}