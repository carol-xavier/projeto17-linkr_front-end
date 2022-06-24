import styled from "styled-components";
import { CgRepeat } from "react-icons/cg";
import {useState} from "react";
import RespostPopUp from "./RepostPopUp";

export default function Reposts({ postId, reposts }) {
    const [popUp, setPopUp] = useState(false);

    function repost(){
        setPopUp(true);
    }
    return (
        <Container>
            <button onClick={repost}>
                <CgRepeat />
            </button>
            <p>{reposts} re-post</p>
            {popUp ? <RespostPopUp postId={postId} setPopUp={setPopUp} popUp={popUp} /> : <></>}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    button {
        width: 100%;
        height: 25px;
        background: none;
        margin-top: 0.8rem;

        svg {
            cursor: pointer;
            color: var(--color-4);
            font-size: 25px;
        }
    }

    p {
        text-align: center;
        width: 100%;
        font-size: 70%;
        cursor: default;
    }
`;
