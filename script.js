document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const togglePasswordIcon = document.getElementById('togglePassword');

    // 1. Toggle Password Visibility (Eye Icon Click)
    togglePasswordIcon.addEventListener('click', () => {
        // Check current state and switch type
        const isPassword = passwordInput.getAttribute('type') === 'password';
        passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
        
        // Dynamically shift icons between eye and slashed-eye
        if (isPassword) {
            togglePasswordIcon.classList.remove('fa-eye');
            togglePasswordIcon.classList.add('fa-eye-slash');
        } else {
            togglePasswordIcon.classList.remove('fa-eye-slash');
            togglePasswordIcon.classList.add('fa-eye');
        }
    });

    // 2. Handle Form Submission
    loginForm.addEventListener('submit', (event) => {
        // Prevents page refresh on button press
        event.preventDefault(); 
        
        const email = document.getElementById('email').value;
        const password = passwordInput.value;
        const rememberMe = document.getElementById('rememberMe').checked;

        // Capture user credentials safely for database/API calls
        console.log('Form Submitted Successfully:', {
            email: email,
            password: password,
            remember: rememberMe
        });

        // Optional: Add custom front-end validation or loading spinner logic below
    });
});