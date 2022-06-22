import styled from "styled-components";
import { api } from "../../utils/api";
import { useParams } from "react-router-dom";
import { getContext } from "../../hooks/ContextAPI";
import { useEffect, useState } from "react";

import MainScreen from "../Layout/MainScreen";
import ButtonFollow from "../Layout/UserPage/ButtonFollow";

export default function UserPage() {
    const { header, refresh } = getContext();
    const { userId } = useParams();

    const [followInfo, setFollowInfo] = useState();
    const [user, setUser] = useState({
        name: "",
        image: ""
    });

    const route = `/user/${userId}`;

    useEffect(() => {
        api.get(`${route}?posts=false`, header)
            .then((res) => {
                const { name, image, following, isOwner } = res.data;
                setUser({ name, image });
                setFollowInfo({ following, isOwner });
            })
            .catch();
    }, [refresh]);

    function handleFollowButton() {
        if(followInfo) {
            return (
                <ButtonFollow
                    userId={userId} 
                    follow={followInfo.following} 
                    isOwner={followInfo.isOwner} 
                />
            )
        } 
        return <></>
    }

    return (
        <MainScreen route={route}>
            <TitleContainer className="title">
                <article>
                    <img src={user.image} alt="" />
                    <h1>{user.name}'s posts</h1>
                </article>
                {handleFollowButton()}
            </TitleContainer>
        </MainScreen>
    );
}

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-block: 0.8rem;
    padding-right: 0.8rem;

    @media (max-width: 500px) {
        flex-direction: column;
        align-items: flex-start;
        padding-left: 0.8rem;
    }

    &>article{
        display: flex;
        flex-direction: row;
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
    }
`;
