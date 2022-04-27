var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} Horas.`)
if (hora < 12) {
    console.log('Bomm Dia!!')
} else if (hora <=18) {
    console.log('Boa Tarde.') 
} else {
    console.log('Boa noite')
} 