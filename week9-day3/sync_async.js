function fetchData() {
    //server call need to be async
}


function a() {
    // setTimeout(()=> b(),0);
    b();//if we call async it takes time
    console.log("a func");

}

function b() {
    console.log("b func");
}

a();


