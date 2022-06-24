import styled from "styled-components";
import { AiOutlineComment } from "react-icons/ai";
import { getContext } from "../../../../hooks/ContextAPI";
import { api } from "../../../../utils/api";

function ButtonComments({ postId, qtdComments, setComments, handleShowComments }) {
  const { showComments, setShowComments } = handleShowComments;
  const { header } = getContext();

  function findComments() {
    console.log('entrou button')
    if( showComments ) {
      setShowComments( false );
      return
    };

    api.get(`/posts/${postId}/comments`, header)
      .then((res) => {
        setShowComments( true );
        setComments( res.data );
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <ButtonCommentsContainer>
      <button onClick={findComments}>
          <AiOutlineComment />
      </button>
      <p>{ qtdComments } comments</p>
    </ButtonCommentsContainer>
  )
}

export default ButtonComments;

  const ButtonCommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  button {
      width: 100%;
      background: none;
      margin-top: 0.8rem;
      margin-bottom: 0.1rem;

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
`