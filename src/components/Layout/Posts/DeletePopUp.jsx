import styled from "styled-components";
import Modal from "react-modal";
import { api } from "../../../utils/api";
import { useState } from "react";
import { getContext } from './../../../hooks/ContextAPI';
import { ThreeDots } from "react-loader-spinner";
//#TO DO ##Fix CSS of buttons

Modal.setAppElement('body');

function DeletePopUp({ id, popUp, setPopUp}) {
    const { header } = getContext();
    const { refresh, setRefresh } = getContext();

    const [loading, setLoading] = useState(false);

    function closeModal() {
        setPopUp(false);
    };

    function errorDeletePost(e) {
        setLoading(false);
        setPopUp(false);
        console.log(e);
        window.alert("An error occurred while trying to delete the post, please refresh the page.");
    }

    function deletePost() {

        setLoading(true);
        api
            .delete(`/posts/${id}`, header)
            .then(() => {
                setRefresh(!refresh);
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
                    {loading ?
                    <ThreeDots color="#fff" width={'100%'} height={'0.8rem'} />
                    :
                    <div>
                        <button className="no" onClick={closeModal}>No, go back</button>
                        <button className="yes" onClick={deletePost}>Yes, delete it</button>
                    </div>
                    }
                </PopUpStyle>
            </Modal>
        </div>
    );

};

export default DeletePopUp;

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
        width: 'var(--width-popup)',
        height: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '30px',
        padding: '2rem'
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

        button {
            width: auto;
            height: 1.5rem;
            padding-inline: 0.8rem;
            margin-inline: 0.5rem;
            border-radius: 5px;
            cursor: pointer;
            border: none;
        }

        button.yes {
            background: var(--color-1);
            color: var(--color-4);

            &:hover {
                background: var(--color-button-hover);
            }
        }

        button.no{
            background: var(--color-4);
            color: var(--color-1);

            &:hover {
                background: var(--color-3);
            }
        }
    }
    
`;