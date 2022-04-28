import projects from "./projects";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <>
      <Header />
      <ProjectForm />
      <ProjectList projects={projects} />
    </>
  );
}

export default App;
