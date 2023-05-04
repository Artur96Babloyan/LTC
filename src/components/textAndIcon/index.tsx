import { useEffect, useState } from "react";
import Icon from "../../icons/Icons";
import useWindowSize from "../utils/useWindowSize";
import { Wrapper, Span } from "./styles";

const TextIcon = ({ item }: any) => {
  const { width } = useWindowSize();
  const [isMobile, setIsmobile] = useState(false);
  useEffect(() => {
    if (width <= 480) setIsmobile(true);
  }, [width]);

  return (
    <Wrapper>
      <Icon
        type={item.iconType}
        width={isMobile ? 48 : 110}
        height={isMobile ? 46 : 110}
      />
      <Span>{item.content}</Span>
    </Wrapper>
  );
};

export default TextIcon;
