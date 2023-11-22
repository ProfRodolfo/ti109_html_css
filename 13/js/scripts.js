
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