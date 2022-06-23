import styled from "styled-components"

function AuthScreen( { children } ) {
	return (
		<AuthScreenContainer>
			<TitleContainer>
				<h1>Linkr</h1>
				<p>save, share and discover <br/> the best links on the web</p>
			</TitleContainer>
			{ children }
		</AuthScreenContainer>
	);
}


export default AuthScreen;

const AuthScreenContainer = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	.input-auth,
	.button-auth {
		width: 100%;
		height: 50px;
		margin-top: 7px;
		padding: 0 17px;

		max-width: 25rem;
	}

	.input-auth {
		background: var(--color-4);
		border: 1px solid var(--text-color-placeholder);
		box-sizing: border-box;
		border-radius: 6px;
		font-size: 20px;
		font-weight: var(--font-weight-bold);
		line-height: 25px;
		color: var(--text-color-placeholder);
		font-family: var(--font-logo-login-secundary);
	}

	.button-auth {
		background: var(--color-1);
		border: 1px solid var(--text-color-placeholder);
		box-sizing: border-box;
		border-radius: 6px;
		font-size: 20px;
		font-weight: var(--font-weight-bold);
		line-height: 25px;
		color: var(--color-4);
		font-family: var(--font-logo-login-secundary);
	}

	a,
	button {
		cursor: pointer;
		border: none;
	}

	@media (max-width: 700px) {
		flex-direction: column;
		width: 100%;

		.input-auth,
		.button-auth {
			width: 100%;
		}
	}

	@media (max-width: 500px) {
		br {
			display: none;
		}
	}
`
const TitleContainer = styled.div`
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 50%;
	height: 100%;
	padding-top: 4rem;
	padding-inline: 2rem;

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

	@media (max-width: 700px) {
		width: 100%;
		height: 35%;
		justify-content: center;
		align-items: center;
		padding: 0;

		h1 {
			margin-top: 1rem;
			text-align: center;
		}
		
		p {
			font-size: 25px;
			margin-inline: auto;
			text-align: center;
		}
	}
`