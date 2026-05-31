// 1. ESTADO GLOBAL (Simulando o Banco de Dados)

let tasks = [
  {
    id: 1,
    title: "Configurar Docker Compose",
    desc: "Subir os containers do Node e Postgres",
    column: "todo",
  },
  {
    id: 2,
    title: "Criar Migration de Users",
    desc: "Usar Sequelize CLI",
    column: "doing",
  },
  {
    id: 3,
    title: "Estruturar o MVC",
    desc: "Criar pastas routes, controllers e models",
    column: "done",
  },
];

// 2. GERENCIAMENTO DE TEMA (Light / Dark)

const themeBtn = document.getElementById("btn-theme");
const themeIcon = document.getElementById("theme-icon");
const htmlEl = document.documentElement;

function initTheme() {
  const savedTheme = localStorage.getItem("@flowtask:theme") || "light";
  setTheme(savedTheme);
}

function setTheme(theme) {
  htmlEl.setAttribute("data-theme", theme);
  localStorage.setItem("@flowtask:theme", theme);
  themeIcon.textContent = theme === "dark" ? "🌙" : "☀️";
}

themeBtn.addEventListener("click", () => {
  const currentTheme = htmlEl.getAttribute("data-theme");
  setTheme(currentTheme === "light" ? "dark" : "light");
});

// 3. RENDERIZAÇÃO DOS CARDS

function renderBoard() {
  // Limpar colunas
  document.getElementById("list-todo").innerHTML = "";
  document.getElementById("list-doing").innerHTML = "";
  document.getElementById("list-done").innerHTML = "";

  let counts = { todo: 0, doing: 0, done: 0 };

  tasks.forEach((task) => {
    counts[task.column]++;
    const cardEl = createCardElement(task);
    document.getElementById(`list-${task.column}`).appendChild(cardEl);
  });

  // Atualizar contadores
  document.getElementById("count-todo").textContent = counts.todo;
  document.getElementById("count-doing").textContent = counts.doing;
  document.getElementById("count-done").textContent = counts.done;
}

function createCardElement(task) {
  const div = document.createElement("div");
  div.className = "card";

  // Define para qual coluna ele pode ir
  let moveButtons = "";
  if (task.column === "todo") {
    moveButtons = `<button class="card-action" onclick="moveTask(${task.id}, 'doing')">Iniciar ➔</button>`;
  } else if (task.column === "doing") {
    moveButtons = `<button class="card-action" onclick="moveTask(${task.id}, 'done')">Concluir ✓</button>`;
  } else if (task.column === "done") {
    moveButtons = `<button class="card-action" onclick="moveTask(${task.id}, 'todo')">↺ Refazer</button>`;
  }

  div.innerHTML = `
        <h4 class="card-title">${task.title}</h4>
        ${task.desc ? `<p class="card-desc">${task.desc}</p>` : ""}
        <div class="card-footer">
            <button class="card-action danger" onclick="deleteTask(${task.id})">Excluir</button>
            <div style="flex:1"></div>
            ${moveButtons}
        </div>
    `;
  return div;
}

// 4. AÇÕES DOS CARDS (CRUD em Memória)

window.moveTask = function (id, newColumn) {
  const taskIndex = tasks.findIndex((t) => t.id === id);
  if (taskIndex > -1) {
    tasks[taskIndex].column = newColumn;
    renderBoard();
  }
};

window.deleteTask = function (id) {
  tasks = tasks.filter((t) => t.id !== id);
  renderBoard();
};

// 5. MODAL (Criar Nova Tarefa)

const modal = document.getElementById("modal-overlay");
const btnNewCard = document.getElementById("btn-new-card");
const btnCloseModal = document.getElementById("modal-close");
const btnCancel = document.getElementById("btn-cancel");
const btnSave = document.getElementById("btn-save");

function openModal(defaultCol = "todo") {
  document.getElementById("input-column").value = defaultCol;
  document.getElementById("input-title").value = "";
  document.getElementById("input-desc").value = "";
  modal.removeAttribute("hidden");
  document.getElementById("input-title").focus();
}

function closeModal() {
  modal.setAttribute("hidden", "true");
}

// Eventos de abrir/fechar
btnNewCard.addEventListener("click", () => openModal());
btnCloseModal.addEventListener("click", closeModal);
btnCancel.addEventListener("click", closeModal);

// Botões "Adicionar Card" transparentes nas colunas
document.querySelectorAll(".btn-add-inline").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const col = e.target.getAttribute("data-column");
    openModal(col);
  });
});

// Salvar Tarefa
btnSave.addEventListener("click", () => {
  const title = document.getElementById("input-title").value.trim();
  const desc = document.getElementById("input-desc").value.trim();
  const column = document.getElementById("input-column").value;

  if (!title) {
    alert("O título é obrigatório!");
    return;
  }

  const newTask = {
    id: Date.now(), // Gera um ID único provisório
    title,
    desc,
    column,
  };

  tasks.push(newTask);
  renderBoard();
  closeModal();
});

// 6. INICIALIZAÇÃO

initTheme();
renderBoard();
