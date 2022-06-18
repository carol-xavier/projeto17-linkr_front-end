import { React, useContext, useEffect, useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { api } from '../../utils/api'
import styled from 'styled-components';
import { getContext } from "../../hooks/ContextAPI"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disable, setDisable] = useState("");
    const { token, setToken } = getContext()
    let navigate = useNavigate();
   
   

    function userLogin(event) {
        event.preventDefault();
        setDisable("disable");
        
        
        api
            .post('/login', {
                email: email,
                password: password,
            })
            .then((res) => {
                setToken(res.data);
                localStorage.setItem('token', res.data);
                navigate("/timeline");
            })
            .catch((err) => {
                if (err.response.status === 401){
                    alert("wrong user or password");
                }
                setDisable("");  
                console.log(err);
            });
    }

    return (
        <Box>
            <TitleContainer>
                    <h1>Linkr</h1>
                    <p>save, share and discover the best links on the web</p>
            </TitleContainer>
            <FormsContainer>
                <form onSubmit={userLogin}>
                    <input className='input-auth'
                        type='email'
                        placeholder='e-mail'
                        value={email}
                        required
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input className='input-auth'
                        type='password'
                        placeholder='password'
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}
                    />  
                    {disable === "" ?
                        (<button type="submit" className='button-auth'>Log In</button>) :
                        (<button type="submit" className='disable-button button-auth' disabled = {disable}>Loading</button>)
                    }                                        
                </form>
                <Link className='link' to="/sign-up">First time? Create an account!</Link>
            </FormsContainer>
        </Box>
    )
}

export default Login;

const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

const TitleContainer = styled.div`
    width: 77%;
    height: 100%;
    display: flex;
    padding: 80px 0 0 120px;
    flex-direction: column;
    background-color: var(--color-2);
    

    h1 {
        font-size: 90px;
        letter-spacing: 0.05em;
        font-family: var(--font-logo-login);
    }
    p {
        width: 320px;
        font-size: 30px;
        font-family: var(--font-logo-login-secundary);
        font-weight: var(--font-weight-bold);
    }

    @media (max-width: 600px) {
        width: 100%;
        height: 40%;
        justify-content: center;
        align-items: center;
        padding: 0;

        p {
            font-size: 25px;
            width: 270px;
            text-align: center;
        }
    }
`

const FormsContainer = styled.div`
    height: 100%;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .link {
        margin-top: 13px;
        text-decoration: underline;
        color: var(--color-4);
    }  
    
    @media (max-width: 600px) {
        justify-content: flex-start;

        form {
            margin-top: 40px;
        }
    }
`
