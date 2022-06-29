import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  text-align: start;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: 10%;
`;

export const Form = styled.form`
  width: 12%;
`;

export const FormGroup = styled.div`
  text-align: start;
`;

export const InputGroup = styled.div`
  align-items: center;
`;

export const Input = styled.input`
  font-size: 15px;
  line-height: 1.2;
  display: block;
  width: 140%;
  height: 35px;
  padding: 0 5px;
  border-radius: 8px;
`;

export const Button = styled.button`
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140%;
  height: 50px;
  margin-top: 10%;
  background: -webkit-linear-gradient(to left, #21d4fd, #b721ff);
  background: -o-linear-gradient(to left, #21d4fd, #b721ff);
  background: -moz-linear-gradient(to left, #21d4fd, #b721ff);
  background: linear-gradient(to left, #21d4fd, #b721ff);
`;
