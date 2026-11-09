/*Crie um programa que receba a temperatura atual e uma informação se está 
chovendo ou não (true ou false). Se a temperatura for menor que 15 graus ou se 
estiver chovendo, o programa deve exibir a mensagem "Leve um casaco". Caso 
contrário, deve exibir "Vestuário livre".*/

var temperaturaAtual = 15
var chuva = true

if (temperaturaAtual < 15 || chuva) {
    console.log("Leve um casaco!")
}else{
    console.log("Vestuário livre!")
}