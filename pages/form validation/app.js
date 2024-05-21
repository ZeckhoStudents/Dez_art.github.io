const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   if(!validateInputs()){
    e.preventDefault();
   }
})

function validateInputs(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passVal = password.value.trim();
    const cpassVal = cpassword.value.trim();
    let success = true;


    if(usernameVal === ''){
        success = false;
        setError(username,'Username is required');
    }
    else{
        setSuccess(username);
    }


    if(emailVal === ''){
        success= false;
        setError(email, 'Email is required');
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Please enter a valid email');
    }
    else{
        setSuccess(email);
    }


    if(passVal === ''){
        success = false;
        setError(password,'Password is required');
    }
    else if(passVal.length < 8){
        setSuccess = false;
        setError(password,'Password must be atleast 8 characters');
    }
    else {
       setSuccess(password) ;
    }


    if(cpassVal === ''){
        success = false;
        setError(cpassword,'Confirm Password is required');
    }
    else if(cpassVal!== passVal){
        success = false;
        setError(cpassword,"Passwords don't match");
    }
    else{
        setSuccess(cpassword);
    }

    return success;
}  

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};