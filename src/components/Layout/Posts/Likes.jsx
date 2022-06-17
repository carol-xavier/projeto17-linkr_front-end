import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import styled from "styled-components";
import { api } from "../../../utils/api";

function Likes(postId, likeInfo) {
  const { likes, liked } = likeInfo;
  const [qtdLikes, setQtdLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(liked);

  function heartClick() {
    const body = {
      liked: !isLiked,
    }
    api.post(`/posts/${postId}/like`,body, /* TODO: header */)
      .then(res => {
        setQtdLikes(res.data.likes);
        setIsLiked(res.data.liked);
      })
      .catch(e => console.log(e));
  }

  return (
    <LikesContainer isLiked={liked}>
      <button onClick={heartClick} >
        {liked ? <BsHeartFill /> : <BsHeart />}
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