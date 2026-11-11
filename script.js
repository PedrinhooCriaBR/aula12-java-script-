// document.writeln("<h1>São Paulo FC</h1>");



// var a = 22;
// var b = 60;

// soma = a + b
// document.writeln(soma)

var nome = prompt("Digite seu nick: ")
document.write("<h1>Bem vindo "+nome+"!</h1>")


var idade = prompt("Digite sua idade: ")
document.write("<h1>Eae ancião, "+idade+" anos </h1>")

var peso = parseInt(prompt("digite seu peso"));
var altura = parseFloat(prompt("digite sua altura"));

conta = peso/altura**2

document.write("<h1> voce tem isso de IMC:" +conta+ "</h1>")