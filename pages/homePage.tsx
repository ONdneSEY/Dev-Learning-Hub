import { Header } from "../components/header/header";
import { ModulesList } from "../components/modulesList/modulesList";

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="content">
        <h1>
          Hello world! <br /> Це список тем на бібліотеки React, та підсказок до
          них
        </h1>
        <ModulesList blocClass="table" />
      </div>
    </>
  );
};
