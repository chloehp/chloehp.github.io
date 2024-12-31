
document.onreadystatechange = function () {
    const ring = document.getElementById("s005-001");
    const circle = document.getElementById("s005-000");
    const heading = document.getElementById("s005-h");
    setTimeout(function(){
        ring.style.rotate = "420deg";
        circle.style.opacity = "0.09";
        setTimeout(function(){heading.style.visibility = "visible";}, 30);
    }, 300);
}