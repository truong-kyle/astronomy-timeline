import Image from "next/image";
export default function Title() {
  return (
    <header className="absolute w-full text-center py-10 font-[family-name:var(--font-geist-mono)] bg-black/70">
      <h1 className="text-3xl">History of the Universe</h1>
      <p>PHYS 1470 Timeline Project</p>
      <p>Kyle Truong - 218160317</p>
      <Image
        src="/planet-orbits.png"
        alt="Planet Orbits"
        width={100}
        height={100}
        className="self-end flex absolute right-5 top-8"
      />
    </header>
  );
}
