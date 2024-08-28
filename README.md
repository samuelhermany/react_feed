# Feed with React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
-
-
# key no React

## Por que única?
3 momentos em que um componente é renderizado no React.

1. Quando o estado do compoente altera;
2. Quando a proprieade altera;
3. Quando um componente pai renderiza novamente;

---------
## Por que não usar o ínidce do array?

# Porque ao mudar as posições os índices (id) devem se manter
# O id deve se manter igual, independente de ser atualizado, removido e mudado de ordem
``` js
const posts = [1, 2, 3]
