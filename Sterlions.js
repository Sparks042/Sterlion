const username = document.getElementById("username");
const countryCode = document.getElementById("country-code");
const phoneNumber = document.getElementById("phone-number");
const email = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const toggleButton = document.getElementById("toggle-password");
const createAccountButton = document.getElementById("create-account")

//Effect of hiding and showing password
toggleButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (passwordInput.type === "password" && confirmPasswordInput.type === "password"  ){
        passwordInput.type = "text";
        confirmPasswordInput.type = "text";
        setTimeout(() => {
            toggleButton.textContent = "Hide Password";
        },50)
    } 
    else {
        passwordInput.type = "password";
        confirmPasswordInput.type = "password";
        setTimeout(() => {
            toggleButton.textContent = "Show Password";
        },50)
    }
});
//empty and filled input validation
createAccountButton.addEventListener("click", (e) =>
{
    e.preventDefault();
    if(username.value == ""){
        username.style.outline = "none";
        username.style.border = "1px solid red";
    }
    else{
        username.style.border = "1px solid rgb(223,224,229)";
    }
    if(countryCode.value == ""){
        countryCode.style.outline = "none";
        countryCode.style.border = "1px solid red";
    }
    else{
        countryCode.style.border = "1px solid rgb(223,224,229)";
        countryCode.style.backgroundColor = "rgb(232,240,254)";
    }
    if(phoneNumber.value == ""){
        phoneNumber.style.outline = "none";
        phoneNumber.style.border = "1px solid red";                
    }
    else if(phoneNumber.value == "number"){
        phoneNumber.style.border = "1px solid rgb(223,224,229)";
    }
    if(email.value == ""){
        email.style.outline = "none";
        email.style.border = "1px solid red";
    }
    else{
        email.style.border = "1px solid rgb(223,224,229)";
    }
    if(passwordInput.value === ""){
        passwordInput.style.outline = "none";
        passwordInput.style.border = "1px solid red";                
    }
    else{
        passwordInput.style.border = "1px solid rgb(223,224,229)";
        passwordInput.style.backgroundColor = "rgb(232,240,254)";

    }
    if(confirmPasswordInput.value == ""){
        confirmPasswordInput.style.outline = "none";
        confirmPasswordInput.style.border = "1px solid red";                
    }
    else{
        confirmPasswordInput.style.border = "1px solid rgb(223,224,229)";
        confirmPasswordInput.style.backgroundColor = "rgb(232,240,254)";
    }
    
})