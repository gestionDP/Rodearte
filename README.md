# Rodearte

Landing page construida con Next.js, TypeScript, Tailwind CSS y shadcn/ui.

## 🚀 Tecnologías

- **Next.js 16** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de utilidades CSS
- **shadcn/ui** - Componentes UI reutilizables

## 📁 Estructura del Proyecto

```
src/
├── app/              # App Router de Next.js
│   ├── layout.tsx   # Layout principal
│   ├── page.tsx     # Página principal
│   └── globals.css  # Estilos globales y variables CSS
├── components/       # Componentes React
│   ├── ui/          # Componentes de shadcn/ui
│   └── sections/    # Secciones de la landing page
├── lib/             # Utilidades y helpers
├── hooks/           # Custom React hooks
└── types/           # Definiciones de TypeScript
```

## 🛠️ Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Iniciar servidor de producción
npm start

# Linter
npm run lint
```

## 🎨 Personalización

Los colores y estilos se pueden personalizar en:
- `src/app/globals.css` - Variables CSS para colores
- `tailwind.config.ts` - Configuración de Tailwind

## 📦 Instalación

```bash
npm install
```

## 🚀 Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.
