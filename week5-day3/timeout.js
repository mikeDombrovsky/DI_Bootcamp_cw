const banner = document.querySelector("div#banner");
banner.style.backgroundColor = "yellow";
banner.style.width = "300px";
banner.style.height = "100px";
banner.style.display = "none";



// const setTimeoutId = setTimeout(function(){
//     changeBodyColor();
//     banner.style.display = "block";
// }, 1000 * 5);

// function changeBodyColor(){
//     document.body.style.backgroundColor = "red";
// }

// function stopTimeout(){
//     clearTimeout(setTimeoutId);
//     clearInterval(setIntervalId);
// }
// let i = 0;

// const setIntervalId = setInterval( function(){

//     console.log(i++);
// }, 1000 * 2);


let setTimeOutMove;
let left = 0;
function startMove(e) { 
    left = 0;
    e.target.style.left = left++;
   
    setTimeOutMove = setInterval(function(e){
        e.target.style.left = left + "px";
        left++;
    }, 100);
    
    if (e.target.style.right == 0) {
        stopMove();
    }
}

function stopMove(){
    clearInterval(setTimeOutMove);
}
