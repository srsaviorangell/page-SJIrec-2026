import { AppleStore  } from "../components/butaoApple"
import { PlayStore } from "../components/butaoPlay" 

type Props = {
    children: React.ReactNode;
    center?:boolean;
}
export function InformacaoDownload ({ children, center = false }: Props) {
    return(
        <>
            <div>
                {children}
                <div id="conteiner-bot-app" className={`flex flex-col sm:flex-row gap-4 mt-2 ${center ? " xl:justify-center xl:items-center" : ""}`} >
                    
                    <AppleStore />
                    <PlayStore />
                </div>
            </div>
        </>
    )
}