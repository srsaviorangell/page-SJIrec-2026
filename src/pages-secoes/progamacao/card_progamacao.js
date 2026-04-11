import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { CardAtracao } from "../../components/card_atracao";
import { FetchCardAtracoes } from "../../services/api";
export function Cardprogamacao() {
    const [cardAtracoes, setCardAtracoes] = useState([]);
    useEffect(() => {
        FetchCardAtracoes().then(result => {
            console.log("Dados recebidos:", result);
            setCardAtracoes(result);
        })
            .catch(err => {
            console.error("Erro ao buscar:", err);
        });
    }, []);
    console.log("STATE:", cardAtracoes);
    return (_jsx(_Fragment, { children: _jsx("div", { id: "progamacao", className: " grid grid-cols-1 gap-4", children: cardAtracoes.map((atracao, index) => (_jsx(CardAtracao, { atracao: atracao, alternarCor: index % 2 === 0 }, atracao.id))) }) }));
}
