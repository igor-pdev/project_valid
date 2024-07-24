document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio do formulário para validação

        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');

        let isValid = true;

        // Validação do Nome de Usuário
        if (username.value.trim() === '') {
            showError(username, 'Nome de usuário é obrigatório.');
            isValid = false;
        } else {
            clearError(username);
        }

        // Validação do Email
        if (email.value.trim() === '') {
            showError(email, 'Email é obrigatório.');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            showError(email, 'Email inválido.');
            isValid = false;
        } else {
            clearError(email);
        }

        // Validação da Senha
        if (password.value.trim() === '') {
            showError(password, 'Senha é obrigatória.');
            isValid = false;
        } else {
            clearError(password);
        }

        // Validação da Confirmação de Senha
        if (confirmPassword.value.trim() === '') {
            showError(confirmPassword, 'Confirmação de senha é obrigatória.');
            isValid = false;
        } else if (password.value !== confirmPassword.value) {
            showError(confirmPassword, 'As senhas não coincidem.');
            isValid = false;
        } else {
            clearError(confirmPassword);
        }

        if (isValid) {
            form.submit(); // Submete o formulário se todas as validações passarem
        }
    });

    function showError(input, message) {
        const formGroup = input.parentElement;
        formGroup.querySelector('.error-message').textContent = message;
    }

    function clearError(input) {
        const formGroup = input.parentElement;
        formGroup.querySelector('.error-message').textContent = '';
    }
});
