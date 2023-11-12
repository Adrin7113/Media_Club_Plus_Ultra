/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useRadioContext } from "@/hooks/useRadioContext";
import Image from "next/image";

const Intro = ({ radios }) => {
  const { current, dispatch } = useRadioContext();
  const [radio, setRadio] = useState(radios[0]);
  const [play, setPlay] = useState(true);
  const [leftPlay, setLeftPlay] = useState(false);
  const [rightPlay, setRightPlay] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [audio, setAudio] = useState(new Audio(radio.link));
  useEffect(() => {
    const progressEl = document.querySelector('input[type="range"]');
    if (!progressEl) return;
    let mouseDownOnSlider = false;
    audio.addEventListener("loadeddata", () => {
      progressEl.value = "0";
    });
    audio.addEventListener("timeupdate", () => {
      if (!mouseDownOnSlider) {
        progressEl.value = (
          (audio.currentTime / audio.duration) *
          100
        ).toString();
      }
    });
    audio.addEventListener("ended", () => {
      setPlay(true);
    });

    progressEl.addEventListener("change", () => {
      const pct = Number(progressEl.value) / 100;
      audio.currentTime = (audio.duration || 0) * pct;
    });
    progressEl.addEventListener("mousedown", () => {
      mouseDownOnSlider = true;
    });
    progressEl.addEventListener("mouseup", () => {
      mouseDownOnSlider = false;
    });
    audio.volume = 0.8;
    console.log(radios);

    return () => {
      audio.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    audio.src = radio.link;
    audio.load();
  }, [radio, audio]);
  useEffect(() => {
    if (!audio.paused) {
      setPlay(true);
    }
    if (current === 0) {
      setLeftPlay(false);
    }
    if (current < radios.length - 1) {
      setRightPlay(true);
    }
    if (current > 0) {
      setLeftPlay(true);
    }
    if (current === radios.length - 1) {
      setRightPlay(false);
    }
    setRadio(radios[current]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);
  return (
    <div className=" h-max relative bg-grad-redish1 rounded-b-3xl bg-no-repeat bg-cover bg-center flex flex-col items-center pt-40 pb-24">
      <div className="absolute top-0 left-0 bg-black/25 z-10 h-full w-full rounded-b-3xl"></div>
      <div className="relative z-20 w-full geo mb-10 flex">
        <div className="w-full text-center xl:w-1/2 h-full xl:pl-56 flex justify-center flex-col gap-5">
          <h1 className="text-white text-4xl lg:text-7xl font-bold pt-20">
            {radio.radioName}
          </h1>
          <h1 className="text-white w-full text-xl xl:text-2xl px-4 font-medium">
            {radio.writeUp}
          </h1>
          <div className="xl:hidden w-full flex flex-col items-center justify-center">
            <div
              style={{ backgroundImage: `url(${radio.imgUrl})` }}
              className="bg-no-repeat bg-center bg-cover rounded-3xl w-[250px] h-[250px] md:w-[350px] md:h-[350px] "
            ></div>
          </div>
          <div className="flex gap-5 items-center justify-center">
            <Image
              width={50}
              height={50}
              alt="Previous"
              src="/radio/prev.png"
              onClick={() => {
                if (current - 1 >= 0) {
                  dispatch({ type: "CHANGE_RADIO", payload: current - 1 });
                  setRadio(radios[current - 1]);
                }

                if (!audio.paused) {
                  setPlay(true);
                }
              }}
              className={`w-6 h-6 cursor-pointer ${
                leftPlay ? "" : "opacity-50 cursor-not-allowed"
              }`}
            />
            <Image
              width={50}
              height={50}
              alt="Pause"
              id="pause"
              src="/radio/pause.png"
              onClick={() => {
                setPlay(!play);
                audio.pause();
              }}
              className={`w-12 h-12 cursor-pointer ${play ? "hidden" : ""}`}
            />
            <Image
              width={50}
              height={50}
              alt="Play"
              id="play"
              src="/radio/play.png"
              onClick={() => {
                setPlay(!play);
                audio.play();
              }}
              className={`w-12 h-12 cursor-pointer ${play ? "" : "hidden"}`}
            />
            <Image
              width={50}
              height={50}
              alt="Next"
              onClick={() => {
                if (current + 1 <= radios.length - 1) {
                  dispatch({ type: "CHANGE_RADIO", payload: current + 1 });
                  setRadio(radios[current + 1]);
                }

                if (!audio.paused) {
                  setPlay(true);
                }
              }}
              src="/radio/next.png"
              className={`w-6 h-6 cursor-pointer ${
                rightPlay ? "" : "opacity-50 cursor-not-allowed"
              }`}
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <input
              className="progress transition-all ease-in-out duration-500"
              type="range"
              min="0"
              max="100"
              step="0.1"
            ></input>
          </div>
        </div>
        <div className="w-1/2 h-full hidden xl:flex">
          <div
            style={{ backgroundImage: `url(${radio.imgUrl})` }}
            className="bg-no-repeat bg-center bg-cover rounded-3xl w-[400px] h-[400px] ml-10"
          ></div>
          <div className="relative flex items-center">
            <input
              className="progress transition-all ease-in-out duration-500 -rotate-90"
              type="range"
              min="0"
              max="1"
              defaultValue={audio.volume}
              onChange={(e) => (audio.volume = e.target.value)}
              step="0.01"
            ></input>
            <Image
              width={50}
              height={50}
              alt="Volume"
              src="/radio/volume.svg"
              className="absolute w-6 h-6 bottom-5 left-[47%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
