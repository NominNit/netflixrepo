import Image from "next/image";
import Header from "@/components/Header";
import { getAllMovies } from "@/services/movieService";

interface MovieType {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
}

export default async function Home() {
  const movies = await getAllMovies();
  const featuredMovies = movies.results[0];
  const IMAGE_BASE_URL = process.env.IMAGE_PATH;
  console.log(movies);
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <div className="h-7"></div>
      {featuredMovies && (
        <div
          className="relative w-full h-[500px] bg-cover bg-center mt-16"
          style={{
            backgroundImage: `url(${IMAGE_BASE_URL}${featuredMovies.backdrop_path})`,
          }}></div>
      )}
    </div>
  );
}
