import { FighterType } from "@/types/fighter";

/**
 * Get all fighters from the API
 * @returns {Promise<FighterType[]>} - Array of fighters
 * @throws {Error} - If the API request fails
 */
export async function getFighters() : Promise<FighterType[]> {
  // This is the main page of the fighters section
  const { API_URL } = process.env;
  const fighters: FighterType[] = [];

  // Fetch de datos
  const now = new Date();
  const data = await fetch(`${API_URL}/characters`);

  if (!data.ok) {
    throw new Error("No se pudo conectar con la API de luchadores.");
  }

  const dataJson = await data.json();
  const { items, links } = dataJson;
  fighters.push(...items);

  while (links.next) {
    console.log("La siguiente página es: ", links.next);

    // Fetch de datos
    const data2 = await fetch(links.next);

    if (!data2.ok) {
      throw new Error("No se pudo conectar con la API de luchadores.");
    }

    const dataJson2 = await data2.json();
    const { items: fighters2, links: links2 } = dataJson2;
    fighters.push(...fighters2);
    links.next = links2.next;
  }

  const now2 = new Date();
  const diff = now2.getTime() - now.getTime();
  console.log("Tiempo de ejecución: ", diff / 1000, " segundos");

  return fighters;
}

/**
 * Get a fighter by id from the API
 * @param {number} id - Fighter id
 * @returns {Promise<FighterType>} - Fighter object
 * @throws {Error} - If the API request fails
 */
export async function getFighter(id: number) : Promise<FighterType> {
  // This is the main page of the fighters section
  const { API_URL } = process.env;

  // Fetch de datos
  const data = await fetch(`${API_URL}/characters/${id}`);

  if (!data.ok) {
    throw new Error("No se pudo conectar con la API de luchadores.");
  }

  const dataJson = await data.json();
  return dataJson;
}
