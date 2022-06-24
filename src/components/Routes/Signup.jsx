import { React, useState} from 'react';
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import { api } from '../../utils/api';
import styled from 'styled-components';
import { ThreeDots } from "react-loader-spinner";
import AuthScreen from '../Layout/AuthScreen';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imgUrl, setimgUrl] = useState("");
    const [disable, setDisable] = useState("");
    let navigate = useNavigate();

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
                navigate('/');
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
        <AuthScreen>
            <FormsContainer onSubmit={registerUser}>
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
                    (<button type="submit" className='disable-button button-auth' disabled = {disable}><ThreeDots color="#fff" width={'100%'} height={'0.8rem'} /></button>)
                }
                <Link className='link' to="/">Switch back to log in</Link>
            </FormsContainer>
        </AuthScreen>
    )
}

export default Signup;

const FormsContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 50%;
    height: 100%;
    padding: 0 30px;

    .link {
        margin-top: 13px;
        text-decoration: underline;
        color: var(--color-4);
    }

    @media (max-width: 700px) {
        justify-content: flex-start;
        width: 100%;
				height: 65%;
        padding-top: 1rem;
        padding-inline: 5rem;

        form {
            margin-top: 40px;
        }
    } 

    @media (max-width: 500px) {
        padding-inline: 1rem;
    }
`
