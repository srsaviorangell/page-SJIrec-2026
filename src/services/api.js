const API_URL = "https://api-para-alimenta-projeto.onrender.com/api/events";
export async function FetchCardAtracoes() {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}
