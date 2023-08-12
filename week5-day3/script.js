// function handleSubmit(e) {
//     e.preventDefault();
//     console.log("submit!");
//     const form = e.target;
//     const emailValue = form.elements.email.value;
//     console.log("form submited", emailValue);
// }

const form = document.querySelector("form");
// const forms = document.forms;
// console.log(forms);
// console.log(forms.form1, forms.form2);

// const elements = form.elements;
// console.log(elements);
// console.log(elements[0]);
// console.log(elements.email);//name
const select = form.select1;

let i = 1;
function getvalue(e) {
    e.preventDefault();
    console.log(e.target.fname.value, e.target.lname.value);
    e.target.fname.value = "Ivan_clone" + i;
    e.target.lname.value = "Ivanovich";
    i++;
    
    const check = form.checkb.checked;
    console.log(check);
};


function handkeSelect(e){
    const value = e.target.value;
    alert(value);
    console.log(select);

}





