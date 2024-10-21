 
        document.getElementById('username').addEventListener('input', function() {
            var username = this.value;
            var errorMessage = document.getElementById('username-error');
            if (username.length < 3 || username.length > 25) {
                errorMessage.style.display = 'block';
            } else {
                errorMessage.style.display = 'none';
            }
        });

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

        document.getElementById('confirm-password').addEventListener('input', function() {
            var confirmPassword = this.value;
            var password = document.getElementById('password').value;
            var errorMessage = document.getElementById('confirm-password-error');
            if (confirmPassword !== password) {
                errorMessage.style.display = 'block';
            } else {
                errorMessage.style.display = 'none';
            }
        });
   



