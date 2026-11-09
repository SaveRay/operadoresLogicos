/*Um sistema de alarme deve disparar se a portaAberta for true ou se a janelaAberta 
for true. Escreva uma estrutura de condição que exiba "Alarme Disparado!" 
quando qualquer uma das duas estiver aberta.*/

var portaAberta = true
var janelaAberta = true

if (portaAberta || janelaAberta) {
    console.log("ALARME DISPARADO!")
}else {
    console.log("Local seguro!")
}