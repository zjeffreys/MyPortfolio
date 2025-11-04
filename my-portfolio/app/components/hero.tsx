import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto py-20">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
        {/* Left: text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl">
            Hello<span className="text-orange-500">.</span>
          </h1>
          <p className="mt-3 text-xl sm:text-2xl">I’m Zach</p>
          <p className="mt-2 font-extrabold text-3xl sm:text-4xl">Software Engineer</p>
        </div>

        {/* Right: image */}
      <div className="relative inline-block">
  {/* Glow layer */}
  <Image
    src="/images/avatar.png"
    alt="Glow layer"
    width={350}
    height={350}
    className="absolute inset-0 scale-101 blur-3xl opacity-80"
    style={{ filter: "drop-shadow(0 0 40px rgba(254, 106, 0, 0.8))" }}
    priority
  />
  
  {/* Main image */}
  <Image
    src="/images/avatar.png"
    alt="Zachary Jeffreys"
    width={350}
    height={350}
    className="relative rounded-lg"
    priority
  />
</div>

      </div>
    </section>
  );
}
