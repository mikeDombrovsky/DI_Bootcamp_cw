function onDragStart(e) {
    console.log("start");
    e.dataTransfer.setData("text/plain", e.target.id);
}

function onDragEnd(e) {
    console.log("end");
}

function onDragOver(e) {
    e.preventDefault();
    console.log("over");
}

function onDrop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    e.target.append(document.getElementById(id));
    console.log("drop");
}