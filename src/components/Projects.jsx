export default function Projects() {
  const items = [
    {
      name: "Project 1",
      desc: "Full-stack MERN app with authentication",
      link: "https://github.com/yourname/project1",
    },
    {
      name: "Portfolio 3D Website",
      desc: "React + Three.js portfolio",
      link: "https://github.com/yourname/portfolio",
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {items.map((p) => (
          <div className="project-card" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank">GitHub →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
