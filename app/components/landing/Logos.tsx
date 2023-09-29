import Image from "next/image";

const Logos = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-full md:w-5/6 flex flex-col gap-10 md:flex-row justify-center">
        <div className="w-full md:w-1/4 flex gap-2 items-center justify-center ">
          <Image
            width={50}
            height={50}
            src="/logos/muthoot.svg"
            alt="The Muthoot Logo"
            className="w-[50px]"
          />
          <h1 className="text-white text-sm geo w-[200px]">
            Muthoot Institute of Technology and Science
          </h1>
        </div>
        <div className="w-full md:w-1/4 flex gap-2 items-center justify-center">
          <Image
            width={50}
            height={50}
            src="/logos/nba.svg"
            alt="The NBA Logo"
            className="w-[50px]"
          />
          <h1 className="text-white text-sm geo w-[200px]">
            National Board of Accreditation
          </h1>
        </div>
        <div className="w-full md:w-1/4 flex gap-2 items-center justify-center">
          <Image
            width={50}
            height={50}
            src="/logos/nirf.svg"
            alt="The NIRF Logo"
            className="w-[50px]"
          />
          <h1 className="text-white text-sm geo w-[200px]">
            NIRF Ranking 251-300 (Engg 2022)
          </h1>
        </div>
        <div className="w-full md:w-1/4 flex gap-2 items-center justify-center">
          <Image
            width={50}
            height={50}
            src="/logos/ariia.svg"
            alt="The ARIIA Logo"
            className="w-[50px]"
          />
          <h1 className="text-white text-sm geo w-[200px]">
            ARIIA Report 2021 “Performer” Band
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Logos;
