// Registration form validation and functionality
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const captchaQuestion = document.getElementById('captchaQuestion');
    const refreshCaptchaBtn = document.getElementById('refreshCaptcha');
    
    let captchaAnswer = 0;
    
    // Generate a simple math captcha
    function generateCaptcha() {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        captchaAnswer = num1 + num2;
        captchaQuestion.textContent = `${num1} + ${num2} = ?`;
    }
    
    // Initialize captcha
    generateCaptcha();
    
    // Refresh captcha
    refreshCaptchaBtn.addEventListener('click', generateCaptcha);
    
    // Email validation - must be @limu.edu.ly
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@limu\.edu\.ly$/;
        return emailRegex.test(email);
    }
    
    // Password validation - at least 6 characters
    function validatePassword(password) {
        return password.length >= 6;
    }
    
    // Confirm password validation
    function validateConfirmPassword(password, confirmPassword) {
        return password === confirmPassword;
    }
    
    // Captcha validation
    function validateCaptcha(answer) {
        return parseInt(answer) === captchaAnswer;
    }
    
    // Real-time validation
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const captchaInput = document.getElementById('captchaAnswer');
    
    emailInput.addEventListener('input', function() {
        if (validateEmail(this.value)) {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
        }
    });
    
    passwordInput.addEventListener('input', function() {
        if (validatePassword(this.value)) {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
        }
        
        // Also validate confirm password when password changes
        if (confirmPasswordInput.value) {
            if (validateConfirmPassword(this.value, confirmPasswordInput.value)) {
                confirmPasswordInput.classList.remove('is-invalid');
                confirmPasswordInput.classList.add('is-valid');
            } else {
                confirmPasswordInput.classList.remove('is-valid');
                confirmPasswordInput.classList.add('is-invalid');
            }
        }
    });
    
    confirmPasswordInput.addEventListener('input', function() {
        if (validateConfirmPassword(passwordInput.value, this.value)) {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
        }
    });
    
    captchaInput.addEventListener('input', function() {
        if (validateCaptcha(this.value)) {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
        }
    });
    
    // Form submission
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const captcha = captchaInput.value;
        const terms = document.getElementById('terms').checked;
        
        // Validate all fields
        let isValid = true;
        
        if (!name) {
            document.getElementById('name').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('name').classList.remove('is-invalid');
            document.getElementById('name').classList.add('is-valid');
        }
        
        if (!validateEmail(email)) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        } else {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
        }
        
        if (!validatePassword(password)) {
            passwordInput.classList.add('is-invalid');
            isValid = false;
        } else {
            passwordInput.classList.remove('is-invalid');
            passwordInput.classList.add('is-valid');
        }
        
        if (!validateConfirmPassword(password, confirmPassword)) {
            confirmPasswordInput.classList.add('is-invalid');
            isValid = false;
        } else {
            confirmPasswordInput.classList.remove('is-invalid');
            confirmPasswordInput.classList.add('is-valid');
        }
        
        if (!validateCaptcha(captcha)) {
            captchaInput.classList.add('is-invalid');
            isValid = false;
        } else {
            captchaInput.classList.remove('is-invalid');
            captchaInput.classList.add('is-valid');
        }
        
        if (!terms) {
            document.getElementById('terms').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('terms').classList.remove('is-invalid');
        }
        
        // If all validations pass, submit the form
        if (isValid) {
            // In a real application, you would send this data to a server
            // For this demo, we'll just show a success message and redirect
            alert('Registration successful! You will now be redirected to the login page.');
            window.location.href = 'login.html';
        } else {
            // Show error message if validation fails
            alert('Please fix the errors in the form before submitting.');
        }
        
        registerForm.classList.add('was-validated');
    });
});