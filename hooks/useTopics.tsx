import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getFunction } from "../api/getFunction";
import { BASE_URL } from "../types/Constnt";
import type { topicsType } from "../types/type";
import { putFuncion } from "../api/putFunction";

export const useTopics = (moduleId?: number) => {
  const queryClient = useQueryClient();
  const getAllTopic = useQuery({
    queryKey: ["topics", "list", moduleId],
    queryFn: ({ signal }) =>
      getFunction<topicsType[]>(
        signal,
        `${BASE_URL}/topics?moduleId=${moduleId}`,
      ),
    enabled: Boolean(moduleId),
    select: (data) => (Array.isArray(data) ? data : []),
  });

  const useToggleTopicStatus = useMutation({
    // Приймаємо цілий об'єкт теми
    mutationFn: (updatedTopic: topicsType) =>
      putFuncion(updatedTopic, `${BASE_URL}/topics/${updatedTopic.id}`),

    onSuccess: (_, updatedTopic) => {
      // Інвалідуємо і список, і деталі конкретної теми
      queryClient.invalidateQueries({ queryKey: ["topics", "list", moduleId] });
      queryClient.invalidateQueries({
        queryKey: ["topic", "detail", updatedTopic.id],
      });
    },
  });

  return { getAllTopic, useToggleTopicStatus };
};
