import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { Container, Button, Form, Input, WrapperInput, Text } from "./styles";

const Create = () => {
  const navigate = useNavigate();

  const [embed, setEmbed] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [title, setTitle] = useState("");

  const register = async (e) => {
    e.preventDefault();

    let video = {
      embed: embed,
      subtitle: subtitle,
      title: title,
    };

    await api
      .post("/video/create", video)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        alert("error: " + err.message);
      });
  };

  return (
    <Container>
      <Form>
        <WrapperInput>
          <Text>Informe o embed do vídeo</Text>
          <Input type="text" onChange={(e) => setEmbed(e.target.value)} />
        </WrapperInput>

        <WrapperInput>
          <Text>Informe o subtítulo do vídeo</Text>
          <Input type="text" onChange={(e) => setSubtitle(e.target.value)} />
        </WrapperInput>

        <WrapperInput>
          <Text>Informe o título do vídeo</Text>
          <Input type="text" onChange={(e) => setTitle(e.target.value)} />
        </WrapperInput>

        <Button type="submit" onClick={register}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default Create;
