const password = document.getElementById('user_password');
const confirmPassword = document.getElementById('confirm_password');
const form = document.getElementById('form');
const passwordWarning = document.getElementById('input-hint');



password.addEventListener('focusout', ()=> {
    if (confirmPassword.value.trim() !== '') {
        if (password.value === confirmPassword.value){
            password.style.borderColor = '#1c942e';
            confirmPassword.style.borderColor = '#1c942e';
            passwordWarning.innerHTML = "";
        }
    }
});

confirmPassword.addEventListener('focusout', ()=> {
    if (confirmPassword.value.trim() !== '') {
        if (password.value === confirmPassword.value){
            password.style.borderColor = '#1c942e';
            confirmPassword.style.borderColor = '#1c942e';
            passwordWarning.innerHTML =  "";
        }
    }
});

