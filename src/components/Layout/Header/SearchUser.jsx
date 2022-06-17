import { DebounceInput } from "react-debounce-input";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";

import { api } from "../../../utils/api";

export default function SearchUser() {
	const [users, setUsers] = useState(null);

	function getUsers(name) {
		if (name.length < 3) {
			setUsers(null);
			return;
		}
		const promise = api.get(`/users/${name}`);
		promise.then((res) => {
			setUsers(res.data);
		});
		promise.catch((err) => {
			if (err.response.status === 404) {
				setUsers([]);
				return;
			}
			console.log(err);
			alert("Erro ao procurar usuários");
		});
	}

	function showUsers(users) {
		if (users.length > 0) {
			return users.map((user) => {
				return (
					<div key={user.id}>
						<img src={user.image} alt="" />
						<p>{user.name}</p>
					</div>
				);
			});
		} else {
			return <p>Nenhum usuário encontrado!</p>;
		}
	}

	return (
		<Container>
			<DebounceInput
				minLength={3}
				debounceTimeout={300}
				type="text"
				placeholder="Search for people"
				onChange={(e) => getUsers(e.target.value)}
			/>
			{users ? <div>{showUsers(users)}</div> : <></>}
		</Container>
	);
}

const Container = styled.div`
	height: 70%;
	width: 563px;
	margin-left: 15px;
	margin-right: 10px;

	input {
		width: 100%;
		height: 100%;
		border-radius: 8px;
		padding: 14px;
		font-size: 19px;
	}

	input::placeholder {
		color: #c6c6c6;
	}
	& > div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 14px 17px 10px;
		border-radius: 0 0 8px 8px;
		background-color: #e7e7e7;
	}

	div div {
		display: flex;
		align-items: center;
		margin-bottom: 15px;
	}

	div div img {
		width: 39px;
		height: 39px;
		margin-right: 12px;
		object-fit: cover;
		object-position: center;
		background-repeat: no-repeat;
		border-radius: 50%;
	}

	p {
		color: #515151;
		font-size: 19px;
	}
`;
