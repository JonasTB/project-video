import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 1% 5% 1%;
  overflow-x: hidden;
`;
export const Added = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
export const Wrapper = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 0));
  grid-gap: 6rem;
`;

export const Footer = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  background-color: transparent;
  opacity: 1;
  bottom: 0;
  left: 0;
`
