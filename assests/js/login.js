// Login form validation and functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginCaptchaQuestion = document.getElementById('loginCaptchaQuestion');
    const loginRefreshCaptchaBtn = document.getElementById('loginRefreshCaptcha');
    
    let loginCaptchaAnswer = 0;
    
    // Generate a simple math captcha
    function generateLoginCaptcha() {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        loginCaptchaAnswer = num1 + num2;
        loginCaptchaQuestion.textContent = `${num1} + ${num2} = ?`;
    }
    
    // Initialize captcha
    generateLoginCaptcha();
    
    // Refresh captcha
    loginRefreshCaptchaBtn.addEventListener('click', generateLoginCaptcha);
    
    // Email validation - must be @limu.edu.ly
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@limu\.edu\.ly$/;
        return emailRegex.test(email);
    }
    
    // Captcha validation
    function validateCaptcha(answer) {
        return parseInt(answer) === loginCaptchaAnswer;
    }
    
    // Real-time validation
    const loginEmailInput = document.getElementById('loginEmail');
    const loginPasswordInput = document.getElementById('loginPassword');
    const loginCaptchaInput = document.getElementById('loginCaptchaAnswer');
    
    loginEmailInput.addEventListener('input', function() {
        if (validateEmail(this.value)) {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
        }
    });
    
    loginPasswordInput.addEventListener('input', function() {
        if (this.value.length > 0) {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
        }
    });
    
    loginCaptchaInput.addEventListener('input', function() {
        if (validateCaptcha(this.value)) {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
        }
    });
    
    // Form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        // Get form values
        const email = loginEmailInput.value;
        const password = loginPasswordInput.value;
        const captcha = loginCaptchaInput.value;
        
        // Validate all fields
        let isValid = true;
        
        if (!validateEmail(email)) {
            loginEmailInput.classList.add('is-invalid');
            isValid = false;
        } else {
            loginEmailInput.classList.remove('is-invalid');
            loginEmailInput.classList.add('is-valid');
        }
        
        if (!password) {
            loginPasswordInput.classList.add('is-invalid');
            isValid = false;
        } else {
            loginPasswordInput.classList.remove('is-invalid');
            loginPasswordInput.classList.add('is-valid');
        }
        
        if (!validateCaptcha(captcha)) {
            loginCaptchaInput.classList.add('is-invalid');
            isValid = false;
        } else {
            loginCaptchaInput.classList.remove('is-invalid');
            loginCaptchaInput.classList.add('is-valid');
        }
        
        // If all validations pass, submit the form
        if (isValid) {
            // In a real application, you would send this data to a server for authentication
            // For this demo, we'll just show a success message and redirect
            alert('Login successful! You will now be redirected to the home page.');
            window.location.href = 'index.html';
        } else {
            // Show error message if validation fails
            alert('Please fix the errors in the form before submitting.');
        }
        
        loginForm.classList.add('was-validated');
    });
});