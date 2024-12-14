//---------------MAIN FUNC------------------------------------
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
}); 

/*=============== SIGN IN===============*/
document.getElementById('signin_btn').addEventListener('click', function () {
    window.location.href = 'main.html'; // Replace 'homepage.html' with your target URL
});

/*=============== SIGN up ===============*/
document.getElementById('signup_btn').addEventListener('click', function(e) {
    // Prevent default form submission if inside a form
    e.preventDefault();
    window.location.href = 'main.html';
});



/*=============== SHOW HIDE PASSWORD LOGIN ===============*/
const passwordLogin = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass), 
        iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () => {
        input.type === 'password' ? input.type = 'text'
                                : input.type = 'password'

        iconEye.classList.toggle('ri-eye-fill')
        iconEye.classList.toggle('ri-eye-off-fill')
        
    })
}

passwordLogin('logpassword', 'logpassword_eye')

/*=============== SHOW HIDE PASSWORD CREATE ACCOUNT ===============*/
const passwordRegister = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass), 
        iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () => {
        input.type === 'password' ? input.type = 'text'
                                : input.type = 'password'

        iconEye.classList.toggle('ri-eye-fill')
        iconEye.classList.toggle('ri-eye-off-fill')
        
    })
}

passwordRegister('regpassword', 'regpassword_eye')

/*=============== SHOW HIDE LOGIN & CREATE ACCOUNT ===============*/
const loginAccessRegister = document.getElementById('loginAccessRegister'),
    buttonRegister = document.getElementById('loginButtonRegister')
    buttonLogin = document.getElementById('loginButtonAccess')

buttonRegister.addEventListener('click', () => {
    loginAccessRegister.classList.add('active')
})

buttonLogin.addEventListener('click', () => {
    loginAccessRegister.classList.remove('active')
})
