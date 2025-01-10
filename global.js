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

//const haveIloaded = [];
function loadElement(from, cat, into, onlyImg) {
    const fromLen = from.length;
    const columns = into.querySelectorAll(".content--load-here");
    let columnIndex = 0;
    let elementsAppended = 0;

    //haveIloaded.push(0);
    //const thisIterationOfHaveIloaded = haveIloaded.length - 1;

    let i = 0;
    const thisInterval = setInterval(function () {
        if (cat === from[i].cat) {
            const el = document.createElement("a");
            const img = document.createElement("img");
            const h5 = document.createElement("h5");
            const p = document.createElement("p");
         
            el.setAttribute("href", from[i].url)  
            el.setAttribute("class", "content--element  " + from[i].cat);        // set attributes
            el.setAttribute("target", "_blank");
            img.setAttribute("alt", from[i].title + " thumbnail");
            if (from[i].thumb) {img.setAttribute("src", from[i].thumb)}
            else {img.setAttribute("src", from[i].url)} 
            h5.innerHTML = from[i].title;
            p.innerHTML = from[i].desc;

            //img.setAttribute("onload", "haveIloaded[" + thisIterationOfHaveIloaded + "]++");    // when image loads, add 1 to the item of the array that represents this iteration of the loadElement function
            el.appendChild(img);                                                // append img to element
            el.appendChild(h5);                                                 // append h5 to element
            el.appendChild(p);                                                  // append p to element

            if (columnIndex >= columns.length) {columnIndex = 0}                // iterate through columns

            columns[columnIndex].appendChild(el);                               // append element to next column
            appirateElement(el);
            columnIndex++;
            elementsAppended++;
            console.log(elementsAppended + " load " + from[i].title + " into " + into.id);
        }        
        
        i++; 
        if (i >= fromLen) {clearInterval(thisInterval)}
    }, 180);

    
}