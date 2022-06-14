import { AiOutlineDown } from "react-icons/ai";
import styled from "styled-components";

function ShowUser() {
  return (
    <ShowUserContainer>
      <button><AiOutlineDown /></button>
      <figure>
        <img src="https://avatars3.githubusercontent.com/u/527098?v=3&s=460" alt=""/>
      </figure>
    </ShowUserContainer>
  )
}

export default ShowUser;

const ShowUserContainer = styled.article`
  display: flex;
  align-items: center;
  height:100%;
  width: auto;

  &>button {
    background: none;

    svg {
      color: var(--color-4);
      font-size: 1.1rem;
    }

  }

  &>figure {
    display: flex;
    align-items: center;
    --size-icon: 2rem;
    width: var(--size-icon);
    height: 100%;
    border-radius: 50%;

    img {
      width: var(--size-icon);
      height: var(--size-icon);
      object-fit: cover;
      object-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;


      border-radius: 50%;
    }
  }
`