window.onload=function(){
console.log("This is Validation Form");
const form = document.getElementById('form');
const fname= document.getElementById('fname');
var email= document.getElementById('email');
var phone= document.getElementById('phone');
var pass =document.getElementById('pass');
var repass =document.getElementById('repass');

form.addEventListener('submit' , e => {

    validateInputs();

    if(isformValid==true){
        form.submit();
    }
    else{
        e.preventDefault();
    }
});
function isformValid(){
    const inputContainers = form.querySelectorAll('.form_grp');
    inputContainers.forEach((container)=>{
    if(container.classList.contains('setError')){
        result = false;
    }
    });
        return result;
}

const setError = (element , message) =>{
    const inputControl = element.parentElement;
    const errorDisplay =inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay =inputControl.querySelector('.error');
    
    errorDisplay.innerText = message;
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}
const isValidEmail = email =>{
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    return re.test(String(email).toLowerCase());
}
const isValidPhone = phone =>{
    const ph = /^[0-9]{10}/;
}
const isValidPass = pass =>{
    const sa =/^[a-zA-z0-9]{15}/;
}
const validateInputs =() =>{
    const fnameValue = fname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passValue  = pass.value.trim();
    const repassValue = repass.value.trim();
    if(fnameValue==''){
        setError(fname,'*Required');
    }
    else if(fnameValue.length<3){
        setError(fname,'*Too Short');
    }
    else{
        setSuccess(fname);
        console.log(fname);
    }
    if(emailValue==''){
        setError(email,'*Required');
    }
    else if(!isValidEmail(emailValue)){
        setError(email,'*Provide a valid Email Address');
    }
    else{
        setSuccess(email);
    }
    if(phoneValue==''){
        setError(phone,'*Required');
    }
    else if(!isValidPhone(phoneValue)){
        setError(phone,'*Provide a valid Phone Number');
    }
    else{
        setSuccess(phone);
    }
    if(passValue==''){
        setError(pass,'*Required');
    }
    else if(!isValidPass(passValue)){
        setError(pass,'*The password must contain a digit and number and must be between than 8-15 charcters');
    }
    else{
        setSuccess(pass);
    }
    if(repassValue==''){
        setError(repass,'*Required');
    }
    else if(passValue!=repassValue){
        setError(repass,'*No Match');
    }
    else{
        setSuccess(repass);
    }
}
}


