import { Container, Subtitle, Title, Video, Wrapper, Iframe, Mapper } from "./styles";

const Frame = ({ frames }) => {
  return (
    <Mapper>
      {frames
        .slice(0)
        .reverse()
        .map((frame, index) => (
          <Container>
            <Wrapper>
              <Video>
                <Iframe
                  key={index}
                  src={"https://www.youtube.com/embed/" + frame.embed}
                  allowFullScreen
                />
              </Video>
              <Subtitle>{frame.subtitle}</Subtitle>
              <Title>{frame.title}</Title>
            </Wrapper>
          </Container>
        ))}
    </Mapper>
  );
};

export default Frame;
