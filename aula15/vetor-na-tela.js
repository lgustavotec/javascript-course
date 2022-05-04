let valores = [2, 6, 5, 3, 4, 7]
valores.sort()

// console.log(valores)

/* console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])


for(let position=0; position < valores.length; position++) {
    console.log(`A posição ${position} tem o valor ${valores[position]}`)
}
*/



for(let position in valores) {
    console.log(`a posição ${position} tem o valor ${valores[position]}`)
}