const form = document.getElementById('formulario');
const lista_tarefas = document.getElementById('tarefas');

//
form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById('novaTarefa');
    adicionar(inputField.value);
    form.reset();
}



function adicionar(description){
    const conj_tarefas = document.createElement('div');
    const input_tarefa = document.createElement('input');
    const label_tarefa = document.createElement('label');
    const tarefa_description = document.createTextNode(description);

    //cria uma checkbox, coloca name e id na checkbox 
    input_tarefa.setAttribute('type', 'checkbox');
    input_tarefa.setAttribute('name', description);
    input_tarefa.setAttribute('id', description);

    //cria um for, imprimindo as tarefas
    label_tarefa.setAttribute('for', description);
    label_tarefa.appendChild(tarefa_description);

    conj_tarefas.classList.add('task-item');
    conj_tarefas.appendChild(input_tarefa);
    conj_tarefas.appendChild(label_tarefa);
    
    lista_tarefas.appendChild(conj_tarefas);


}