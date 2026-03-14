import { Inicio } from './pages-secoes/inicio1/inicio1.tsx'
import { Nav } from './components/nav.tsx'
import { Progamacao } from './pages-secoes/progamacao/progamacaoPTela.js'
import { Contato } from './pages-secoes/contatos.tsx'
import { Rodape } from './components/footer.tsx'
import React from 'react'
import './index.css'


function App() {

  return (
    <>
      <div className="bg-[#FFEDD480] min-h-screen w-full justify-center items-center flex flex-col" >
        <Nav />
        <Inicio />
        <Progamacao />
        <Contato />
        <Rodape />
      </div>
    </>
  )
}

export default App
