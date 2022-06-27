import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  justify-content: center;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.20);
  border-radius: 0px 0px 10px 10px;
`;

export const Title = styled.h2`
  width: 100%;
  padding: 0px 15px 15px 15px;
  font-size: 1.1rem;
  text-align: left;
`;

export const Subtitle = styled.div`
  text-align: left;
  text-weight: bold;
  color: #858b97;
  width: 100%;
  padding: 15px 15px 10px 15px;
  font-size: 0.9rem;
`

export const Video = styled.div`
  display: flex;
  border-radius: 10px 10px 0px 0px;
  justify-content: center;
`;

export const Wrapper = styled.div`
  text-align: center;
  border-radius: 10px 10px 0px 0px;
`;

export const Iframe = styled.iframe`
  width: 480px;
  height: 250px;
  frameBorder: "0";
  border-radius: 10px 10px 0px 0px;
  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
`
