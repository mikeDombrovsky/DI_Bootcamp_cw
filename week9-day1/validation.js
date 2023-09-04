const form = document.forms[0];
const email_input = form.elements.email;
console.log(email);

email.addEventListener('input', function(event){
    if(email.validity.typeMismatch){
        email.setCustomValidity('I am expecting else, fooly');
    }else{
        email.setCustomValidity('');
    }
})

function validateForm(e){
    e.preventDefault();

}

function hello(){
    console.log('before');
    a;
    console.log('after');
}

try{
    hello();
}catch(err){
    console.log('error=>', /*err,*/ err.name, err.message, err.stack);
}finally{
    console.log('finally block is called anyway');
}

