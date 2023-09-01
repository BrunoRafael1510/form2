function nada() {
    if (emaill == "" || senhaa == "") {
        alert("Obrigatório o preenchimento do email e senha");
        document.querySelector("#emaill").focus()
    } else {
        pesquisa
    }
}

function pesquisa(emaill, senhaa) {

    if (emaill == "Brunin" && senhaa == "123456") {
        
        window.location("index.html");
        
    } else {
        alert("Email ou senha inválido");
        document.querySelector("#emaill").focus()
    }
};

