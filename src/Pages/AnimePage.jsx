import  AnimeImageCard  from "../Components/Cards/AnimeImageCard";
import { AnimeData } from "../Utils/AnimeData";
// import { LatestFilm } from "@/components/misc/(anime)/latest-film";
import Navbar from "../Components/NavBar";

export const metadata = {
  title: "arnvgh // anime",
  description: "Find a list of my fav and currently watching anime.",
};

const AnimePage = () => {
  return (
    <div className="bg-black">
    <Navbar/>
    <div className="bg-black flex flex-col   ">
      <section className="max-w-3xl px-4 pb-16 mx-auto  lg:mt-10">
      <div className="">
        <h1 className="text-4xl font-bold mb-4 mt-2 text-white ">Anime</h1>
        <p className="pb-5 text-zinc-50">
          I have loved watching anime since childhood. My first anime was Death
          Note, which is one of the most popular ones. It was suggested to me by
          a friend. Since then, I have watched many anime of different genres,
          but Isekai, Mecha, and Slice of Life are some of my favorites.
        </p>
        
        <p className="pt-2 text-zinc-50">Below are some of my all-time favorite anime.</p>
      </div>


      <div className="grid md:grid-cols-2 gap-6 mt-5">
        {AnimeData.map((anime) => (
          <AnimeImageCard
            key={anime.href}
            title={anime.title}
            altTitle={anime.altTitle}
            href={anime.href}
            imgName={anime.imgName}
            starred={anime.starred}
          />
        ))}
      </div>
    </section>
    </div>
    </div>
    
    
  );
};

export default AnimePage;
