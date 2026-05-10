function ProjectCard({ name, description, github, demo, tech }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "8px",
      }}
    >
      <h3>{name}</h3>
      <p>{description}</p>
      <p>
        <strong>Technologies:</strong> {tech.join(", ")}
      </p>
      <a href={demo} target="_blank" rel="noreferrer">
        Live Demo
      </a>{" "}
      |{" "}
      <a href={github} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
  );
}

export default ProjectCard;
