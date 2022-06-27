import React from "react";
import { Container, Subtitle, Title, Video, Wrapper, Iframe } from "./styles";

const Frame = (props) => {
  const { embed, subtitle, title } = props;
  return (
    <Container>
      <Wrapper>

        <Video>
          <Iframe src={"https://www.youtube.com/embed/" + embed} allowFullScreen/>
      </Video>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </Wrapper>
    </Container>
  );
};

export default Frame;
