
        document.getElementById('password').addEventListener('input', function() {
            var password = this.value;
            var errorMessage = document.getElementById('password-error');
            var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
            if (!passwordPattern.test(password)) {
                errorMessage.style.display = 'block';
            } else {
                errorMessage.style.display = 'none';
            }
        });

        function showVerifyEmail() {
            document.getElementById('login-form').classList.add('hidden');
            document.getElementById('verify-email-form').classList.remove('hidden');
        }
    


