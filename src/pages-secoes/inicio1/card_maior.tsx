import { InformacaoDownload } from "../../components/informacaoDownload";

export  function Inicio1_1() {
 return (
   <>
         <div id="conteiner-geral-informacao" className=" flex flex-col gap-6">

          <h1 id="titulo-inicio" className="text-white font-bold text-4xl md:text-5xl leading-tight">A festa começou</h1>


          <p id="descricao-inicio" className="text-white/90 text-lg max-w-xl leading-relaxed"> Acompanhe todos os eventos e tenha seu ritmo personalizado </p>

          <InformacaoDownload>
            <p className="text-white font-semibold text-base mt-2">Baixe o aplicativo:</p>

          </InformacaoDownload>
        </div>
   </>
 );
}