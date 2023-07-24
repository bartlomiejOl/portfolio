import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../../App";
import  Translation  from "../Translation/Data.json"

export const useContent = () => {
  const { language } = useContext(LanguageContext);
  const [content, seContent] = useState({});

  useEffect(() => {
    if (language === "Polish") {
      seContent(Translation.pl);
    } else if (language === "English") {
      seContent(Translation.eng);
    }
    localStorage.setItem("lang", language);
  }, [language]);

  return content;
};