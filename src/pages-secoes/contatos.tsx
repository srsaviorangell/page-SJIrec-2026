import { InformacaoDownload } from "../../src/components/informacaoDownload.tsx";

export  function Contato() {
 return (
   <div id="contato" className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16 w-full flex flex-col justify-center items-center">
    
     <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 text-center w-[90%]">

       <InformacaoDownload>
        <h1 className="text-3xl font-bold mb-4">Baixe o Aplicativo Oficial</h1>
        <p className="text-lg mb-8 text-orange-100">Tenha acesso completo à programação, mapas e muito mais!</p>
       </InformacaoDownload>

     </div>
    
   </div>
   
 );
}