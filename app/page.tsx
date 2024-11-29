import Content from "@/components/Content";
import Menu from "@/components/Menu";
import Title from "@/components/Title";
import { Space_Grotesk } from "next/font/google";

export const metadata = {
  title: "Timeline Project",
  icon: "/world.ico",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div
      className={`${spaceGrotesk.className} flex h-full min-h-svh flex-col pb-4`}
    >
      <Title />
      <Menu />
      <main className="pt-44 w-full text-center justify-center flex flex-col items-center space-y-5">
        <Content />
      </main>
    </div>
  );
}
