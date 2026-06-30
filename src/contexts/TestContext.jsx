// Importar Context
import { createContext } from "react";

// Criar o contexto geral. (central)
export const TestContext = createContext();

// Criar um Provider
// Ele vai carregar a lógica do estado e envolver os componentes filhos (children)
// PROVIDER enviado para TestProvider.jsx
// *********************************************************************************************************************
// erro eslint:
// Fast refresh only works when a file only exports components. Move your React context(s) to a separate file.eslint(react-refresh/only-export-components)
// const TestContext: Context<any>

// Podemos criar uma talho para o uso do contexto através de um hook personalizado
// assim os componentes do projeto não precisam impoerar o useContext e o TestContext
// separados. Será necessário importar somento o useTest
// useTest enviado para hook/useTest
// *********************************************************************************************************************
// erro eslint:
// Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components.eslint(react-refresh/only-export-components)
// function useTest(): any
