# 🎬 Cinéfilo — Frontend de Avaliação de Filmes

Aplicação **frontend** para busca, visualização e avaliação de filmes, consumindo:

- 🎥 **API pública do TMDB** (dados de filmes)
- ⚙️ **API própria de backend** (avaliações do usuário)

O foco do projeto é a construção de uma interface moderna, organizada e escalável, utilizando boas práticas de componentização, tipagem e consumo de APIs.

---

## 🚀 Funcionalidades

### Funcionalidades principais

- 🔍 Busca de filmes via **TMDB**
- 🖼️ Exibição de filmes com pôster e título
- 📄 Visualização de detalhes do filme:
  - Sinopse
  - Data de lançamento
  - Elenco
- ⭐ Avaliação de filmes (1 a 5 estrelas)
- ✏️ Edição da avaliação
- 🗑️ Remoção da avaliação
- 📚 Página de **Filmes Avaliados**

### Funcionalidades adicionais

- Paginação de resultados
- Filtro por ano de lançamento
- Skeletons de loading
- Componentes reutilizáveis
- Layout responsivo

---

## 🧱 Stack Utilizada

### Frontend

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **shadcn/ui**

### APIs Consumidas

- **TMDB API** — dados públicos de filmes
- **Backend próprio** — gerenciamento de avaliações

---

## 🗂️ Estrutura do Projeto

```text
.
├── public/
├── src/
│   ├── components/
│   │   ├── ui/                    # Componentes base do shadcn-ui
│   │   ├── header.tsx
│   │   ├── movie-card.tsx
│   │   ├── movie-card-skeleton.tsx
│   │   ├── movie-details-dialog.tsx
│   │   ├── pagination-bar.tsx
│   │   ├── rating-stars.tsx
│   │   └── year-filter.tsx
│   │
│   ├── hooks/                     # Hooks customizados
│   │   ├── use-movie-details-dialog.ts
│   │   ├── use-movie-search.ts
│   │   ├── use-trending-movies.ts
│   │   └── use-user-ratings.ts
│   │
│   ├── pages/                     # Páginas da aplicação
│   │   ├── home.tsx
│   │   └── rated.tsx
│   │
│   ├── services/                  # Comunicação com APIs
│   │   ├── tmdb.ts
│   │   └── ratings.ts
│   │
│   ├── lib/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── components.json
├── .env.example
└── README.md
```
## 🧠 Decisões de Arquitetura

- **Separação clara de responsabilidades**
  - `components`: componentes reutilizáveis de UI
  - `pages`: composição das telas
  - `hooks`: lógica de estado e efeitos isolada
  - `services`: camada de comunicação com APIs
- Uso de **hooks customizados** para encapsular regras de negócio
- UI baseada em **shadcn/ui**, priorizando acessibilidade e consistência
- Tipagem forte com **TypeScript**
- Frontend totalmente **desacoplado do backend**

---

## 👨‍💻 Autor

Desenvolvido por **Ian Andriani**  
Projeto pessoal para estudo e prática de frontend moderno com React.
