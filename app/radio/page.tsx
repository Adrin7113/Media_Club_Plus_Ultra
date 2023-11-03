"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Intro from "@/components/radio/Intro";
import Cards from "@/components/radio/Cards";

const Radios = () => {
  const [radios, setRadios] = useState(null);

  useEffect(() => {
    async function getMainRadios() {
      try {
        const response = await axios.get(
          "https://mediaclubbackend-queengn6.b4a.run/api/radios"
        );
        setRadios(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getMainRadios();
  }, []);
  return (
    <div className="relative min-h-screen w-screen bg-black/95">
      <div className="px-6 pb-10">{radios && <Intro radios={radios} />}</div>
      <Cards />
    </div>
  );
};

export default Radios;
