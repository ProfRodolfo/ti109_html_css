
const btn = document.querySelector("#my-button");
btn.addEventListener("click", function (){
    console.log("Clicou!!");
});


const secondBtn = document.querySelector("#btn");

function imprimirMensagem(){
    console.log("Evento disparado!!!");
}

secondBtn.addEventListener("click", imprimirMensagem); 

const thirdBtn = document.querySelector("#other-btn");
thirdBtn.addEventListener("click", () => {
    console.log("Evento Removido")
    secondBtn.removeEventListener("click", imprimirMensagem);
})

const title = document.querySelector("#my-title"); 

// title.addEventListener("click", (event) => {
//     console.log(event); 
// });

title.addEventListener("click", (e) => {
    console.log(e.target); 
    console.log(e.offsetX); 
    console.log(e.pointerType); 
});

const containerBtn = document.querySelector("#btn-container");

const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1 - Div");
})

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation(); 
    console.log("Evento 2 - Button");
});

const link1 = document.querySelector("a") 

link1.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Não alterou nada!");
});

document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`); 
});
document.addEventListener("keydown", (e) => {
    console.log(`Pressionou a tecla ${e.key}`); 
});

const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () =>{
    console.log("pressionou o botão");
});
mouseEvents.addEventListener("mouseup", () =>{
    console.log("soltou o botão");
});
mouseEvents.addEventListener("dblclick", () =>{
    console.log("clique duplo");
});


// document.addEventListener("mousemove", (e) =>{
//   console.log(`No eixo X: ${e.x}`);  
//   console.log(`No eixo y: ${e.y}`);  
// });

window.addEventListener("scroll", (e) => {
    if(window.scrollY > 200) {
        console.log("Passamos de 200px!")
    }
});

const input = document.querySelector("#my-input");

input.addEventListener("focus" , (e) => {
    console.log("Entrou no input");
})
input.addEventListener("blur" , (e) => {
    alert("Saiu do  input");
}) 