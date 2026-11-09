/*Crie um programa que receba o usuário e a senha em variáveis. Exiba a mensagem 
"Acesso permitido" apenas se o usuário for exatamente "admin" e a senha for 
"1234".*/

var usuario = "admin"
var senha = 1234

if (usuario == "admin" && senha == 1234) {
    console.log("Acesso permitido!")
}else {
    console.log("Acesso NEGADO!")
}