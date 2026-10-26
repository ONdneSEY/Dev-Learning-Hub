import React, { useState } from "react";
import type { topicsType } from "../../types/type";

import "./editingTopic.Form.scss";
import { useTopicInformation } from "../../hooks/useTopicInformation";

interface EditingTopicFormProps {
  topic: topicsType;
  onSave: (updatedData: topicsType) => void;
}

export const EditingTopicForm = ({ topic, onSave }: EditingTopicFormProps) => {
  const { putTopic } = useTopicInformation(topic.id);
  const [topicValue, setTopicValue] = useState<topicsType>(topic);

  const hendelForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setTopicValue((prev) => ({ ...prev, [name]: value }));
  };

  const hendelSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    putTopic.mutate(topicValue, {
      onSuccess: () => {
        onSave(topicValue);
      },
    });
  };
  return (
    <form className="editing__form" onSubmit={hendelSubmit}>
      <button type="submit" disabled={putTopic.isPending}>
        {putTopic.isPending ? "..." : "зберегти"}
      </button>
      <p>Назва</p>
      <input
        type="text"
        name="title"
        value={topicValue?.title}
        onChange={hendelForm}
      />
      <p>Посидання на документацію</p>
      <input
        type="text"
        name="officialDocsUrl"
        value={topicValue?.officialDocsUrl}
        onChange={hendelForm}
      />
      <p>Визначення</p>
      <input
        type="text"
        name="shortDescription"
        value={topicValue?.shortDescription}
        onChange={hendelForm}
      />
      <p>Пояснення простими словами</p>
      <input
        type="text"
        name="simpleExplanation"
        value={topicValue?.simpleExplanation}
        onChange={hendelForm}
      />
      <p>Шаблон коду</p>
      <input
        type="text"
        name="codeSnippet"
        value={topicValue?.codeSnippet}
        onChange={hendelForm}
      />
      <p>Примітка/ нагадування</p>
      <input
        type="text"
        name="pitfalls"
        value={topicValue?.pitfalls}
        onChange={hendelForm}
      />
      <p>Домашнє завдання</p>
      <input
        type="text"
        name="homeworkTask"
        value={topicValue?.homeworkTask}
        onChange={hendelForm}
      />
      <p>Код домашнього</p>
      <input
        type="text"
        name="homeworkSolution"
        value={topicValue?.homeworkSolution}
        onChange={hendelForm}
      />
    </form>
  );
};
