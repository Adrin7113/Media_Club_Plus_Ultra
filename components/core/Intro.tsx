export default function Intro() {
  return (
    <div className=" h-max relative bg-coreBg rounded-b-3xl bg-no-repeat bg-cover bg-center flex flex-col items-center pt-40 pb-24">
      <div className="absolute top-0 left-0 bg-black/25 z-10 h-full w-full rounded-b-3xl"></div>
      <div className="relative z-20 w-3/4 mb-10">
        <h1 className="w-full text-white geo text-4xl lg:text-7xl font-bold md:text-left">
          Our Team
        </h1>
        <h1 className="w-full text-white geo text-xl md:text-left pt-5">
          Meet the people who fuel our media magic.
        </h1>
      </div>
    </div>
  );
}
