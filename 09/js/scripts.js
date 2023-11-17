console.log("Olá mundo novamente!");


// Number


console.log (2)
console.log(typeof 2)

//Operações aritimetica
console.log (2 + 4);
console.log(10 -5);
console.log(5*4);
console.log( 10/2); 


// concatenação e quebra de linha

console.log("Testando \n quebra de linha"); 

console.log("oi" + " tudo" + " bem ?");

console.log(`A soma de 2 + 2 é ${2+2}`);

// Comparações

console.log( 5 <= 5);
console.log( 5 < 5);
console.log( 5 == 5);
console.log( 5 != 5);
console.log( 9 == "9"); 
console.log( 9 === "9"); 

// Operadores lógicos

console.log(true && true);
console.log(true && false);
console.log(true || false);

// Variáveis

let nome = "Rodox"; 
console.log(nome); 

nome = "Rodox Teacher"
console.log(nome); 


// const age  = prompt("Digite sua idade")

// //console.log(`Você tem ${age} anos`); 
// alert(`Você tem ${age} anos`); 

console.log(Math.max(5, 2, 1, 10));

// Estrutura de repetição 


const m = 10; 

if (m >  5) {
    console.log("M é maior que 5 ")
} else {
    console.log("M é menor que 5")
}


if ( 1 > 2 ){
    console.log( "Teste")
} else if ( 2 > 3) {
    console.log("Teste 2")
} else if (4 > 5){
    console.log(" teste 3")
}else {
    console.log("Teste  4")
}

const userName ="Rodox";
const userAge = 37;

if(userName === "Cleiton") {
    console.log("Bem vindo Cleiton"); 
} else if (userName === "Rodox" && userAge === 37){
    console.log(`Olá ${userName}, você tem ${userAge} anos!`)
} else{
    console.log("Nenhuma condição aceita")
}

// while 
let p = 0;

while (p < 5) {
    console.log(`Repetindo ${p}`);
    p++;
}

// do while 

let t = 10;
do {
    console.log(`Valor de t: ${t}`)
    t = t - 1;
} while (t > 1); 


// for 

for (let i = 0; i < 10; i++) {
    console.log(`O i esta aumetando ${i}`);
    
}

// switch

const job = "advogado";
switch (job) {
    case "advogado":
        console.log("Vc é advogado")
        break;
    case "programador":
        console.log("Vc é programador")
        break;
    case "engenheiro":
        console.log("Vc é engenheiro")
        break;

    default:
        console.log("Profissão não encontrada")
        break;
}