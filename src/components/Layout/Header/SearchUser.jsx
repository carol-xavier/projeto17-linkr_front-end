import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

import { api } from "../../../utils/api";
import { getContext } from "../../../hooks/ContextAPI";

export default function SearchUser() {
    const [users, setUsers] = useState(null);
    const { header, refresh, setRefresh } = getContext();

    function getUsers(name) {
        if (name.length < 3) {
            setUsers(null);
            return;
        }
        const promise = api.get(`/users/${name}`, header);
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

    function clearInput(){
        setRefresh(!refresh);
        setUsers(null);
    }

    function showUsers(users) {
        if (users.length > 0) {
            return users.map((user) => {
                return (
                    <Link
                        to={`/user/${user.id}`}
                        key={user.id}
                        onClick={clearInput}
                    >
                        <img src={user.image} alt="" />
                        <p>{user.name}</p>
                    </Link>
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
    margin: 0px 10px;

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

    div a {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }

    div a img {
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

    @media (max-width: 500px) {
        position: absolute;
        top: 62px;
        left: 0;
        width: calc(100% - 20px);
    }
`;
