import { TipagemCardAtracoes } from "../pages-secoes/progamacao/card_progamacao";

const API_URL = "https://api-para-alimenta-projeto.onrender.com/api/events";

export async function FetchCardAtracoes(): Promise<TipagemCardAtracoes[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Erro na API: ${response.status}`);
  }
  const data = await response.json();
  return data.data;
}
