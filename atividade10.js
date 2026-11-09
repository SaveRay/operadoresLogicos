/*Uma loja online oferece frete grátis se o valorCompra for maior que R$ 100 ou se o 
cliente for membroVIP. No entanto, o frete grátis não se aplica se a entrega for para 
zonaRural. Crie o programa que retorne se o cliente tem direito ao frete grátis.*/

var valorCompra = 110
var membroVip = true
var zonaRural = false

if (!zonaRural && (valorCompra > 100 || membroVip )) {
    console.log("Você tem direito ao frete grátis")
}else {
    console.log("Você não tem direito ao frete grátis")
}