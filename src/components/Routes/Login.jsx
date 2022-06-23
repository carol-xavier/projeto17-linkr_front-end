import { React, useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { api } from '../../utils/api'
import styled from 'styled-components';
import { getContext } from '../../hooks/ContextAPI';
import { ThreeDots } from "react-loader-spinner";
import AuthScreen from '../Layout/AuthScreen';

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [disable, setDisable] = useState("");
	const {refresh, setRefresh} = getContext();
	let navigate = useNavigate();
   
	autoLogin();
	
	function autoLogin() {
		const localToken = getConfigData()?.token;

		if (localToken) {
			const body = { token: localToken };
			api
				.post('/session', body)
				.then (() => { 
					setTimeout(() => {
						navigate('/timeline');
				 	}, 500);
				})
				.catch ((err) => console.log(err))
		}	
	}

	function handleLocalStorage(data) {
		const jsonData = JSON.stringify(data);
		localStorage.setItem('configData', jsonData);
	}
  
	function getConfigData() {
		const configData = localStorage.getItem('configData');
		const config = JSON.parse(configData);
		return config;
	}

	function userLogin(event) {
		event.preventDefault();
		setDisable("disable");
		
		api
			.post('/login', {
				email: email,
				password: password,
			})
			.then((res) => {
				handleLocalStorage(res.data);
				setRefresh(!refresh);
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
		<AuthScreen>
			<FormsContainer onSubmit={userLogin}>
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
					(<button type="submit" className='disable-button button-auth' disabled = {disable}><ThreeDots color="#fff" width={'100%'} height={'0.8rem'} /></button>)
				}        
				<Link className='link' to="/sign-up">First time? Create an account!</Link>
			</FormsContainer>
		</AuthScreen>
	)
}

export default Login;

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
