/*O cinema dá desconto se o dia da semana for "quarta-feira" ou se o cliente for 
"estudante". Crie um programa que receba o dia e a condição de estudante 
(true/false) e informe se ele tem direito ao desconto.*/

var diaSemana = "quarta-feira"
var condicaoEstudante = false

if (diaSemana == "quarta-feira" || condicaoEstudante) {
    console.log("Você tem direito ao desconto!")
}else {
    console.log("Você pagará o valor total!")
}