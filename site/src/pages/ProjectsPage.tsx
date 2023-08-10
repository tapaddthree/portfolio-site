import { projects } from "../projects";

export default function ProjectsPage() {
  return (
    <section className="section has-background-primary">
      <div className="container ">
        <div className="box has-background-white-ter">
          <div className="has-text-centered title">My Work</div>
          <div className="columns is-centered is-multilinehas-text-centered">
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
}
