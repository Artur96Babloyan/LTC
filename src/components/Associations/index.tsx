import React, { useState } from "react";
import Container from "../container";
import {
  Button,
  LeftSide,
  LeftText,
  ListItem,
  PartnersCount,
  RightSide,
  RightText,
  TextList,
  Title,
  TitlesWrapper,
} from "./styles";

interface Props {
  data: string[];
  limit?: number;
}

const CollapseList: React.FC<Props> = ({ data, limit = 5 }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const renderListItem = (text: string, index: number) => {
    if (index % 2 === 0) {
      return (
        <Container innerCSS={{ margin: 0 }}>
          <ListItem key={index}>
            <LeftText>{text}</LeftText>
            <RightText>
              {index < data.length - 1 ? data[index + 1] : ""}
            </RightText>
          </ListItem>
        </Container>
      );
    } else {
      return null;
    }
  };

  const renderList = () => {
    const list = [];
    for (let i = 0; i < data.length && (i < limit || expanded); i++) {
      const item = renderListItem(data[i], i);
      if (item) {
        list.push(item);
      }
    }
    return list;
  };

  return (
    <>
      <Container>
        <TitlesWrapper>
          <LeftSide>
            <PartnersCount>300+</PartnersCount>
            <Title>Alumni Associations</Title>
          </LeftSide>
          <RightSide>
            <PartnersCount>350+</PartnersCount>
            <Title>Professional Associations</Title>
          </RightSide>
        </TitlesWrapper>
      </Container>
      <Container
        innerCSS={{
          background: "#F7F7F7",
          border: "1px solid #20A4F3",
          boxShadow: "0px 4px 10px rgba(142, 181, 214, 0.25)",
          borderRadius: "10px",
          mt:7,
          mb: 40,
          "@min480": { p: 40 },
          p: 16,
        }}
      >
        <TextList>{renderList()}</TextList>
        <Button onClick={handleClick}>
          {!expanded && data.length > limit ? "View More" : "View Less"}
        </Button>
      </Container>
    </>
  );
};

export default CollapseList;
