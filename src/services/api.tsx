import { TipagemCardAtracoes } from "../pages-secoes/progamacao/card_progamacao";

const API_URL = "http://192.168.0.3:3000/api/events";

export async function FetchCardAtracoes(): Promise<TipagemCardAtracoes[]> {
  const response = await fetch(API_URL);
  const data: TipagemCardAtracoes[] = await response.json();
  return data;
}
