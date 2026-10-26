import { useState } from "react";

import { VsCodeWindow } from "../vsCodeWindow/vsCodeWindow";
import { EditingTopicForm } from "../editingTopic.Form/editingTopic.Form";
import { useTopicInformation } from "../../hooks/useTopicInformation";
import type { topicsType } from "../../types/type";

interface TopicInformationProps {
  topicId?: number;
  moduleId?: number;
}

export const TopicInformation = ({
  topicId,
  moduleId,
}: TopicInformationProps) => {
  const { getTopic, putTopic } = useTopicInformation(topicId);
  const { data: topic, isLoading, isError, error, isFetching } = getTopic;
  console.log("Чи йде фоновий запит?", isFetching);
  console.log(topic);

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedData: topicsType) => {
    putTopic.mutate(updatedData, {
      onSuccess: () => {
        setIsEditing(false);
      },
    });
  };

  if (isLoading) return <div>Завантаження...</div>;
  if (isError) return <div>Помилка: {error.message}</div>;
  if (!topic) return <div>Тему не знайдено</div>;
  if (moduleId && topic.moduleId !== moduleId) {
    return (
      <div className="error">Ця тема не належить до поточного модуля!</div>
    );
  }

  return (
    <>
      <div className="topics__block" key={topic.id} id={String(topic.id)}>
        <div className="management__panel">
          <button onClick={() => setIsEditing((s) => !s)}>
            {isEditing ? "відмінити" : "редагувати"}
          </button>
        </div>
        {isEditing ? (
          <EditingTopicForm topic={topic} onSave={handleSave} />
        ) : (
          <div className="information">
            <h1>
              {topic.title}
              <span style={{ color: topic.isCompleted ? "green" : "red" }}>
                {topic.isCompleted ? " done" : " not done"}
              </span>
            </h1>

            <div className="">
              <h4>
                {topic.title} -- {topic.shortDescription}
              </h4>

              <h4>{topic.simpleExplanation}</h4>

              <VsCodeWindow text={topic.codeSnippet} />
              <p>{topic.pitfalls}</p>
            </div>

            <div className="homework__block">
              <h4>{topic.homeworkTask}</h4>
              <VsCodeWindow text={topic.homeworkSolution} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
