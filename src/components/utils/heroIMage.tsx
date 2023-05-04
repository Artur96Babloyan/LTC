import React, { useEffect, useState } from "react";
import heroFor1920 from "../../images/homeHeroImages/heroFor1920.png";
import heroFor1440 from "../../images/homeHeroImages/heroFor1440.png";
import heroFor1024 from "../../images/homeHeroImages/heroFor1024.png";
import heroFor768 from "../../images/homeHeroImages/heroFor768.png";
import heroFor425 from "../../images/homeHeroImages/heroFor425.png";
import heroFor375 from "../../images/homeHeroImages/heroFor375.png";
import useWindowSize from "./useWindowSize";

const HeroIMage = () => {
  const [image, setImage] = useState<any>(heroFor1920);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width <= 1440) {
      setImage(heroFor1440);
    } else if (width <= 1024) {
      setImage(heroFor1024);
    }else if (width <= 768) {
     setImage(heroFor768);
   }
   else if (width <= 425) {
    setImage(heroFor425);
  }
  else if (width <= 375) {
   setImage(heroFor375);
 }
  }, [width]);
  return image;
};

export default HeroIMage;
