let amigo = {nome: 'alex',
sexo: 'm',
peso: 85.4,
engordar (p=0) {
    console.log('engordou')
    this.peso += p
}}

amigo.engordar(1)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)