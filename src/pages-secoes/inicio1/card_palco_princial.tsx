import logo_palco_principal from "../../assets/palco-principal-semfundo.png"

export function PalcoPrincipal() {
    return (
        <>
            <button id="palco-principal" className=" bg-linear-to-r from-[#Ff6900] to-[#f54900] w-full  rounded-3xl p-8 md:pd-12  shadow-[0_-2_35px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300 ">

                <div className="flex flex-row h-10 items-center gap-6 ">
                    <img className=" h-30  invert  " src={logo_palco_principal} alt="palco-principal" />

                    <div id="conteiner info" className="flex flex-col gap-2 items-center justify-center w-full  " onClick={() => alert("progamação dos palco princiapl ")}>
                        <span className="text-white text-base md:text-xl font-medium"> Os melhores Shows do melhor São João do Mundo </span>
                    </div>
                </div>
            </button>
        </>
    );
}