import { projects } from "../projectsList";

export default function ProjectsPage() {
  return (
    <section className="section has-background-primary">
      <div className="container">
        <div className="has-text-black has-text-centered title">
          My Work
        </div>
        <div className="columns is-centered is-multiline has-text-centered">
          {projects}
        </div>
      </div>
    </section>
  );
}
