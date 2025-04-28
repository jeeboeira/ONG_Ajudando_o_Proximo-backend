

# Ajudando o Próximo - Gestão de Voluntários

## ✨ Visão Geral

Ajudando o Próximo é uma aplicação mobile e web para gestão de voluntários, desenvolvida como parte da disciplina de Desenvolvimento Mobile.

A aplicação implementa:
- Cadastro (POST) de voluntários com persistência no MongoDB Atlas
- Listagem (GET) de todos os voluntários
- Edição (PUT) e remoção (DELETE) com confirmação
- Interface responsiva desenvolvida em Ionic Standalone com Angular
- Toasts de feedback para todas as ações do usuário
- Integração completa entre Front-end e Back-end

Front-end e Back-end foram construídos de forma independente, mas pensados para funcionar juntos, seguindo boas práticas de organização, modularização e usabilidade.

O objetivo principal foi demonstrar domínio sobre:
- Criação de APIs REST com Express.js
- Consumo de APIs em aplicativos Ionic
- Estruturação de aplicações integradas e preparadas para deploy.

> "Porque boas ideias precisam de boas listas."

---

## Imagens da Interface:
![Preview](./preview.gif)

---

## 📊 Funcionalidades

- Listagem de voluntários
- Cadastro de novos voluntários via modal
- Visualização de detalhes do voluntário
- Edição e exclusão de voluntários
- Confirmação antes de deletar
- Toasts para feedback visual de ações
- Design responsivo e moderno

---

## 🔄 Estrutura do Sistema

**Front-end:**
- Ionic Standalone + Angular
- Interface responsiva adaptada para móveis e desktop
- Toasts e modais personalizados
- Tema padrão com cores modernas (#bb2c2c, tons claros)

**Back-end:**
- Node.js + Express
- MongoDB Atlas (ou local)
- API REST para gerenciamento de voluntários


```
/frontend
  |- src/
    |- app/
      |- modals/
        |- add-volunteer-modal/
        |- edit-volunteer-modal/
        |- info-modal/
        |- volunteer-detail-modal/
      |- pages/
        |- home/
        |- volunteers/
      |- services/
        |- volunteer.service.ts
```

```
/backend
  |- src/
    |- models/
      |- Volunteer.js
    |- routes/
      |- volunteerRoutes.js
  |- server.js
```


---

## 📅 Como Rodar o Projeto Localmente

### 1. Clone os repositórios
```bash
https://github.com/jeeboeira/ONG_Ajudando_o_Proximo-backend.git
https://github.com/jeeboeira/ong_ajudando_o_proximo-frontend.git
```

### 2. Backend (Node.js + Express)
```bash
cd /Ajudando_o_Proximo-backend
npm install
npm run dev
```

### 3. Frontend (Ionic)
```bash
cd /ong_ajudando_o_proximo-frontend
npm install
ionic serve
```


Certifique-se de configurar corretamente as variáveis de ambiente do **MongoDB** para o backend.


---

## 🌍 Tecnologias Utilizadas

- Ionic Framework (v7+)
- Angular (v19+)
- Node.js (v20+)
- Express.js
- MongoDB Atlas
- HTML5, CSS3, TypeScript


---


## 📢 Contato

Se você gostou do projeto ou deseja conversar mais sobre ele, fique à vontade para me chamar!

Disciplina: **Desenvolvimento de Sistemas Mobile**  
Aluno: **Jesse Boeira**

- LinkedIn: [Jessé de Oliveira Boeira](www.linkedin.com/in/jesseboeira)
- E-mail: jeeboeira@gmail.com
- GitHub: [@jeeboeira](https://github.com/jeeboeira)
- Lattes: [Jessé de Oliveira Boeira](http://lattes.cnpq.br/5664511204968883)

---

> "In teaching others, we teach ourselves." 🌌

