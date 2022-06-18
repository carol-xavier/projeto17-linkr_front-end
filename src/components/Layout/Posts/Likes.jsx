import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import styled from "styled-components";
import { getContext } from "../../../hooks/ContextAPI";
import { api } from "../../../utils/api";

function Likes({ postId, infoLikes }) {
  console.log(infoLikes);
  const { header } = getContext();
  const { likes, liked } = infoLikes;
  const [qtdLikes, setQtdLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(liked);

  function heartClick() {
    const body = {
      liked: !isLiked,
    }
    api.post(`timeline/post/${postId}/like`,body, header)
      .then(res => {
        setQtdLikes(res.data.likes);
        setIsLiked(res.data.liked);
      })
      .catch(e => console.log(e));
  }

  return (
    <LikesContainer isLiked={isLiked}>
      <button onClick={heartClick} >
        {isLiked ? <BsHeartFill /> : <BsHeart />}
      </button>
      <p>{qtdLikes} likes</p>
    </LikesContainer>
  );
}

export default Likes;

const LikesContainer = styled.div`
  --color-heart: ${props => (props.isLiked ? "var(--color-red)" : "var(--text-color-main)")};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  button {
    width: 100%;
    background: none;
    margin-top: 0.8rem;
    margin-bottom: 0.3rem;

    svg {
      color: var(--color-heart);
    }
  }

  p {
    text-align: center;
    width: 100%;
    font-size: 70%;
  }
`