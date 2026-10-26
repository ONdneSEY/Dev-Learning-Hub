import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getFunction } from "../api/getFunction";
import { BASE_URL } from "../types/Constnt";
import { putFuncion } from "../api/putFunction";
import type { topicsType } from "../types/type";

export const useTopicInformation = (topicId?: number) => {
  const queryClient = useQueryClient();

  console.log(" topicId в useTopicInfo", topicId);

  const getTopic = useQuery({
    queryKey: ["topic", "detail", topicId],
    queryFn: ({ signal }) =>
      getFunction<topicsType>(signal, `${BASE_URL}/topics/${topicId}`),
    enabled: Boolean(topicId) && typeof topicId === "number" && !isNaN(topicId),
  });

  const putTopic = useMutation({
    mutationFn: (newTopic: topicsType) =>
      putFuncion(newTopic, `${BASE_URL}/topics/${newTopic.id}`),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["topic", "detail", topicId] }),
  });

  return { getTopic, putTopic };
};
