let email = document.getElementById('email')
let senha = document.getElementById('senha')
let botao = document.getElementById('botaoLogin')

//Criando Evento dos Botões
document.getElementById('botaoLogin')
addEventListener('click', (e) => {
    e.preventDefault();
    window.open('../login.html')
    window.close();
}
);

document.getElementById('botaoCad')
    .addEventListener('click', (e) => {
        e.preventDefault();
        if (email.value !== "" || senha.value == "") {
            cadastro()
        } else {
            alert("Preencha todos campos")
            email.focus();
        }

    }
    );

//Criando CRUD no Storage

//Crate - Cadastrar
function cadastro() {

    let email = document.getElementById('email');
    let senha = document.getElementById('senha');
    let usuarios = new Array();
}
//Verificando se exitste USUARIO no Storage
if (localStorage.hasOwnProperty('usuarios')) {
    //Recuperar o Valor das Chaves Usuarios
    //Convertendo a chave USUARIOS em objeto
    ususarios = JSON.parse(localStorage.getItem('usuarios'));

}

//Adicionar um novo usuario no Storage
alert(email.value)
email = email.value
senha = senha.value

ususarios.push({ email, senha });

//Convertendo para String
localStorage.setItem('usuarios', JSON.stringify(usuarios))

alert("Usuario cadastrado com sucesso")
document.getElementById('email').value = '';
document.getElementById('senha').value = '';
document.getElementById('email').focus = '';