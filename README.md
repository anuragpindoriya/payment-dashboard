# React TypeScript Vite Project

## 🚀 Overview

This project is a **React** application built with **TypeScript** and **Vite**. It features:

- **Card Management System**: Add, edit, and delete cards.
- **Sidebar & Navbar**: Navigation components with toggle functionality.
- **State Management**: Uses **Redux Toolkit**.
- **Form Validation**: Utilizes **Zod** and **react-hook-form** for robust validation.

---

## 📂 Project Structure

```
src/
├── assets/
│   └── images/
│       └── logo.png
├── components/
│   ├── cards-manager/
│   │   ├── card-action.tsx
│   │   ├── card-manager.tsx
│   │   └── card-slice.ts
│   ├── navbar.tsx
│   ├── sidebar.tsx
│   └── ui/
│       ├── breadcrumb.tsx
│       ├── button.tsx
│       ├── checkbox.tsx
│       ├── dialog.tsx
│       ├── form.tsx
│       ├── input.tsx
│       └── select.tsx
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🔧 Installation & Setup

Follow these steps to set up the project:

### 1️⃣ Clone the repository

```sh
git clone <repository-url>
cd <repository-directory>
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Start the development server

```sh
npm run dev
```

---

## 📜 Available Scripts

| Command          | Description                          |
|------------------|--------------------------------------|
| `pnpm run dev`   | Starts the development server.       |
| `pnpm run build` | Builds the project for production.   |
| `pnpm run lint`  | Runs ESLint for code quality checks. |

---

## 🎯 ESLint Configuration

The project uses **ESLint** with **TypeScript** and **React plugins**. The configuration enables type-aware linting
rules.

### Example ESLint Configuration:

```js
// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)

```

---

## 🛠️ Components

### 📌 `AddCardDialog`

- A modal component for adding new cards.
- Uses **react-hook-form** & **Zod** for validation.

### 📌 `Sidebar`

- A collapsible sidebar component.
- Controlled by the `isSidebarOpen` prop.

### 📌 `Navbar`

- Top navigation bar.
- Includes a toggle button for the sidebar.

---

## 🔗 State Management

The project uses **Redux Toolkit** for state management.  
The `card-slice.ts` file contains the Redux slice to manage card-related states.

---

## ✅ Form Validation

Form validation is handled using **Zod** and **react-hook-form**.  
Validation rules are defined in the `formSchema` used by the `AddCardDialog` component.

---

## 🎨 UI Library (ShadCN UI)

The project uses **ShadCN UI**, a modern UI component library based on **Radix UI** and **Tailwind CSS**.

### 🌟 Why ShadCN UI?

- **Highly Customizable**: Easily extendable components.
- **Theme Support**: Dark mode and custom themes.
- **Accessibility First**: Built with accessibility in mind.

📚 **Learn more:** [ShadCN UI Docs](https://ui.shadcn.com/)

---

## 📂 Assets

- Images and other static assets are stored in `assets/images/`.
- Example: The project logo is located at `assets/images/logo.png`.

---

## 📜 License

This project is licensed under the **MIT License**.  
See the [`LICENSE`](./LICENSE) file for more details.

---
