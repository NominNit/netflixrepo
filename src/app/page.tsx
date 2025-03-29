import Image from "next/image";
import Header from "@/components/Header";

interface MovieType {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
}

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
    </div>
  );
}
