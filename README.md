# 🍅 Pomodoro & FIFO Task Manager

Uma aplicação web de produtividade focada em manter o fluxo de trabalho através da técnica Pomodoro, integrada a um gerenciador de tarefas com rigoroso sistema de fila (FIFO).

Desenvolvido como projeto de aprimoramento técnico, com foco em **Arquitetura Limpa (Clean Architecture)** no ecossistema React.

## 📐 Arquitetura e Decisões de Design

Para garantir que a aplicação seja escalável, testável e de fácil manutenção, o código foi estritamente dividido em três camadas principais, fugindo do padrão de "componentes inflados" comuns no React:

* **`domain/` (Domínio):** Contém as entidades puras e tipagens estritas da aplicação (ex: `Task`, `PomodoroMode`). Livre de qualquer dependência visual ou do React.
* **`application/` (Aplicação):** Onde reside o "motor" da nossa aplicação. Custom Hooks (`usePomodoro`, `useTasks`) isolam toda a lógica de negócio, ciclos de vida (`useEffect`, `setInterval`), gerenciamento de estado e prevenção de *memory leaks*.
* **`presentation/` (Apresentação):** A camada visual (UI). Componentes estritamente visuais que apenas refletem o estado ditado pela camada de aplicação e capturam as interações do utilizador. Dividida entre `components/` (elementos genéricos de UI) e `features/` (blocos de negócio, como Timer e Lista).

## ✨ Funcionalidades

### ⏱️ Motor do Pomodoro
* **Ciclos Automáticos:** Transição autônoma entre tempo de Foco (25 min) e Pausa Curta (5 min).
* **Descanso Longo:** Após a conclusão de 4 ciclos completos de foco, a aplicação engatilha automaticamente uma Pausa Longa (15 min).
* **Controle de Estado:** Permite pausar e resetar o timer a qualquer momento.

### 📋 Fila de Tarefas (Padrão FIFO)
* **First-In, First-Out:** A lista de tarefas atua como uma fila rígida. Novas tarefas entram no final da fila.
* **Foco Direcionado:** A primeira tarefa da fila é **automaticamente** definida como a "Tarefa em Foco", recebendo destaque visual.
* **Imutabilidade:** Concluir uma tarefa a remove do início da fila de forma segura e imutável (via cópia de estado do React), promovendo a próxima tarefa ao estado de foco instantaneamente.

### 💅 UI/UX e Polimento Visual
* Interface totalmente integrada com o ecossistema **shadcn/ui** e desenhada com **Tailwind CSS**.
* **Design System Semântico:** Utilização de variáveis CSS dinâmicas (`bg-background`, `text-foreground`, etc.) para suporte perfeito a **Dark Mode**.
* **Feedback Tátil:** Micro-interações de *hover*, ganho de escala (`scale-105`) e sombras nos botões para melhorar a experiência e a responsividade da interface.

## 🛠️ Tecnologias Utilizadas

* **React 18** (Vite)
* **TypeScript** (Tipagem estrita e segurança em tempo de desenvolvimento)
* **Tailwind CSS** (Estilização utilitária e responsividade)
* **shadcn/ui** (Design System e componentes acessíveis baseados em Radix UI)
* **Bun** (Runtime e gerenciador de pacotes ultrarrápido)

## 🚀 Como Executar o Projeto Localmente

Certifique-se de ter o [Bun](https://bun.sh/) instalado na sua máquina.

1. Clone o repositório:
   ```bash
   git clone https://github.com/JuliaTBarros/pomodoro

2. Entre no diretório do projeto e instale as dependências:
  ```bash
  bun install

  ```

3. Inicie o servidor de desenvolvimento:
  ```bash
  bun dev

```
