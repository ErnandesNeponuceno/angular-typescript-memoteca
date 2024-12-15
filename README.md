
# Memoteca App

Este projeto é uma aplicação **Angular** com backend simulado usando o **JSON Server**, permitindo a criação, leitura, atualização e exclusão (CRUD) de pensamentos. O aplicativo permite ao usuário visualizar, adicionar, editar e excluir pensamentos através de uma interface simples.

---

## 🛠️ Funcionalidades

- **Listar Pensamentos**
  - Exibe todos os pensamentos armazenados no banco de dados local.

- **Criar Pensamento**
  - Permite a criação de novos pensamentos através de um formulário.

- **Editar Pensamento**
  - Permite a edição dos pensamentos existentes.

- **Excluir Pensamento**
  - Permite a exclusão de pensamentos da lista.

---

## 🎯 Estrutura do Projeto

### **Estrutura de Diretórios**
```plaintext
src/
├── app/
│   ├── componentes/
│   │   ├── footer/               # Componente de rodapé
│   │   ├── header/               # Componente de cabeçalho
│   │   └── pensamentos/          # Componente para gestão de pensamentos
│   │       ├── criar-pensamentos/ # Tela para criação de pensamentos
│   │       ├── editar-pensamento/ # Tela para edição de pensamento
│   │       ├── excluir-pensamento/ # Tela para exclusão de pensamento
│   │       ├── listar-pensamento/ # Tela para listar pensamentos
│   │       ├── pensamento.component.ts # Componente de pensamento
│   │       ├── pensamento.service.ts   # Serviço para interagir com a API
│   │       └── pensamento.ts           # Interface para um pensamento
│   ├── app-routing.module.ts        # Módulo de roteamento
│   ├── app.component.ts             # Componente raiz da aplicação
│   └── app.module.ts                # Módulo principal da aplicação
├── assets/                          # Arquivos estáticos
├── index.html                       # Arquivo HTML principal
├── main.ts                          # Arquivo de inicialização da aplicação
└── styles.css                       # Estilos globais

```

---

## 💻 Tecnologias Utilizadas

<div style="display: inline_block">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img alt="Angular" src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="JSON Server" src="https://img.shields.io/badge/JSON_Server-000000?style=for-the-badge&logo=json&logoColor=white">
</div>

---

## 🚀 Como Rodar o Projeto?

### **Pré-requisitos**
- Node.js e npm instalados.
- JSON Server para simulação do backend.

### **Passos**
1. Clone o repositório:
   ```bash
   git clone https://github.com/ErnandesNeponuceno/angular-typescript-memoteca
   ```
2. Instale as dependências do frontend:
   ```bash
   cd pensamentos-app
   npm install
   ```
3. Inicie o servidor de desenvolvimento do frontend:
   ```bash
   ng serve
   ```
4. Em outro terminal, inicie o **JSON Server** para rodar o backend:
   ```bash
   json-server --watch db.json --port 3000
   ```
5. Acesse o aplicativo no navegador:
   ```
   http://localhost:4200
   ```

---

## 🔍 Rotas

### **Configuração de Rotas no `AppRoutingModule`**
```typescript
const routes: Routes = [
  { path: '', redirectTo: 'listarPensamento', pathMatch: 'full' },
  { path: 'criarPensamento', component: CriarPensamentosComponent },
  { path: 'listarPensamento', component: ListarPensamentoComponent },
  { path: 'pensamentos/excluir/:id', component: ExcluirPensamentoComponent },
  { path: 'pensamentos/editar/:id', component: EditarPensamentoComponent }
];
```

### **Componentes Principais**
- **CriarPensamentosComponent**: Tela para criar novos pensamentos.
- **EditarPensamentoComponent**: Tela para editar pensamentos existentes.
- **ExcluirPensamentoComponent**: Tela para excluir um pensamento.
- **ListarPensamentoComponent**: Tela para listar todos os pensamentos.

---

## 📄 Documentação Adicional

- [Angular Documentation](https://angular.io/docs)

---

## ✨ Créditos

- **Curso:** ✨ Angular 14: aplique os conceitos e desenvolva seu primeiro CRUD:
[Alura](https://cursos.alura.com.br/course/angular-explorando-framework)
