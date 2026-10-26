import { useQuery } from "@tanstack/react-query";
import { getFunction } from "../api/getFunction";
import { BASE_URL } from "../types/Constnt";
import type { modulesType } from "../types/type";

export const useModules = () => {
  return useQuery({
    queryKey: ["modules"],
    queryFn: ({ signal }) =>
      getFunction<modulesType[]>(signal, `${BASE_URL}/modules`),
    select: (data) => (Array.isArray(data) ? data : []),
  });
};
