import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { getContext } from "../../../hooks/ContextAPI";
import { api } from "../../../utils/api";
import handleInfosLikes from "../../../utils/handleInfosLikes";

function Likes({ postId, infoLikes }) {
  console.log(infoLikes);
  const { header } = getContext();
  const { likes, liked, namePeople} = infoLikes;
  const [names, setNames] = useState(namePeople);
  const [isLiked, setIsLiked] = useState(liked);
  const [qtdLikes, setQtdLikes] = useState(parseInt(likes));
  const [dataTooltip, setDataTooltip] = useState(handleInfosLikes(
    isLiked,
    qtdLikes,
    names
  ));

  

  function heartClick() {
    console.log("heartClick");
    const body = {
      liked: !isLiked,
    }
    api.post(`timeline/post/${postId}/like`,body, header)
      .then(({data}) => {
        setNames(data.namePeople);
        setIsLiked(data.liked);
        setQtdLikes(parseInt(data.likes));
        setDataTooltip(handleInfosLikes(
          data.liked,
          parseInt(data.likes),
          data.namePeople
        ));
      })
      .catch(e => console.log(e));
  }

  return (
    <LikesContainer isLiked={isLiked}>
      <button onClick={heartClick} >
        {isLiked ? <BsHeartFill /> : <BsHeart />}
      </button>
      <ReactTooltip id="tooltip" place="bottom" type="dark" effect="solid" />
        <p
          data-for="tooltip"
          data-tip={ dataTooltip }
          data-iscapture="false"
        >{qtdLikes} likes</p>
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
      cursor: pointer;
    }
  }

  p {
    text-align: center;
    width: 100%;
    font-size: 70%;
    cursor: default;
  }
`