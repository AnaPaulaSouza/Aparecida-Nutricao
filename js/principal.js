var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var tdAltura = tdPeso.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValido = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
    }

    if(altura <= 0 || altura >= 3.00){
        console.log("Altura inválido");
        alturaEhValido = false;
        tdImc.textContent = "Altura Inválido!"
    }

    if(alturaEhValido && pesoEhValido){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc;
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    console.log("Oi, cliquei");
});


/*titulo.addEventListener("click", function(){
    console.log("Clicando")
});*/
