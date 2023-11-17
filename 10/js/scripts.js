
// // function minhaFuncao(){
// //     console.log("Olá função");
// // }

// // minhaFuncao();


// // const minhaFuncaoEmVariavel = function (){
// //     console.log("Minha função em variável")
// // }
// // minhaFuncaoEmVariavel()


// // function funcaoComParametro(abacate){
// //     console.log(`Imprimindo ${abacate}`)
// // }

// // funcaoComParametro("Opa")
// // funcaoComParametro("Calma")
// // funcaoComParametro("Jovem")


// const a = 10; 
// const b = 20; 
// const c = 30; 
// const d = 40; 

// function soma(n1, n2){
//     return n1 + n2; 
// } 

// function sub(n1, n2){
//     return n1 - n2; 
// } 

// console.log(soma(a, b));
// console.log(sub(a, b));

// const resultado = soma(c, a);
// console.log(resultado)


// const testeArrow = () => {
//     console.log("Esta é uma função Anônima")
// };

// testeArrow()


// const parOuImpar = (n) => {
//     if (n % 2 === 0){
//         console.log("Par");
//         return;
//     }
//     console.log("Impar")
// };

// parOuImpar(5);
// parOuImpar(3);
// parOuImpar(7);


// // Parâmetros opcionais

// const multiplication = (n, m) => {
//     if (m === undefined) {
//         return n * 2;
//     } else {
//         n * m;
//     }
// }

// console.log(multiplication(4,4))
// console.log(multiplication(4))




const lista = [ 1, 2 , 3, 4, 5,];

console.log(lista);
console.log(typeof lista);

const itens = ["Mateus", true, 7, 4.44 ]
console.log(itens);
console.log(itens[0]);
console.log(itens[3]);

console.log(itens.length);

// metodos em array

const a = [1, 2, 3]
const b = itens.concat(a).concat(lista); 
console.log(b); 

// Objetos

const person = {
    name: "Rodox",
    age: 37,
    job: "Programaodor",
}; 

console.log(person.job);

