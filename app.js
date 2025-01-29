// Arreglo para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtiene el campo de entrada de texto
    const input = document.getElementById("amigo");
    // Obtener el valor ingresado y elimina espacios en blanco adicionales
    const nombre = input.value.trim(); 

    // Verifico si el campo está vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return; // Termina la ejecución de la función retornando
    }

    // Verifica si el nombre ya existe en la lista
    if (listaAmigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert("Ese nombre ya está en la lista.");
        return; // Termina la ejecución de la función
    }

    // Agregar el nombre arreglo listaAmigos
    listaAmigos.push(nombre);

    // Actualiza la lista de amigos en el HTML
    actualizarLista();

    // Limpia el campo de entrada de texto
    input.value = ""; // el valor = Vacía el texto ingresado
    // Coloca el cursor en el campo de entrada
    input.focus(); 
}

// Función para actualizar visualmente la lista de amigos en el HTML
function actualizarLista() {
    // Obtiene el elemento <ul> donde se mostrarán los nombres
    const listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; // Limpiar contenido previo en la lista

    // Recorre el arreglo listaAmigos y agrega cada nombre al HTML
    listaAmigos.forEach((amigo, index) => {
        // Crea un elemento <li> para cada amigo
        const li = document.createElement("li"); 
        // Asigna el nombre del amigo 
        li.textContent = amigo; 

        // botón para eliminar el nombre
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌"; //  ícono del botón
        botonEliminar.classList.add("delete-button");
        //función para eliminar el amigo al hacer clic
        botonEliminar.onclick = () => eliminarAmigo(index); 

        li.appendChild(botonEliminar); 
        listaHTML.appendChild(li); 
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    // Elimina el amigo del arreglo según el índice
    listaAmigos.splice(index, 1); 
    // Actualiza la lista
    actualizarLista(); 
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = ""; // Limpiar el contenido previo en el resultado
    const listaHTML = document.getElementById("listaAmigos");

    // Verifica si la lista de amigos está vacía
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Todos los nombres han sido sorteados.");
        return; // Termina la ejecución de la función
    }

    // índice aleatorio basado en el tamaño de la lista
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    // para obtener el nombre del amigo secreto
    const amigoSecreto = listaAmigos[indiceAleatorio]; 
    // elemento <li> para mostrar el resultado
    const liResultado = document.createElement("li");
    // Muestra el nombre del amigo secreto
    liResultado.textContent = `Tu amigo secreto es: ${amigoSecreto}`; 
    resultadoHTML.appendChild(liResultado);

    // Elimina el amigo seleccionado de la lista
    listaAmigos.splice(indiceAleatorio, 1);

    // Ocultar la lista de amigos después de mostrar el resultado
    listaHTML.style.display = "none";

    // Actualizar la lista visualmente (sin el amigo ya sorteado)
    actualizarLista();

    // La lista no volverá a mostrarse después de esto
}
