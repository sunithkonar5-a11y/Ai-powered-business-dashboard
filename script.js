document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');

    // Dynamic Multi-field Password dots visibility logic toggle configuration
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const targetId = icon.getAttribute('data-target');
            const passwordField = document.getElementById(targetId);
            
            const isHidden = passwordField.getAttribute('type') === 'password';
            passwordField.setAttribute('type', isHidden ? 'text' : 'password');
            
            if (isHidden) {
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            } else {
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            }
        });
    });

    // Handle verification checks on registration submit execution
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert("Verification mismatch error: Passwords do not match.");
            return;
        }

        console.log('Account Registration Payload submitted successfully.');
    });
});