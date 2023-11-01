function starMake() {
    const rand = Math.random();

    if (rand < 0.6) {
        littleStar(1);
    } else if (rand < 0.8) {
        littleStar(2);
    } else {
        littleStar("🦆");
    }
    
    setTimeout(function () {
        starMake();
        return
    }, 240);
}

function littleStar(size) {
    const star = document.createElement("div");
    const position = (Math.random() * 120) - 10;
    let starDeath;

    if (size == 1) {
        star.setAttribute("class", "star small");
        starDeath = 27000;
    } else if (size == 2) {
        star.setAttribute("class", "star slow");
        starDeath = 42000;
    } else {
        star.setAttribute("class", "star sure");
        starDeath = 36000;
    }
    star.style.left = (position + "%");
    document.querySelector(".container").appendChild(star);

    setTimeout(function () {
        star.remove();
        return
    }, starDeath);
}