/*Uma loja funciona apenas de segunda a sexta-feira, no horário das 8h às 18h. Crie 
um programa que receba o dia da semana e a hora atual (número inteiro) e informe 
se a loja está aberta ou fechada.*/

var diaSemana = "segunda-feira"
var horaAtual = 9

if (diaSemana == "segunda-feira" || diaSemana == "terça-feira" || diaSemana == "quarta-feira" || diaSemana == "quinta-feira" || diaSemana == "sexta-feira") {
    if (horaAtual >= 8 && horaAtual <= 18) {
        console.log("Loja aberta!")
    }else {
    console.log("loja fechada")
    }
        
}else {
    console.log("loja fechada")
}