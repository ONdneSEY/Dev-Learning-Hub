import { useParams } from "react-router-dom";
import { ModulesList } from "../components/modulesList/modulesList";
import { TopicList } from "../components/topicList/topicList";
import { Header } from "../components/header/header";

export const TopicListPage = () => {
  const { moduleId } = useParams<{ moduleId: string }>();

  const numModuleId = Number(moduleId);
  return (
    <>
      <Header />
      <div className="content">
        <ModulesList blocClass="row" />

        <TopicList moduleId={numModuleId} topicClass="table" />
      </div>
    </>
  );
};
