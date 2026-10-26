import { BASE_URL } from "../types/Constnt";

export const putFuncion = async <T>(
  table: T,
  URL: string = BASE_URL,
  signal?: AbortSignal,
) => {
  try {
    const res = await fetch(`${URL}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(table),
      signal,
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message || "Помилка при повному оновленні!");
    }
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.log("вапит PUT скасовано");
      throw error;
    }

    console.error(error);
    throw error;
  }
};
