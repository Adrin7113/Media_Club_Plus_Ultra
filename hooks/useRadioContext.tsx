import { RadioContext } from "@/context/radioContext";
import { useContext } from "react";

export const useRadioContext = () => {
  const context = useContext(RadioContext);

  if (!context) {
    throw Error("useRadioContext must be used inside an RadioContextProvider");
  }

  return context;
};
