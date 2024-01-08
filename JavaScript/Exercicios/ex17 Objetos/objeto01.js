let amigo = {nome: 'Sieg', idade: '26', altura: '1,95', sexo: 'M',peso: 70.4, engordar(p=0){
    console.log('Engordou')
    this.peso += p
}} 

amigo.engordar(2)
console.log(`Meu mano ${amigo.nome} pesa ${amigo.peso}kg`)