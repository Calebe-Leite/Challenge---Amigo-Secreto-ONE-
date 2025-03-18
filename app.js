let amigos = [];

function adicionarAmigo() {
    
    const nome = document.getElementById("amigo").value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);

    atualizarListaDeAmigos();

    document.getElementById("amigo").value = "";
}

function atualizarListaDeAmigos() {
    
    const lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("Adicione amigos para realizar o sorteio.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}