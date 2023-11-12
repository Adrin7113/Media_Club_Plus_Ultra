import { useEffect, useState } from "react";
import { useRadioContext } from "@/hooks/useRadioContext";
import axios from "axios";
import Image from "next/image";

const Cards = () => {
  interface Radio {
    __v: number;
    _id?: number;
    createdAt: string;
    highlight: boolean;
    imgUrl: string;
    length: string;
    link: string;
    radioId: string;
    radioName: string;
    updatedAt: string;
    writeUp: string;
  }
  const { current, dispatch } = useRadioContext();
  const [radios, setRadios] = useState<Radio[]>([]);

  useEffect(() => {
    async function getMainRadios() {
      try {
        const response = await axios.get(
          "https://apis.glitchy.systems/api/radios"
        );
        setRadios(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getMainRadios();
  }, []);

  function changeRadio(index: number) {
    index = Number(index);
    if (current != index) {
      dispatch({ type: "CHANGE_RADIO", payload: index });
    }
  }

  const scrollPlayer = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-full pt-8 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-items-center content-center gap-5 mx-2">
        {radios && (
          <>
            {radios.map((value, index) => (
              <div
                key={index}
                className="w-[350px] group bg-grad-redish1 rounded-xl p-5 flex justify-between items-center gap-5 text-center"
              >
                <Image
                  width={60}
                  height={60}
                  alt="Radio Image"
                  src={value.imgUrl}
                  className="w-[60px] h-[60px] rounded-xl"
                />
                <div>
                  <h1 className="font-bold text-xl text-white">
                    {value.radioName}
                  </h1>
                  <h1 className="font-light text-sm text-white">
                    {value.length}
                  </h1>
                </div>
                <Image
                  width={60}
                  height={60}
                  alt="Play"
                  id={index.toString()}
                  src="/radio/play.png"
                  onClick={(e) => {
                    changeRadio(Number((e.target as HTMLImageElement).id));
                    scrollPlayer();
                  }}
                  className={`w-12 h-12 hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer`}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Cards;
