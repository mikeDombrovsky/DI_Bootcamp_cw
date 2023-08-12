const css = document.querySelector("h3");
const color1 = document.querySelector("input#color1");
const color2 = document.querySelector("input#color2");
const body = document.querySelector("#mybody");
console.log(body.style.background);



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function setGradient() {
    body.style.background =
        `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background + ";"
}

