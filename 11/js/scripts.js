// const animal = {
//     nome: "Bob",

//     latir: function () {
//         console.log("Au Au au!")
//     }
// }

// console.log(animal)
// console.log(animal.nome)
// animal.latir();


// const pessoa = {
//     nome: "Rodox",

//     getNome: function (){
//         return this.nome; 
//     },
//     setNome: function (novoNome){
//         this.nome = novoNome;
//     },
// };

// console.log(pessoa.getNome());
// console.log(pessoa.nome);

// // pessoa.setNome("Teacher Rodox")
// console.log(pessoa.getNome());

// const text = "asd";
// console.log(Object.getPrototypeOf(text));

// const cachorro = {
//     raca: null,
// };

// const pastorAlemao = Object.create(cachorro);

// pastorAlemao.raca = "Pastor Alemão";

// const bulldog = Object.create(cachorro);
// bulldog.raca = "Bulldog";

// console.log(pastorAlemao.raca);
// console.log(bulldog.raca);
// console.log(cachorro);


// function criarCachorro(nome, raca){
//     const cachorro = Object.create({});
//     cachorro.raca = raca;
//     cachorro.nome = nome;
//     return cachorro;
// }

// const bob = criarCachorro("Bob", "Vira Lata")
// console.log(bob)

// const jack = criarCachorro("Jack", "Poodle")
// console.log(jack)

// function Cachorro(nome, raca){
//     this.nome = nome;
//     this.raca = raca;
// }

// const husky = new Cachorro("Ozzy", "Husky");
// console.log(husky);
// console.log(husky.nome);
// console.log(husky.raca);

// Cachorro.prototype.uivar = function (){
//     console.log("Auuuuuu")
// }

// husky.uivar()

// console.log(Cachorro)

class CachorroClasse {
    constructor (nome, raca){
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador")
console.log(jeff)
console.log(jeff.nome)
console.log(jeff.raca)