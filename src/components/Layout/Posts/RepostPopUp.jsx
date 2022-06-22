import styled from "styled-components";
import Modal from "react-modal";
import { getContext } from "../../../hooks/ContextAPI";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

import { api } from "../../../utils/api";

export default function RespostPopUp({ postId, setPopUp, popUp }) {
    const [loading, setLoading] = useState(false);
    const { header, refresh, setRefresh } = getContext();

    function sendRepost() {
        setLoading(true);
        api.post("/repost", { postId }, header)
            .then(() => {
                setLoading(false);
                setRefresh(!refresh);
                setPopUp(!popUp);
            })
            .catch((error) => {
                setLoading(false);
                setPopUp(!popUp);
                window.alert(
                    "An error occurred while trying to repost, please refresh the page."
                );
            });
    }

    return (
        <Modal
            isOpen={popUp}
            onRequestClose={() => setPopUp(false)}
            style={customStyles}
        >
            <Container>
                <h2>Do you want to re-post this link?</h2>
                {loading ? (
                    <ThreeDots color="#FFFFFF" />
                ) : (
                    <div>
                        <button onClick={() => setPopUp(false)}>
                            No, cancel
                        </button>
                        <button onClick={sendRepost}>Yes, share</button>
                    </div>
                )}
            </Container>
        </Modal>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 29px;
        line-height: 35px;
        text-align: center;
        margin-bottom: 23px;
        font-weight: var(--font-weight-bold);
    }

    div {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    div button {
        border-radius: 5px;
        border: none;
        min-height: 37px;
        width: 40%;
        font-size: 18px;
        font-weight: var(--font-weight-bold);
    }

    div button:first-child {
        background-color: var(--color-4);
        color: var(--color-1);
    }

    div button:last-child {
        background-color: var(--color-1);
        color: var(--color-4);
    }
`;

const customStyles = {
    overlay: {
        backgroundColor: " rgba(255, 255, 255, 0.9)",
    },
    content: {
        background: "var(--color-3)",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        width: "var(--width-popup)",
        height: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "30px",
        padding: "2rem",
    },
};
