import { TipagemCardAtracoes } from "../pages-secoes/progamacao/card_progamacao";

const API_URL = "https://api-para-alimenta-projeto.onrender.com/api/events";

export async function FetchCardAtracoes(): Promise<TipagemCardAtracoes[]> {
  const response = await fetch(API_URL);
  const data: TipagemCardAtracoes[] = await response.json();
  return data;
}
