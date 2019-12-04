import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode() {
  const [value, setValue] = useLocalStorage('darkmode', false);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    value
      ? body.classList.add("dark-mode")
      : body.classList.remove("dark-mode");
  });

  return [value, setValue]
}
