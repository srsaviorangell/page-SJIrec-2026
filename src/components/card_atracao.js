import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export function CardAtracao({ atracao, alternarCor = false }) {
    return (_jsx(_Fragment, { children: _jsxs("div", { id: "card-para-atra\u00E7\u00E3o", className: `
          flex flex-row bg-gradient-to-br rounded-2xl p-8 text-white 
          shadow-[0_-2_35px_rgba(0,0,0,0.3)] 
          hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] 
          transition-all duration-300 gap-3 md:flex-row justify-between items-center 
          ${alternarCor
                ? 'from-yellow-400 to-yellow-500'
                : 'from-orange-500 to-orange-600'}
        `, children: [_jsxs("div", { id: "info-1", className: "flex flex-col justify-center items-center  w-max", children: [_jsx("span", { className: "text-3xl font-bold", children: atracao.dia }), _jsx("span", { className: "text-xs uppercase", children: atracao.mes }), _jsx("span", { className: "text-xs", children: atracao.horario })] }), _jsxs("div", { id: "info-2", className: "flex flex-col justify-center items-start w-max  ", children: [_jsx("span", { className: "bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-semibold inline-block mb-2 uppercase", children: atracao.stage }), _jsx("span", { className: "text-2xl font-bold mb-1  flex justify-center items-center w-max", children: atracao.artist }), _jsx("span", { className: "text-sm opacity-90 uppercase", children: atracao.type })] })] }) }));
}
