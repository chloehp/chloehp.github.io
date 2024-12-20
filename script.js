//window.scroll(0, 120);
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        const loady = document.getElementById("loady");
        loady.style.scale = 1;
        document.body.style.backgroundColor = "#f1dbbf";
        setInterval(scrollUpdate, 120);
        setTimeout(function(){
            document.getElementById("s008-000-l").remove();
            loady.remove();
        }, 1800);
    }
}

function scrollUpdate() {
    const scrolled = document.documentElement.scrollTop / (6 + (screen.width / 150));
    const rightring = document.getElementById("s006-001");
    const leftring = document.getElementById("s005-001");
    rightring.style.rotate = scrolled + "deg";
    leftring.style.rotate = "-" + scrolled + "deg";
    //console.log(document.readyState);
}