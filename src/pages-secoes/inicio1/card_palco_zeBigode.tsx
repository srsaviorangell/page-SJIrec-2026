import logo_palco_ze_bigode from "../../assets/zebarraca-semfundo.png"


export function ZeBigode() {
    return (
        <>
            <button id="ze-bigode" className=" bg-linear-to-r from-[#b46d3b] to-[#c2411a] w-full rounded-3xl p-8 md:pd-12  shadow-[0_-2_35px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300 " onClick={() => alert("progamação dos palco ze bigode ")}>

                <div className="flex flex-row h-10 items-center gap-6">
                    <img className="h-30 invert " src={logo_palco_ze_bigode} alt="palco-ze-bigode" />

                    <div id="conteiner info" className="flex flex-col gap-2 items-center justify-center w-full">
                        <span className="text-white text-base md:text-xl font-medium ">Circuito Zé Bigode </span>
                        <span className="text-white text-base md:text-xl font-medium ">Forró Pé de serra </span>
                    </div>

                </div>
            </button>
        </>
    );
}