import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../utils/api";

import MainScreen from "../Layout/MainScreen";
import { getContext } from "../../hooks/ContextAPI";

export default function UserPage() {
    const [user, setUser] = useState({
        name: "",
        image: "",
    });
    const { userId } = useParams();
    const route = `/user/${userId}`;
    const { header } = getContext();

    useEffect(() => {
        api.get(`${route}?posts=false`, header)
            .then((res) => {
                setUser({ name: res.data.name, image: res.data.image });
            })
            .catch();
    }, []);

    return (
        <MainScreen route={route}>
            <TitleContainer className="title">
                <img src={user.image} alt="" />
                <h1>{user.name}'s posts</h1>
            </TitleContainer>
        </MainScreen>
    );
}

const TitleContainer = styled.div`
    display: flex;
    margin: 0.8rem;
    width: 100%;
    align-items: center;

    img {
        width: 50px;
        height: 50px;
        margin-right: 12px;
        object-fit: cover;
        object-position: center;
        background-repeat: no-repeat;
        border-radius: 50%;
    }

    h1 {
        font-family: var(--font-logo-login-secundary);
        font-size: 1.8rem;
    }

    @media (max-width: 500px) {
        padding-left: 0.8rem;
    }
`;
