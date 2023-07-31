import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <>
      <div>Hello!</div>
      <ProjectCard
        title="Tune Transfer"
        body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quibusdam enim expedita praesentium aut dignissimos, facere deleniti maiores laborum eligendi delectus obcaecati, vitae ipsa eos."
        background="bg-blue-100"
      />
      <ProjectCard
        title="Wealth Wizard"
        body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quibusdam enim expedita praesentium aut dignissimos, facere deleniti maiores laborum eligendi delectus obcaecati, vitae ipsa eos."
        background="bg-emerald-100"
      />
      <ProjectCard
        title="Wealth Wizard"
        body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quibusdam enim expedita praesentium aut dignissimos, facere deleniti maiores laborum eligendi delectus obcaecati, vitae ipsa eos."
        background="bg-purple-100"
      />
    </>
  );
}

export default App;
