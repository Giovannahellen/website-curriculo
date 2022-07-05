// Javascript do formulário

function contato(){ 

var nome = document.getElementById('nome').value;
var email = document.getElementById('email').value;
var assunto = document.getElementById('assunto').value;
var mensagem = document.getElementById('mensagem').value;

if ( !nome || !email || !assunto || !mensagem ){ alert("Preencha todos os campos de contato, por favor!") }

else { alert("Campos preenchidos com sucesso, obrigado pela identificação!"); }

}        