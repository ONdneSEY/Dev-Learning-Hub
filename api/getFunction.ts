import { BASE_URL } from "../types/Constnt";

export const getFunction = async <T>(
  signal?: AbortSignal,
  URL: string = BASE_URL,
) => {
  try {
    const res = await fetch(`${URL}`, { signal });

    if (!res.ok) {
      throw new Error("Не вдалося завантажити");
    }
    const data: T = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.log("Запит GET скасовано");
      throw error;
    }

    console.error(error);
    throw error;
  }
};
