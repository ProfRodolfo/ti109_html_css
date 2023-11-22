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

// class CachorroClasse {
//     constructor (nome, raca){
//         this.nome = nome;
//         this.raca = raca;
//     }
// }

// const jeff = new CachorroClasse("Jeff", "Labrador")
// console.log(jeff)
// console.log(jeff.nome)
// console.log(jeff.raca)


// class Caminhao {
//     constructor (eixos, cor) {
//         this.eixos = eixos;
//         this.cor = cor; 
//     }
//     descreverCaminhao() {
//         console.log(
//             `Este caminhão tem: ${this.eixos} eixos \n
//              Este caminhão é da cor: ${this.cor} `
//         );
//     }
// }

// const scania= new Caminhao(6, "Vermelha");

// scania.descreverCaminhao()

// Caminhao.prototype.motor = 4.0;
// console.log(Caminhao.motor);


// // 11 - Override por prototype
// class Humano {
//     constructor(nome, idade){
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const rodox = new Humano("Rodolfo", 37);

// console.log(rodox); 

// Humano.prototype.idade = "Prefiro não comentar..";

// console.log(rodox.idade); 
// console.log(Humano.prototype.idade); 

// class Aviao {
//     constructor(marca, turbinas) {
//         this.marca = marca; 
//         this.turbinas = turbinas
//     }
// }


// const asas = Symbol()
// Aviao.prototype[asas] = 2; 


// const boeing = new Aviao("Boeing", 10); 

// console.log(boeing);
// console.log(boeing[asas])
// console.log(Aviao.prototype[asas]);


// class Post {
//     constructor (titulo, descricao, tags){
//         this.titulo = titulo;
//         this.descricao = descricao;
//         this.tags = tags; 
//     }
//     get exibirTitulo () {
//         return `Você está lendo: ${this.titulo}`;
//     }
//     set adicionar(tags){
//         const tagsArray = tags.split(", "); 
//         this.tags = tagsArray; 
//     }
// }

// const myPost = new Post("Post 1", "È um post sobre programação"); 

// console.log(myPost.exibirTitulo);

// myPost.adicionar = "programação, javascript, js, C#, git";

// console.log(myPost); 


class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor (patas, nome){
        super(patas, patas);;
        this.nome = nome;
    }
}

const shark = new Lobo(4, "Shark");
console.log(shark); 