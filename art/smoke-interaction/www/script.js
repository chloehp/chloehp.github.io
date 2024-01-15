var smokeToggle = 1;

function smoke() {
   let angle = 6;
   setInterval(function () {
      angle += (Math.random() - 0.51) * 6;
      puff(angle);
      if ((angle > 42) || (angle < -42)) {angle = 0}
   }, 390);
}

const burner = document.getElementById("burn");
function puff(angle) {
   let pY = 0;
   let pX = 0;
   const container = document.createElement("div");
   container.setAttribute("class", "cont-p");
   const lSp = document.createElement("div");
   lSp.setAttribute("class", "left-p");
   const rSp = document.createElement("div");
   rSp.setAttribute("class", "right-p");
   const puff = document.createElement("div");
   puff.setAttribute("class", "puff");
   burner.appendChild(container);
   container.appendChild(rSp);
   container.appendChild(lSp);
   container.appendChild(puff);

   setInterval(function () {
      pY -= 30;
      pX += angle;
      container.style.top = pY + "px";
      container.style.left = pX + "px";
   }, 900);

   //lSp.onmouseenter = function(){      lSp.style.translate = "75px";   }
   //rSp.onmouseenter = function(){      lSp.style.translate = "-75px";   }
   
   lSp.onmouseover = function(){
            pX += 75;
            container.style.left = pX + "px";
         }
   rSp.onmouseover = function(){
            pX -= 75;
            container.style.left = pX + "px";   
         }

   setTimeout(() => {
      lSp.style.opacity = 0;
      setTimeout(() => {
         puff.remove();
         rSp.remove();
         lSp.remove();
      }, 3000);
   }, 33000);
}

