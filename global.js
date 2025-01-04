function vanishElement(el) {
    console.log("vanishing element: " + el.id)
    el.style.opacity = "0";
    el.style.scale = "0.6";
    setTimeout(function(){el.remove()}, 600);
}

function appirateElement(el) {
    
}