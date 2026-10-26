import { useParams } from "react-router-dom";
import { TopicInformation } from "../components/topicInformation/topicInformation";
import { TopicList } from "../components/topicList/topicList";
import { Header } from "../components/header/header";

export const TopicPage = () => {
  const { topicId, moduleId } = useParams<{
    topicId: string;
    moduleId: string;
  }>();

  const numTopicId = Number(topicId);
  const numModuleId = Number(moduleId);

  console.log("параметер в topicPage", numModuleId, numTopicId);

  return (
    <>
      <Header />
      <div className="content">
        <TopicList moduleId={numModuleId} topicClass="row" />
        <TopicInformation topicId={numTopicId} moduleId={numModuleId} />
      </div>
    </>
  );
};
