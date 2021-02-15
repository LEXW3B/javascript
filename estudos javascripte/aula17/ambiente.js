let num = [5, 0, 2, 3, 4]
num.push(1)
num.sort()
console.log(num)
console.log(num.length)
console.log(num[0])
let pos = num.indexOf(4)
if (pos== -1) {
    console.log('o valor nao foi encontrado!')
} else {
    console.log(`o valor esta na posiçao ${pos}`)
}
