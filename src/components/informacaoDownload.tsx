import { AppleStore  } from "../components/butaoApple"
import { PlayStore } from "../components/butaoPlay" 

type Props = {
    children: React.ReactNode;
}
export function InformacaoDownload ({ children }: Props) {
    return(
        <>
            <div>
                {children}
                <div id="conteiner-bot-app" className=" flex flex-col sm:flex-row gap-4 mt-2 ">
                    <AppleStore />
                    <PlayStore />
                </div>
            </div>
        </>
    )
}