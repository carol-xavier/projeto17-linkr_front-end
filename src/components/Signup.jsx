import { React, useState} from 'react';
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';

import { api } from '../utils/api'
import styled from 'styled-components';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imgUrl, setimgUrl] = useState("");

    const [disable, setDisable] = useState("");

    function registerUser(event) {
        event.preventDefault();
        setDisable("disable");

        api
            .post('/sign-up', {
                name: name,
                email: email,
                password: password,
                imgUrl: imgUrl
            })
            .then((res) => {
                console.log(res.data);
                window.location = "/";
            })
            .catch((err) => {
                if (err.response.status === 409){
                    alert(err.response.data);
                }
                setDisable("");  
                console.log(err)
                console.log(err.response.data)
            });
    }

    return (
        <Box>
            <TitleContainer>
                    <h1>Linkr</h1>
                    <p>save, share and discover the best links on the web</p>
            </TitleContainer>
            <FormsContainer>
                <form onSubmit={registerUser}>
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
                    <input className='input-auth'
                        type='text'
                        placeholder='username'
                        value={name}
                        required
                        onChange={e => setName(e.target.value)}
                    />
                    <input className='input-auth'
                        type='url'
                        placeholder='picture url'
                        value={imgUrl}
                        required
                        onChange={e => setimgUrl(e.target.value)}
                    />
                    {disable === "" ?
                        (<button type="submit" className='button-auth'>Sing Up</button>) :
                        (<button type="submit" className='disable-button button-auth' disabled = {disable}>Loading</button>)
                    }                                        
                </form>
                <Link className='link' to="/">Switch back to log in</Link>
            </FormsContainer>
        </Box>
    )
}

export default Signup;

const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
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

    
    
`
