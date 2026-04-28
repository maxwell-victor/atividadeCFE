//efeito do botão voltar ao Topo
function topo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//Validação de Login
function login() {
    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (usuario === '' || senha === '') {
        alert('Por favor, preencha todos os campos!');
        return false;
    }

    if (senha.length < 6) {
        alert('A senha deve ter no mínimo 6 caracteres!');
        return false;
    }

    alert('Login realizado com sucesso! Bem-vindo, ' + usuario + '!');
    return false;
}

//Ativar alert no botão cadastrar (duplicado - removido para evitar conflito)
// O botão agora usa apenas onclick="cadastro()" no HTML

//Função para processar cadastro
function cadastro() {
    const usuario = document.getElementById('usuario2').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha2').value.trim();

    if (usuario === '' || email === '' || senha === '') {
        alert('Por favor, preencha todos os campos!');
        return false;
    }

    if (senha.length < 6) {
        alert('A senha deve ter no mínimo 6 caracteres!');
        return false;
    }

    alert('Cadastro realizado com sucesso! Bem-vindo, ' + usuario + '!');
    return false;
}
