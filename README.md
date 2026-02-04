# 📝 To-Do List - Gerenciador de Tarefas

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**Um gerenciador de tarefas moderno e elegante com tema neon roxo**

[Demo](#) · [Reportar Bug](#) · [Solicitar Feature](#)

</div>

---

## 📋 Sobre o Projeto

To-Do List é uma aplicação web moderna para gerenciamento de tarefas, desenvolvida com HTML, CSS e JavaScript puro (Vanilla JS). Com um design elegante em tema cyberpunk/neon, oferece uma experiência visual única e funcionalidades completas para organização de tarefas.

### ✨ Características Principais

- 🎨 **Design Neon Moderno** - Interface estilosa com gradientes roxos e animações fluidas
- 🌊 **Fundo Animado** - Gradiente que se move suavemente criando efeito de profundidade
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- 💾 **Armazenamento Local** - Suas tarefas são salvas automaticamente no navegador
- 🎯 **Interface Intuitiva** - Fácil de usar, sem curva de aprendizado

---

## 🚀 Funcionalidades

### ✅ Gerenciamento de Tarefas
- **Adicionar** tarefas rapidamente
- **Editar** tarefas existentes inline
- **Remover** tarefas com confirmação
- **Marcar como concluída** com um clique
- **Validação** - Não permite adicionar tarefas vazias

### 🔍 Busca e Filtros
- **Pesquisa em tempo real** por nome da tarefa
- **Filtrar por status:**
  - Todas as tarefas
  - Pendentes
  - Concluídas

### 📊 Acompanhamento
- **Barra de progresso** visual mostrando % de conclusão
- **Contador** de tarefas concluídas vs total
- **Estatísticas** atualizadas em tempo real

### ⌨️ Atalhos de Teclado
- `Enter` - Adicionar tarefa rapidamente

### 🎨 Temas Visuais
- **Tema Escuro Neon** - Design cyberpunk com roxo e azul
- **Animações suaves** - Transições fluidas em todas as interações
- **Efeitos hover** - Feedback visual ao passar o mouse

---

## 🖥️ Demonstração

### Interface Principal
```
┌─────────────────────────────────────────┐
│  🎯 Minhas Tarefas                      │
├─────────────────────────────────────────┤
│  [Digite sua tarefa...] [Adicionar]     │
├─────────────────────────────────────────┤
│  [🔍 Pesquisar tarefa...]               │
│  [Filtros: Todas ▼]                     │
├─────────────────────────────────────────┤
│  ████████████░░░░░░░░ 60% completado    │
├─────────────────────────────────────────┤
│  ☐ Estudar JavaScript    [✏️] [✔] [X]  │
│  ☑ Fazer exercícios      [✏️] [✔] [X]  │
│  ☐ Limpar a casa         [✏️] [✔] [X]  │
└─────────────────────────────────────────┘
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** 
  - CSS Variables (Custom Properties)
  - Flexbox & Grid Layout
  - Animações e Transições
  - Gradientes
- **JavaScript (ES6+)**
  - Vanilla JS (sem frameworks)
  - LocalStorage API
  - DOM Manipulation
  - Event Listeners
  - Arrow Functions

---

## 📦 Instalação e Uso

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma dependência adicional necessária!

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/todo-list.git
```

2. **Navegue até a pasta**
```bash
cd todo-list
```

3. **Abra o arquivo HTML**
```bash
# No Windows
start index.html

# No macOS
open index.html

# No Linux
xdg-open index.html
```

Ou simplesmente arraste o arquivo `index.html` para o navegador!

---

## 📂 Estrutura de Arquivos

```
todo-list/
│
├── index.html           # Estrutura HTML
├── styles.css           # Estilos e animações
├── script.js            # Lógica da aplicação
└── README.md            # Este arquivo
```

---

## 💡 Como Usar

### Adicionar Tarefa
1. Digite o nome da tarefa no campo de input
2. Clique em "Adicionar" ou pressione `Enter`
3. A tarefa aparecerá na lista

### Editar Tarefa
1. Clique no botão ✏️ (Editar)
2. O texto se transformará em um campo editável
3. Modifique o texto
4. Pressione `Enter` ou clique fora para salvar

### Marcar como Concluída
- Clique no botão ✔ (Concluir)
- A tarefa ficará riscada e com opacidade reduzida

### Remover Tarefa
- Clique no botão X (Remover)
- Confirme a remoção

### Pesquisar
- Digite no campo de pesquisa
- As tarefas serão filtradas automaticamente

### Filtrar
- Clique em um dos botões de filtro:
  - **Todas** - Mostra todas as tarefas
  - **Pendentes** - Mostra apenas tarefas não concluídas
  - **Concluídas** - Mostra apenas tarefas concluídas

---

## 🎨 Personalização

### Alterar Cores

Edite as variáveis CSS no início do arquivo `styles.css`:

```css
:root {
  --bg-start: #1a1a2e;        /* Cor inicial do fundo */
  --bg-end: #0f3460;          /* Cor final do fundo */
  --accent: #7b68ee;          /* Cor de destaque */
  --success: #00ff88;         /* Cor de sucesso */
  --danger: #ff5252;          /* Cor de perigo */
}
```

### Adicionar Novos Filtros

No arquivo `script.js`, função `filterTasks()`:

```javascript
case 'seu-filtro':
  // Sua lógica aqui
  break;
```

---

## 🐛 Problemas Conhecidos

Não há problemas conhecidos no momento. Se encontrar algum bug, por favor [abra uma issue](#).

---

## 🔮 Futuras Melhorias

- [ ] Modo escuro/claro alternável
- [ ] Categorias/Tags para tarefas
- [ ] Prioridades (alta, média, baixa)
- [ ] Data de vencimento
- [ ] Notificações
- [ ] Sincronização em nuvem
- [ ] Modo offline (PWA)
- [ ] Subtarefas
- [ ] Arrastar e soltar para reordenar
- [ ] Exportar/Importar dados

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma Branch para sua Feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a Branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Nome](https://linkedin.com/in/seu-perfil)
- Email: seu.email@example.com

---

## 🌟 Mostre seu Apoio

Se este projeto te ajudou, considere dar uma ⭐️!

---

## 📸 Screenshots

### Desktop
![Desktop View](https://via.placeholder.com/800x400/1a1a2e/7b68ee?text=Desktop+View)

### Mobile
![Mobile View](https://via.placeholder.com/300x600/1a1a2e/7b68ee?text=Mobile+View)

---

## 🙏 Agradecimentos

- Inspiração de design: Cyberpunk UI
- Ícones: Emojis nativos
- Fontes: System fonts

---

<div align="center">

**[⬆ Voltar ao topo](#-to-do-list---gerenciador-de-tarefas)**

Feito por João Victor Aquino

</div>
