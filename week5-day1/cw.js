
//ex1
function insertRow() {
    let tbody = document.querySelector("tbody");
    let row = document.createElement("tr");
    row.innerHTML = `<td>new row cell1</td><td>new row cell2</td>`;
    tbody.appendChild(row);
    console.log(row);
}

//ex2
let btn = document.querySelector("button#jsstyle");

btn.addEventListener("click", function (e) {
    e.target.style.backgroundColor = "gray";
});

//ex3
let btn2 = document.querySelector("button#jsstyle2");

btn2.addEventListener("click", e => e.target.style.backgroundColor = "red");

btn2.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = "blue";
    e.stopPropagation();
}

);

let parent = btn.parentElement;
parent.addEventListener("mouseover", e => e.target.style.backgroundColor = "yellow");
parent.parentElement.addEventListener("mouseover",
    e => {
        e.target.style.backgroundColor = "green";
        e.stopPropagation();
    }
);
