import { TipagemCardAtracoes } from '../pages-secoes/progamacao/card_progamacao'
interface CardAtracaoProps {
    atracao: TipagemCardAtracoes;
    alternarCor?: boolean;
}

export function CardAtracao({ atracao, alternarCor = false }: CardAtracaoProps) {

    return (
        <>
            {/* ==================== card que contem as atracoes ==================== */}

            <div id="card-para-atração" className={`
          flex flex-row bg-linear-to-br rounded-2xl p-8 text-white 
          shadow-[0_-2_35px_rgba(0,0,0,0.3)] 
          hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] 
          transition-all duration-300 gap-3 md:flex-row justyfy-between items-center 
          ${alternarCor
                    ? 'from-yellow-400 to-yellow-500'
                    : 'from-orange-500 to-orange-600'
                }
        `} >
                {/* ==================== conteiner para data / mes e horario ==================== */}

                <div id="info-1" className="flex flex-col justify-center items-center  w-max">
                    <span className="text-3xl font-bold">{atracao.dia}</span>
                    <span className="text-xs uppercase">{atracao.mes}</span>
                    <span className="text-xs">{atracao.horario}</span>
                </div>

                {/* ==================== conteiner para  palco , nome do artista estilo ==================== */}

                <div id="info-2" className="flex flex-col justify-center items-start w-max  ">
                    <span className="bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-semibold inline-block mb-2 uppercase">principal</span>
                    <span className="text-2xl font-bold mb-1  flex justify-center items-center w-max">{atracao.artist}</span>
                    <span className="text-sm opacity-90 uppercase">{atracao.type}</span>

                </div>
                {/* ==================== conteiner gif que ficara rolando sobre a banda ==================== */}

                <div id="info-3" className="  w-full flex justify-end items-center gap-2 ">
                    
                    <span className=' w-40  h-32 md:w-40 lg:w-55 overflow-hidden rounded-lg shadow-md justify-center items-center  '>
                        <img className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' src={atracao.gallery[0]} alt="imagensbanca" />
                    </span>

                    <span className=' w-40 h-32 md:w-40 lg:w-55 overflow-hidden rounded-lg shadow-md  hidden md:flex    justify-center items-center'>
                        <img className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'  src={atracao.gallery[1]} alt="imagensbanca" />
                    </span>

                    <span className=' w-40  h-32 md:w-40 lg:w-55 overflow-hidden rounded-lg shadow-md hidden   md:hidden lg:flex   justify-center items-center'>
                        <img src={atracao.gallery[2]} alt="imagensbanca" className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' />
                    </span>
                </div>

            </div>



        </>
    );
}
