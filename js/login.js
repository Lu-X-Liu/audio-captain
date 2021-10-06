const singupRadio = document.querySelector('.slide-controls #signup');
const loginRadio = document.querySelector('.slide-controls #login');

singupRadio.removeAttribute('checked');
loginRadio.setAttribute('checked', '');

(function () {
    const signupForm = document.querySelector("form.signup");
    const signupText = document.querySelector(".title-tabs-container .signup");

    signupForm.style.marginLeft = "-50%";
    signupText.style.marginLeft = "-50%"; 
})();
