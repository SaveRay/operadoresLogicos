/*Um aluno é aprovado se tiver nota maior ou igual a 7 e frequencia maior ou igual a 
75%. Porém, se ele tiver nota menor que 7, mas tiver o trabalhoExtra como true e 
frequencia maior ou igual a 75%, ele também é aprovado. Crie a lógica para 
verificar a situação do aluno.*/

var nota = 7
var frequencia = 75
var trabalhoExtra = true

if (nota >=7 && frequencia >=75 || nota < 7 && frequencia >=75 && trabalhoExtra) {
    console.log("O aluno informado esta como: APROVADO!")
}else {
    console.log("O aluno informado esta como: REPROVADO!")
}