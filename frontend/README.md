# Orbitra Frontend

> Frontend moderno do Orbitra - Sistema de gestão de projetos multi-tenant estilo Trello, construído com React 18, TypeScript, TanStack Query e arquitetura feature-first.

## 🚀 Stack Tecnológica (2026)

- **Core**: Vite 7 + React 18 + TypeScript (strict)
- **State Management**:
  - **TanStack Query v5**: Server state (cache, loading, mutations)
  - **Zustand**: Client state (auth, UI, undo)
- **UI/UX**:
  - **Tailwind CSS**: Styling com dark mode
  - **shadcn/ui**: Componentes acessíveis e customizáveis
  - **Framer Motion**: Animações fluidas
  - **Sonner**: Toast notifications
  - **lucide-react**: Ícones modernos
- **Forms**: react-hook-form + Zod (validação forte)
- **Drag & Drop**: @dnd-kit (Kanban acessível)
- **Routing**: React Router v7
- **HTTP**: Axios com interceptors

## 📁 Arquitetura Feature-First

```
src/
├── app/                  # Rotas e layouts
│   ├── routes/           # Páginas (login, register, dashboard, kanban)
│   ├── layout.tsx        # Layout protegido com Header
│   └── router.tsx        # Configuração de rotas
├── components/           # Componentes compartilhados
│   ├── ui/               # shadcn/ui components
│   └── Header.tsx        # Header com theme toggle
├── features/             # Features isoladas
│   ├── auth/             # Login, register, hooks
│   ├── tenants/          # CRUD de tenants
│   ├── projects/         # CRUD de projetos
│   └── tasks/            # Kanban com drag & drop
├── hooks/                # Custom hooks globais
├── lib/                  # Utils e configs
│   ├── api.ts            # Axios instance + interceptors
│   ├── queryClient.ts    # TanStack Query config
│   └── utils.ts          # cn() e helpers
├── stores/               # Zustand stores
│   ├── authStore.ts      # Token + user
│   ├── uiStore.ts        # Theme + sidebar
│   └── undoStore.ts      # Undo actions
├── providers/            # Context providers
│   └── AppProviders.tsx  # Query + Toast + Theme
├── types/                # TypeScript types globais
└── main.tsx              # Entry point
```

## 🛠️ Setup e Desenvolvimento

### Pré-requisitos

- Node.js 18+ (recomendado: 20+)
- npm 9+
- Backend rodando em `http://localhost:3333`

### Instalação

```bash
# 1. Entrar na pasta frontend
cd frontend

# 2. Instalar dependências
npm install

# 3. Copiar .env.example para .env
cp .env.example .env

# 4. Rodar servidor de desenvolvimento
npm run dev
```

O app estará disponível em **http://localhost:5173**

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do `frontend/`:

```env
VITE_API_URL=http://localhost:3333
```

## 🔌 Conexão com Backend

O frontend se conecta ao backend via proxy configurado no `vite.config.ts`:

```ts
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3333',
      changeOrigin: true,
    },
  },
}
```

**Rotas da API esperadas pelo frontend**:

- `POST /auth/login` - Login
- `POST /auth/register` - Registro
- `GET /tenants` - Listar tenants
- `POST /tenants` - Criar tenant
- `GET /projects?tenantId=X` - Listar projetos
- `POST /projects` - Criar projeto
- `GET /tasks?projectId=X` - Listar tasks
- `POST /tasks` - Criar task
- `PATCH /tasks/:id/status` - Atualizar status (drag & drop)

## 🎯 Features Implementadas

✅ **Autenticação**

- Login/Register com validação (Zod)
- Token JWT salvo no localStorage
- Rotas protegidas com redirect automático
- Interceptor axios para autorização

✅ **Multi-Tenancy**

- CRUD de tenants
- Hooks com TanStack Query
- Invalidação automática de cache

✅ **Projetos**

- Listagem por tenant
- CRUD completo
- Toast notifications

✅ **Kanban Board**

- Drag & drop com @dnd-kit
- 3 colunas: TODO, DOING, DONE
- **Optimistic updates** (UI atualiza antes da resposta)
- Animações com Framer Motion
- Loading skeletons

✅ **UX & Polish**

- Dark mode com toggle no header
- Gradientes e glassmorphism
- Toast com Sonner
- Feedback visual em todas as ações
- Validação de forms com erro inline

## 🚧 Próximas Features

- [ ] Dashboard com stats e gráficos
- [ ] Modal para criar/editar tasks
- [ ] Command Palette (⌘K)
- [ ] Sistema de undo para ações críticas
- [ ] Filtros e busca no Kanban
- [ ] Página de perfil/configurações

## 📦 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento (porta 5173)
npm run build    # Build de produção
npm run preview  # Preview do build de produção
```

## 🧩 Separação Client vs Server State

**REGRA FUNDAMENTAL**:

- **Zustand**: APENAS client state (token, theme, UI)
- **TanStack Query**: TODA server state (data fetching, cache, mutations)

```ts
// ❌ ERRADO: fetching dentro do Zustand
const useStore = create((set) => ({
  data: null,
  fetch: async () => {
    const res = await api.get("/data");
    set({ data: res.data });
  },
}));

// ✅ CERTO: Zustand para client state, Query para server state
const useAuth = useAuthStore((s) => s.token);
const { data } = useQuery({ queryKey: ["data"], queryFn: fetchData });
```

## 🎨 Estilo e Tema

- **Tailwind CSS** com CSS variables para tema
- **Dark mode** gerenciado pelo Zustand (`uiStore`)
- Classe `.dark` aplicada no `<html>` automaticamente
- shadcn/ui com estilo "New York" e cor base "Zinc"

## 🤝 Contribuindo

1. Features devem seguir a estrutura `features/<nome>/`
2. Componentes UI globais em `components/`
3. Sempre use TanStack Query para data fetching
4. Validator forms com Zod + react-hook-form
5. Adicione loading/error states em todas as queries

## 📝 Notas Importantes

- **CORS**: Resolvido via proxy Vite (não precisa configurar backend)
- **Token**: Enviado automaticamente via interceptor axios
- **Types**: Certificar que os tipos em `src/types/index.ts` batem com o backend
- **Strict Mode**: TypeScript em modo strict - sem `any` implícito

---

**Desenvolvido com ❤️ usando as melhores práticas de React 2026**
