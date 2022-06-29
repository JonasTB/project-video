import React, { useCallback, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Container, Form, FormGroup, Button, InputGroup, Input, Text } from './styles';

const Login = () => {
    const navigate = useNavigate();

    const handleState = () => {
        return { email: '', password: '' }
    }
    const { signIn } = useAuth();
    const [values, setValues] = useState(handleState);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = values;

        try {
            await signIn({
                email: data.email,
                password: data.password,
            });

            toast.success("Bem-vindo! 🔄");
            navigate('/videos');
        } catch (err) {
            toast.error("Verifique se suas credencias estão corretas! ⚠️");
            return err;
        }
    }

    return (
        <Container>
            <Form onSubmit={handleLogin}>
                <FormGroup className="form">
                    <InputGroup>
                        <Text className="info">Email</Text>
                        <Input type="text" placeholder="nome@unifor.br" onChange={(e) => { setValues({ ...values, email: e.target.value }) }} />
                    </InputGroup>

                    <InputGroup>
                        <Text className="info">Senha</Text>
                        <Input type="password" placeholder="•••••••" onChange={(e) => { setValues({ ...values, password: e.target.value }) }} />
                    </InputGroup>
                    <Button className="submit" type="submit">Entrar</Button>
                </FormGroup>
            </Form>
        </Container>
    )
}

export default Login;