import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 place-items-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          title="Tune Transfer"
          body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quibusdam enim expedita praesentium aut dignissimos, facere deleniti maiores laborum eligendi delectus obcaecati, vitae ipsa eos."
          background="bg-blue-100"
          image="https://cdnb.artstation.com/p/assets/covers/images/012/730/781/large/sean-hicks-capture.jpg?1536225811"
        />
        <ProjectCard
          title="Wealth Wizard"
          body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quibusdam enim expedita praesentium aut dignissimos, facere deleniti maiores laborum eligendi delectus obcaecati, vitae ipsa eos."
          background="bg-emerald-100"
          image="https://www.giantbomb.com/a/uploads/scale_medium/3/34651/3394061-stupidbird.png"
        />
        <ProjectCard
          title="CarCar"
          body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quibusdam enim expedita praesentium aut dignissimos, facere deleniti maiores laborum eligendi delectus obcaecati, vitae ipsa eos."
          background="bg-purple-100"
          image="https://www.models-resource.com/resources/big_icons/15/14951.png?updated=1460924485"
        />
      </div>
    </>
  );
}

export default App;
