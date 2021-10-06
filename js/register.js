//singup / login

const signupForm = document.querySelector("form.signup");
const loginForm = document.querySelector("form.login");
const signupBtn = document.querySelector("label.signup");
const loginBtn = document.querySelector("label.login");
const signupLink = document.querySelector("form .signup-link a");
const loginLink = document.querySelector("form .login-link a");
const loginText = document.querySelector(".title-tabs-container .login");
const signupText = document.querySelector(".title-tabs-container .signup");

loginBtn.onclick = (()=> {
    signupForm.style.marginLeft = "-50%";
    signupText.style.marginLeft = "-50%";
});

signupBtn.onclick = (()=> {
    signupForm.style.marginLeft = "0";
    signupText.style.marginLeft = "0";
});

signupLink.onclick = (()=> {
    signupBtn.click();
    return false;
});

loginLink.onclick = (()=> {
    loginBtn.click();
    return false;
});

//pop-up window 
const forgotLink = document.querySelector(".forgot-link .forgot");
const forgotPopup = document.querySelector(".bg-pop-up");
const forgotCloseMark = document.querySelector(".close-mark-wrapper .close-mark");
const popupContent = document.querySelector(".pop-up-content-wrapper");
const popupFrame = document.querySelector(".forgot-pop-up");
forgotLink.onclick = (()=> {
    forgotPopup.style.display = "grid";
});

forgotCloseMark.onclick =(()=> {
    forgotPopup.style.display = "none"; 
}); 
//email sent
const submitBtn = document.querySelector(".forgot-form .btn");
const closeWrapper = document.querySelector(".close-mark-wrapper");
const inputField = document.querySelector(".forgot-form input");

//check if anything is typed in the input filed

submitBtn.disabled = true;

const checkInput = () => {
    if (inputField.value === '') {
        submitBtn.disabled = true;
    }
    else {
        submitBtn.disabled = false;
    }
}

inputField.addEventListener("input", checkInput);

//validate email format anything but _@_@._ , then display email sent.
function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
 };

submitBtn.addEventListener("click", successContent);

function successContent() {
    let userInput = document.querySelector(".forgot-form input").value;
    if (!emailIsValid(userInput)) {
        window.alert('Please type in a valid email!');
    } else {   
    forgotCloseMark.style.display = "none";
    popupContent.style.display = "none";
    let successCloseMark = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let successClosePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let successText = document.createElement("div");
    let successIcon = document.createElement("div");
    let successSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let successHeadline = document.createElement("h3");
    let successPara = document.createElement("p");
    successCloseMark.setAttribute("class", "success-close");
    successCloseMark.setAttribute("height", "16");
    successCloseMark.setAttribute("width", "16");
    successCloseMark.setAttribute("viewBox", "0 0 24 24");
    successClosePath.setAttribute("d", "M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z");
    closeWrapper.appendChild(successCloseMark);
    successCloseMark.appendChild(successClosePath);
    successText.setAttribute("class", "success-text");
    successIcon.setAttribute("class", "success-icon");
    successHeadline.innerText = "Password Rest Email Sent";
    successHeadline.setAttribute("class", "success-headline");
    successPara.innerHTML = "An email has been sent to the following email address: <span></span> Follow the directions in the email to rest your password.";
    successPara.setAttribute("class", "success-para");
    successSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    successSvg.setAttribute("width", "45");
    successSvg.setAttribute("height", "45");
    successSvg.setAttribute("viewBox", "0 0 24 24");
    svgPath.setAttribute("d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z");
    popupFrame.appendChild(successText);
    successText.appendChild(successIcon);
    successIcon.appendChild(successSvg);
    successSvg.appendChild(svgPath);
    successText.appendChild(successHeadline);
    successText.appendChild(successPara); 
    const displayEmail = document.querySelector(".success-para span");
    displayEmail.innerText = userInput;
    }
};

    /*success-close restore pupup*/

    const closeMarkWrapper = document.querySelector('.close-mark-wrapper');

    const newCloseMark = function(mutationList) {
        for(const mutation of mutationList) {
            if (mutation.type === 'childList') {
                const successCloseMark = document.querySelector('.success-close');
                successCloseMark.addEventListener('click', restorePopup);

                function restorePopup() { 
                    const successText = document.querySelector('.success-text');
                    const successCloseMark = document.querySelector('.success-close');
                    successText.style.display = 'none';
                    successCloseMark.style.display = 'none';
                    forgotCloseMark.style.display = "block";
                    popupContent.style.display = "block";
                    forgotPopup.style.display = "none";
                }; 
            }
        }
    };    

    const observerOption = {
        childList: true
    };

    const observer = new MutationObserver(newCloseMark);
    observer.observe(closeMarkWrapper, observerOption);

