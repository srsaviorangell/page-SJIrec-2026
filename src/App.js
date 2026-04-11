import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Inicio } from './pages-secoes/inicio1/inicio1.tsx';
import { Nav } from './components/nav.tsx';
import { Progamacao } from './pages-secoes/progamacao/progamacaoPTela.js';
import { Contato } from './pages-secoes/contatos.tsx';
import { Rodape } from '../src/pages-secoes/rodape.tsx';
import './index.css';
function App() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "bg-[#FFEDD480] min-h-screen w-full justify-center items-center flex flex-col", children: [_jsx(Nav, {}), _jsx(Inicio, {}), _jsx(Progamacao, {}), _jsx(Contato, {}), _jsx(Rodape, {})] }) }));
}
export default App;
