import Image from "next/image";

interface Member {
  name: string;
  role: string;
  img: string;
  link: string;
}
interface CardsProps {
  data: Member[];
}
export default function Cards({ data }: CardsProps) {
  return (
    <div className="w-full flex flex-wrap justify-center mt-5 gap-5">
      {data.map((value, index) => (
        <a key={index} href={value.link} className="">
          <div className="relative group rounded-xl bg-no-repeat bg-cover bg-center w-[300px] h-[300px] md:w-[350px] md:h-[350px] p-4 flex flex-col justify-end hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer">
            <Image
              width={1000}
              height={1000}
              unoptimized={true}
              src={value.img}
              alt="Core Member"
              className=" rounded-br-xl absolute top-0"
            />
            <div className="px-5 py-3">
              <h1 className="font-bold text-2xl psans text-white whitespace-nowrap relative z-30">
                {value.name}
              </h1>
              <h1 className="font-light text-sm geo text-white whitespace-nowrap relative z-30">
                {value.role}
              </h1>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
