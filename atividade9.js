/*Para entrar em um brinquedo do parque, a pessoa precisa ter altura maior ou igual 
a 1.50m e idade maior ou igual a 12 anos. Porém, se a pessoa tiver 
problemaCardiaco igual a true, ela não pode andar de jeito nenhum.*/

var altura = 1.50
var idade = 12
var problemaCardiaco = true

if (altura >= 1.50 && idade >= 12 && !problemaCardiaco) {
    console.log("Tem permissão para entrar no brinquedo!")
}else {
    console.log("Infelizmente você não tem permissão para entrar no brinquedo")
}