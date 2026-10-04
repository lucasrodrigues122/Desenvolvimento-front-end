const inputTarefa = document.querySelector("#novaTarefa");
const listaTarefas = document.querySelector("#listaTarefas");

function adicionarTarefa() {
    const texto = inputTarefa.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa válida!");
        return;
    }

    const novaLi = document.createElement("li");

    novaLi.textContent = texto;

    novaLi.onclick = function () {
        novaLi.remove();
    };

    listaTarefas.appendChild(novaLi);
    
    inputTarefa.value = "";
    inputTarefa.focus();
}