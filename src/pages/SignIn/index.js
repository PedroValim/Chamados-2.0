import { useState, useContext } from 'react';
import './signin.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth'


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { signIn }= useContext(AuthContext)     // vai utilizar o contexto Auth e passar para o signIn

    async function handleSignIn(e){    
        e.preventDefault();

        if(email !== '' && password !== ''){
            await signIn(email, password)    //vai chamar o metodo signIn
        }
    }

    return (
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Logo do sistema de chamados" />
                </div>

                <form onSubmit={handleSignIn}>
                    <h1>Entrar</h1>
                    <input type="text"
                        placeholder="email@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  //capta o que esta sendo digitado e passa para a useState, o valor fica armazenado em setEmail
                    />

                    <input type="password"
                        placeholder="*************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}  //capta o que esta sendo digitado e passa para a useState, o valor fica armazenado em setPassword
                    />
                    <button type="submit">Acessar</button>


                </form>

                <Link to="/register">Criar uma conta</Link>
            </div>
        </div>











    )
}