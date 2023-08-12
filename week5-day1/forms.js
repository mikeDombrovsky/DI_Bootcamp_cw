//ex1
const form = document.forms.form1
const input_fname = form.elements.fname;
console.log(input_fname.value);
const input_lastName = form.elements[1];
console.log(input_lastName.value);

//ex2

// //get the select form
// let dropdown = document.getElementById('A')

// // all three lines do the same thing
// dropdown.options[2].selected = true; //Banana selected
// dropdown.value = 'banana'; //Banana selected
// dropdown.selectedIndex = 2; //Banana selected

// // To check which option is selected
// console.log(dropdown.selectedIndex) // "2"
// console.log(dropdown.value) // "Banana"

const select1 = document.getElementById("select1");
//Get the value of the 2nd Option
console.log(select1.options[1].value);

//Add a new option with the value 'Work' at the end of the select form
let newOption = document.createElement("option");
newOption.value = "Work";
newOption.innerText = "Work";
select1.appendChild(newOption);

//Add a new option with the value 'Primary School' at the beginning of the select form
let newOption2 = document.createElement("option");
newOption.value = "Primary School";
newOption.innerText = "Primary School";
select1.insertBefore(newOption, select1.firstElementChild);

//Change 'College' as selected. Use the 3 properties we learned above
const lastOption = select1.lastElementChild;
lastOption.selected = "true";
// select1.value = lastOption.value;
// select1.selectedIndex = select1.children.length - 1;
console.log(select1.value, select1.selectedIndex);//enough to use one