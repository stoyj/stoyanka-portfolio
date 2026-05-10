import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Frontend",
    description:
      "Responsive layout and styling using HTML, CSS, and JavaScript.",
    github: "https://github.com/yourusername/frontend",
    demo: "#",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Games",
    description: "Mini games made with JavaScript (tic-tac-toe, memory, etc).",
    github: "https://github.com/yourusername/games",
    demo: "#",
    tech: ["JavaScript", "DOM"],
  },
  {
    name: "Pizza Menu",
    description: "Simple pizza menu app made with React components.",
    github: "https://github.com/yourusername/pizza-menu",
    demo: "#",
    tech: ["React", "CSS"],
  },
  {
    name: "Sample Application",
    description: "A basic React application with routing and state management.",
    github: "https://github.com/yourusername/sample-application",
    demo: "#",
    tech: ["React", "React Router", "Hooks"],
  },
];

function Projects() {
  return (
    <section>
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}

export default Projects;
