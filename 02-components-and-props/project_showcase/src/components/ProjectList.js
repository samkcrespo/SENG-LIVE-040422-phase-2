import ProjectListItem from "./ProjectListItem";

function ProjectList(props) {
  console.log(props);
  //I need to pass projects down into my ProjectListItem component
  //Render ProjectList item for each of the projects inside of the props.project
  return (
    <div>
      {props.projects.map((project) => (
        <ProjectListItem project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
