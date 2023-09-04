const form = document.forms[0];
console.log(form);
let counter = 4;

function validateForm(e) {
    e.preventDefault();
    console.log('validation form', e.target.elements.username.value, e.target.elements.password.value);

    const select = e.target.elements.select;
    const options = Array.from(select.options);
    const selected = options
        .filter(option => option.selected)
        .map(option => option.value);
    console.log('Selected: ', selected);
}

function addOption(){
    const select = form.elements.select;
    // const newOption = document.createElement('option');
    // newOption.value = counter;
    // newOption.innerText = 'Enother' + counter++;
    const newOption = new Option('Enother'+ counter, counter++);

    select.appendChild(newOption);
}

