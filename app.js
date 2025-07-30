let nombreAmigo = [];

function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
    //Si el nombreAmigo es igual a nada, salta la alerta
    alert("Por favor, inserte un nombre.")
    } else {
        //Agrega el input al arreglo "nombreAmigo"
        nombreAmigo.push(nombre);
        //Se reinicia input.
        input.value = "";
        recorrerListaAmigos();
    }
}

function recorrerListaAmigos(){
    //Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");
    //Limpiar lista existente
    lista.innerHTML = "";

    for (let i = 0; i < nombreAmigo.length; i++) {
        const li = document.createElement("li");
        li.textContent = nombreAmigo[i];
        lista.appendChild(li);
    }
    
    console.log(nombreAmigo);
}

function sortearAmigo(){
    //Validar que haya al menos un amigo
    if (nombreAmigo.length === 0) {
        alert("No hay amigos para sortear.")
        return;
    }

    //Generar un indice random
    const indiceAleatorio = Math.floor(Math.random()* nombreAmigo.length);

    //Obtener el nombre del sorteado
    const amigoSorteado = nombreAmigo[indiceAleatorio];

    //Mostrar los resultados
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

function reinciar(){
    //Vacias la array
    nombreAmigo = [];

    //Limpiar la lista de amigos
    document.getElementById("listaAmigos").innerHTML = "";

    //Limpiar el resultado del sorteo
    document.getElementById("resultado").innerHTML = "";

    //Alerta de que el juego se reinció
    alert("Se a reiniciado la lista de amigos y el sorteo");
}