import React, { useCallback, useState } from 'react';
import { Container } from './styles';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();

    const handleState = () => {
        return { email: '', password: ''}
    }
    const { signIn } = useAuth();
    const [values, setValues] = useState(handleState);
    const [loading, setLoading] = useState(false);

    const handleLogin = async(e) => {
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
            return err;
        }
    }

    return (
        <Container>
            <form onSubmit={handleLogin}>
                <div className="form">
                    <div className="input">
                        <p className="info">Email</p>
                        <input type="text" onChange={(e) => { setValues({ ...values, email: e.target.value })}} />
                    </div>

                    <div className="input">
                        <p className="info">Senha</p>
                        <input type="password" onChange={(e) => { setValues({ ...values, password: e.target.value })}} />
                    </div>
                </div>
                <button className="submit" type="submit">Entrar</button>
            </form>
        </Container>
    )
}

export default Login;