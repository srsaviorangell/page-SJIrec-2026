import { Inicio1_1 } from "./card_maior.tsx";
import{ ZeBigode } from "./card_palco_zeBigode.tsx";
import{ PalcoPrincipal } from "./card_palco_princial.tsx";

export function Inicio() {

  return (
    <>
      {/* ==================== card maior ==================== */}
      <div id="inicio" className="  w-[97%]  py-11 px-4  mt-14  flex flex-col justify-center items-center">

        <div id="conteiner-geral1" className=" bg-linear-to-r from-[#F54900] to-[#E7000B] w-full rounded-3xl p-8 md:pd-12  shadow-[0_-2_35px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300 ">
          <Inicio1_1 />
        </div>

      </div>
      {/* ==================== card menores ==================== */}

      <div id="sub-cards" className="w-[97%] pb-5 -mt-8 px-4 gap-4 flex flex-col md:flex-row justify-center items-center" >

      <PalcoPrincipal />
      <ZeBigode />

      </div>
    </>
  );
}