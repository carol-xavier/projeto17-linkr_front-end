import Modal from "react-modal";
import styled from "styled-components";
import { getContext } from './../../../hooks/ContextAPI';
import { api } from "../../../utils/api";
import { useState } from "react";

Modal.setAppElement('body');

export function DeletePopUp(props) {
    const { id, popUp, setPopUp } = props;
    console.log(id);
    const { token } = getContext();
    const [loading, setLoading] = useState(false);

    function closeModal() {
        setPopUp(false);
    };

    function errorDeletePost(e) {
        setLoading(false);
        console.log(e);
        window.alert("An error occurred while trying to delete the post, please refresh the page.");
    }

    function deletePost() {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };

        setLoading(true);
        api
            .delete(`/posts/${id}`, config)
            .then((res) => {
                console.log(res.data);
                setPopUp(false);
                setLoading(false);
            })
            .catch(errorDeletePost);
    };

    return (
        <div>
            <Modal
                isOpen={popUp}
                ariaHideApp={false}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <PopUpStyle>
                    <h2>Are you sure you want to delete this post?</h2>
                    <div>
                        <button onClick={deletePost}>Yes, delete it</button>
                        <button onClick={closeModal}>No, go back</button>
                    </div>
                </PopUpStyle>
            </Modal>
        </div>
    );
};

const customStyles = {
    overlay: {
        backgroundColor: ' rgba(255, 255, 255, 0.9)',
    },
    content: {
        background: 'var(--color-3)',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '55%',
        height: '25%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '30px',
        padding: '2rem',
    },
};

const PopUpStyle = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;
    
    &>h2{
       color: var(--color-4); 
       font-family: var(--font-popUp);
       font-weight: var(--font-weight-bold);
       font-size: 1.3rem;
    }

    &>div{
        margin-top: 1.4rem;
    }
`;