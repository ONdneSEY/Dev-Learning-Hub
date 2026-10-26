import { useTopics } from "../../hooks/useTopics";
import { Link } from "react-router-dom";

import "./topicList.scss";
import type { topicsType } from "../../types/type";

interface TopicListProps {
  moduleId?: number;
  topicClass: "table" | "row";
}

export const TopicList = ({ moduleId, topicClass }: TopicListProps) => {
  const { getAllTopic, useToggleTopicStatus } = useTopics(moduleId);
  const { data: topics, isLoading, isError, error } = getAllTopic;

  const handleToggle = (topic: topicsType) => {
    // Створюємо копію теми з інвертованим статусом
    const updatedTopic = {
      ...topic,
      isCompleted: !topic.isCompleted,
    };
    useToggleTopicStatus.mutate(updatedTopic);
  };

  if (isLoading) return <div>Завантаження тем...</div>;
  if (isError) return <div>Помилка: {(error as Error).message}</div>;
  if (topicClass === "table")
    return (
      <>
        <ul>
          <h2>Теми по модуля №{moduleId}: </h2>
          <table className="tablet-topic">
            <thead>
              <tr>
                <td>Назва</td>
                <td>Статус</td>
                <td>Резюме</td>
              </tr>
            </thead>
            {topics?.map((topic) => (
              <tbody key={topic.id}>
                <tr className="bloc-topic__box">
                  <td className="bloc__title">
                    <Link to={`/modules/${topic.moduleId}/topics/${topic.id}`}>
                      <p>{topic.title}</p>
                    </Link>
                  </td>
                  <td
                    onClick={() => handleToggle(topic)}
                    style={{ cursor: "pointer", userSelect: "none" }}
                    title="Клікніть, щоб змінити статус"
                  >
                    {topic.isCompleted ? "✅" : "❌"}
                  </td>
                  <td>{topic.shortDescription}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </ul>
      </>
    );

  if (topicClass === "row")
    return (
      <div className="block row">
        {topics?.map((t) => (
          <Link
            to={`/modules/${t.moduleId}/topics/${t.id}`}
            className="block__box"
            key={t.id}
          >
            <div className="block__title">{t.title}</div>
            <div className="block__description">{t.shortDescription}</div>
          </Link>
        ))}
      </div>
    );
};
