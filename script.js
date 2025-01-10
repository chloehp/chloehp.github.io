// elements
let rightring;
let leftring;
let circle;

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        const loady = document.getElementById("loady");
        const loadyText = document.getElementById("loady-text");
        circle = document.querySelectorAll(".ringc--circle");
        document.getElementById("toptext-centre").scrollIntoView(true);     

        rightring = document.getElementById("s006-001");
        leftring = document.getElementById("s005-001");

        loady.style.scale = 1;
        loadyText.style.color = "#6cac8500";
        document.body.style.backgroundColor = "#f1dbbf";
        document.getElementById("toptext-centre").scrollIntoView(true);     
        setInterval(scrollUpdate, 120);

        setTimeout(function(){
            document.getElementById("s008-000-l").remove();
            loady.remove();
            loadyText.remove();
        }, 1800);
    }
}

function scrollUpdate() {
    const docScroll = document.documentElement.scrollTop;
    const scrolled = docScroll / (6 + (screen.width / 150));    
    rightring.style.rotate = scrolled + "deg";
    leftring.style.rotate = "-" + scrolled + "deg";
    
    if (docScroll > 240) {
        circle[0].style.opacity = "0.3";
        circle[1].style.opacity = "0.3";
        circle[2].style.opacity = "0.3";
    }
    else {
        circle[0].style.opacity = "";
        circle[1].style.opacity = "";
        circle[2].style.opacity = "";
    }
}

let flipDegrees = 0;
function flip(event) {
    const flipElement = event.currentTarget;
    flipElement.style.transformStyle = "preserve-3d";                   // add only when animating as makes it slightly blurry
    flipDegrees += 540;//900;
    flipElement.style.transform = "rotateY(" + flipDegrees + "deg)";
    console.log("flip to " + flipDegrees);
}