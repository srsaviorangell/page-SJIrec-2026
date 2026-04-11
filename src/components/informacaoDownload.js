import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { AppleStore } from "../components/butaoApple";
import { PlayStore } from "../components/butaoPlay";
export function InformacaoDownload({ children, center = false }) {
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [children, _jsxs("div", { id: "conteiner-bot-app", className: `flex flex-col sm:flex-row gap-4 mt-2 ${center ? " xl:justify-center xl:items-center" : ""}`, children: [_jsx(AppleStore, {}), _jsx(PlayStore, {})] })] }) }));
}
