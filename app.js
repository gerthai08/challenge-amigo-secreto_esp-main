let nombreAmigo = [];

function agregarAmigo(){
    let input = document.getElementById("amigo");
    let amigo = input.value.trim();

    if (amigo === "") {
    //si el nombreAmigo es igual a nada, salta la alerta
    alert("Por favor, inserte un nombre.")
    } else {
        //agrega el input al arreglo "nombreAmigo"
        nombreAmigo.push(amigo);
        //se reinicia input.
        input.value = "";
    }
}
