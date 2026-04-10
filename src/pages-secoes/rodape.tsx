import { RedeSocial } from '../../src/components/redeSocial'

export function Rodape () {
    return(
        <>
         <footer className="bg-gray-900 text-gray-400 py-8 w-full sm: pb-3">
            <div className="container mx-auto text-center">
                <p className="mb-2">© 2026 São João de Irecê - Todos os direitos reservados</p>
                <p className="text-sm ">Explore a programação completa e faça parte da maior festa junina da região!</p>
            </div>
            <div className="flex justify-center items-center mt-4">
                <span className="">Desenvolvido por Savio Rangel</span>
                <RedeSocial />
            </div>

         </footer>
        </>
    )
}