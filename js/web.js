//Botões 
var btv = document.getElementById('validar');
var form = document.getElementById('form')
btv.addEventListener('click', validar);
form.addEventListener('submit', validar);

var subNome = document.getElementById("campoNome");
var subEmail = document.getElementById("campoEmail");
var subCPF = document.getElementById("campoCPF");
var subRG = document.getElementById("campoRG");
var subTel = document.getElementById("campoTel");
var subData = document.getElementById("campoData");
var subSenha = document.getElementById("campoSenha");
var subCsenha = document.getElementById("campoCsenha");


// Função VALIDAR o form
function validar(e) {
    if ((validarNome() === false) || (validarEmail() === false) || (validarCPF() === false) || (validarRG() === false) || (validarTelefone() === false) || (validarData() == false) || (validaSenha() == false) || (confirmarSenha() == false)) {
        e.preventDefault(); // Cancela a submissão do formulário
    }
}

// Validação Nome
function validarNome() {
    var nm1 = document.getElementById('nm').value;

    if (nm1 === '' || nm1 < 5) {
        subNome.innerHTML = "Nome inválido";
        subNome.classList.add("erro")
        return false;
    } else {
        subNome.classList.remove("erro")
        subNome.classList.add("certo")
        subNome.innerHTML = "Nome válido!";
        return true;
    }
}

// Validação E-mail
function validarEmail() {
    var em1 = document.getElementById('em').value;
    var partesEmail = em1.split("@");

    if (em1.indexOf(".") === -1 || em1.indexOf("@") === -1 || em1.indexOf(" ") >= 0 || partesEmail.length !== 2 || partesEmail[0].length === 0 || partesEmail[1].length === 0) {
        subEmail.innerHTML = "Email inválido, ultize um email válido sem espaços, e certifique-se que contém caracteres antes e depois do @ e com pelo menos uma extensão no email '.', ex: 'xx.com'";
        subEmail.classList.add("erro")
        return false;
    } else {
        subEmail.classList.remove("erro")
        subEmail.classList.add("certo")
        subEmail.innerHTML = "Email válido!";
        return true;
    }
}

// Validação CPF

function validarCPF() {
    var cpf1 = document.getElementById("cp").value;


    if (cpf1.length !== 11 || isNaN(cpf1) || cpf1.indexOf(" ") >= 0) {
        subCPF.innerHTML = "CPF inválido, ultilize um cpf válido de 11 dígitos, ex: '01234567890'";
        subCPF.classList.add("erro")
        return false;
    } else {
        subCPF.classList.remove("erro")
        subCPF.classList.add("certo")
        subCPF.innerHTML = "CPF válido!";
        return true;
    }
}
//Validação RG 
function validarRG() {
    var rg1 = document.getElementById("rg").value;

    if (rg1.length !== 10 || isNaN(rg1) || rg1.indexOf(" ") >= 0) {
        subRG.innerHTML = "RG inválido, ultilize um rg válido de 10 dígitos, ex: '0123456789'";
        subRG.classList.add("erro")
        return false;
    } else {
        subRG.classList.remove("erro")
        subRG.classList.add("certo")
        subRG.innerHTML = "RG válido!";
        return true;
    }
}

//Validação Telefone
function validarTelefone() {
    var tel1 = document.getElementById("tel").value;

    if (tel1.length !== 10 || isNaN(tel1) || tel1.indexOf(" ") >= 0) {
        subTel.innerHTML = "Telefone inválido, utilize um telefone válido de 11 dígitos ex: '54123456789'";
        subTel.classList.add("erro")
        return false;
    } else {
        subTel.classList.remove("erro")
        subTel.classList.add("certo")
        subTel.innerHTML = "Telefone válido!";
        return true;
    }
}

//Validação Data Nascimento
function validarData() {
    var data1 = document.getElementById("datan").value;

    var data = new Date(data1);
    var hoje = new Date();

    if ((hoje.getFullYear() - data.getFullYear()) < 15 || data > hoje || (data1.indexOf(" ") >= 0)) {
        subData.innerHTML = "Data inválida, é necessário ter mais de 15 anos para concluir o formulário ou a data inserida está no futuro.";
        subData.classList.add("erro");
        return false;
    } else {
        subData.classList.remove("erro");
        subData.classList.add("certo");
        subData.innerHTML = "Data válida!";
        return true;
    }
}

function validaSenha() {
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("csenha").value;

    var caractereEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (!caractereEspecial.test(senha) || senha.indexOf(" ") >= 0) {
        subSenha.innerHTML = "Senha inválida, é necessário ter um caractere especial para aumentar sua segurança.";
        subSenha.classList.add("erro"); return false;
    } else {
        subSenha.innerHTML = "Senha Forte!";
        subSenha.classList.remove("erro"); subSenha.classList.add("certo"); return true;
    }
}

function confirmarSenha() {
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("csenha").value;

    if (senha !== confirmarSenha || confirmarSenha.indexOf(" ") >= 0) {
        subCsenha.innerHTML = "A confirmação de senha não coincide com a senha digitada.";
        subCsenha.classList.add("erro");
        return false;
    } else {
        subCsenha.innerHTML = "As senhas coincidem!";
        subCsenha.classList.remove("erro");
        subCsenha.classList.add("certo");
        return true;
    }
}
