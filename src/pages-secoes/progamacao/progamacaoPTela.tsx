import React from "react";
import { Cardprogamacao } from "./card_progamacao.js";

export function Progamacao() {
  return (
    <>
      <main className="container mx-auto px-4 ">
        <div className=" flex flex-row gap-2 text-orange-500 pb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-8 h-8 text-orange-600"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
          <span className="text-3xl font-bold text-gray-800">Programação</span>
        </div>
        <Cardprogamacao />
      </main>
    </>
  );
}