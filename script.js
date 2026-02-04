// Variáveis globais
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const searchInput = document.getElementById('searchInput');

// Função para adicionar tarefa
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }
    
    // Criar o <li>
    const li = document.createElement('li');
    
    // Criar um span para o texto da tarefa
    const span = document.createElement('span');
    span.textContent = taskText;

    // Criar botão de concluir
    const completeButton = document.createElement('button');
    completeButton.textContent = '✔';
    completeButton.className = 'complete-btn';

    completeButton.addEventListener('click', function() {
        li.classList.toggle('completed');
        setTimeout(updateProgress, 0);
    });

    // Criar botão de editar
    const editButton = document.createElement('button');
    editButton.textContent = '✏️';
    editButton.className = 'edit-btn';

    editButton.addEventListener('click', function() {
        const currentText = span.textContent;
        
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        input.className = 'edit-input';

        li.replaceChild(input, span);
        input.focus();

        // Salvar ao apertar Enter
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                const newText = input.value.trim();

                if (newText !== '') {
                    span.textContent = newText;
                    li.replaceChild(span, input);
                } else {
                    alert('A tarefa não pode estar vazia!');
                }
            }
        });

        // Salvar ao perder o foco
        input.addEventListener('blur', function() {
            const newText = input.value.trim();
            
            if (newText !== '') {
                span.textContent = newText;
                li.replaceChild(span, input);
            } else {
                li.replaceChild(span, input);
            }
        });
    });
    
    // Criar botão de remover
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete-btn';
    
    deleteButton.addEventListener('click', function() {
        li.remove();
        setTimeout(updateProgress, 0);
    });

    // Adicionar elementos ao <li>
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    
    // Adicionar <li> à lista
    taskList.appendChild(li);
    
    // Limpar o input
    taskInput.value = '';

    // Atualizar progresso
    setTimeout(updateProgress, 0);
}

// Evento de clique no botão adicionar
addButton.addEventListener('click', addTask);

// Adicionar tarefa ao apertar Enter
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Função para atualizar progresso
function updateProgress() {
    const allTasks = document.querySelectorAll('#taskList li');
    const completedTasks = document.querySelectorAll('#taskList li.completed');

    const total = allTasks.length;
    const completed = completedTasks.length;

    let percentage = 0;
    if (total > 0) {
        percentage = (completed / total) * 100;
    }

    progressBar.style.width = percentage + '%';
    progressText.textContent = Math.round(percentage) + '% concluído (' + completed + '/' + total + ')';
}

// Função de pesquisa
function searchTasks() {
    const searchText = searchInput.value.toLowerCase();
    const allTasks = document.querySelectorAll('#taskList li');

    allTasks.forEach(function(task) {
        const taskText = task.querySelector('span').textContent.toLowerCase();

        if (taskText.includes(searchText)) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}

// Executar pesquisa ao digitar
searchInput.addEventListener('input', searchTasks);

// Função de filtro
function filterTasks(filterType) {
    const allTasks = document.querySelectorAll('#taskList li');
    
    allTasks.forEach(function(task) {
        const isCompleted = task.classList.contains('completed');
        
        switch(filterType) {
            case 'all':
                task.style.display = 'flex';
                break;
            case 'completed':
                if (isCompleted) {
                    task.style.display = 'flex';
                } else {
                    task.style.display = 'none';
                }
                break;
            case 'pending':
                if (!isCompleted) {
                    task.style.display = 'flex';
                } else {
                    task.style.display = 'none';
                }
                break;
        }
    });
}

// Eventos dos botões de filtro
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Remove classe active de todos
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Adiciona active no clicado
        button.classList.add('active');

        // Aplica o filtro
        const filterType = button.getAttribute('data-filter');
        filterTasks(filterType);
    });
});