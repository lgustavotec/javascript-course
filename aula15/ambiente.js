let num = [1,3,2,5,4,6]
num.sort() // irá colocar em ordem crescente.
console.log(num)
console.log(`Esse vetor tem ${num.length} POSIÇÕES!`)
console.log(`O primeiro valor do vetor é o numero ${num[0]}`)


//num.push(7)  //adiciona o valor ao ultimo alrway
//num.length  // saber o valor do comprimento


//console.log(`O vetor tem ${num.length} posições`)

let pos = num.indexOf(6)
if(pos == -1) {
    console.log(`Esse valor nao existe! dentro do vetor!`)
} else {
    console.log(`o valor esta na posição ${pos}`)
}
