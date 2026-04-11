import { useState, useEffect } from "react";
import { CardAtracao } from "../../components/card_atracao";
import { FetchCardAtracoes } from "../../services/api";

export interface TipagemCardAtracoes {
  id: string,
  dia: string,
  mes: string,
  horario: string,
  stage: string,
  artist: string,
  type: string,
  gallery: string[],
}

export function Cardprogamacao() {
  const [cardAtracoes, setCardAtracoes] = useState<TipagemCardAtracoes[]>([])

  useEffect(() => {
    FetchCardAtracoes().then(result => {

      console.log("Dados recebidos:", result)
      setCardAtracoes(result);
    })
      .catch(err => {
        console.error("Erro ao buscar:", err);
      });
  }, [])
  console.log("STATE:", cardAtracoes)

  return (
    <>
      <div id="progamacao" className="grid grid-cols-1 gap-4" >
        {cardAtracoes.map((atracao, index) => (
          <CardAtracao
            key={atracao.id}
            atracao={atracao}
            alternarCor={index % 2 === 0}
          />
        ))}

      </div>

    </>
  );
}
