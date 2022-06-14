import { AiOutlineDown } from "react-icons/ai";
import { useState } from "react";
import styled from "styled-components";

function ShowUser() {
  const [showButton, setShowButton] = useState(false);

  function handleButton() {
    setShowButton(!showButton);
  }

  return (
    <ShowUserContainer showButton={showButton} >
      <button onClick={handleButton}>
        <AiOutlineDown />
      </button>
      <figure>
        <img src="https://avatars3.githubusercontent.com/u/527098?v=3&s=460" alt=""/>
      </figure>
      <button className="logout">Logout</button>
    </ShowUserContainer>
  )
}

export default ShowUser;

const ShowUserContainer = styled.article`
  --display-button: ${(props) => props.showButton?'flex':'none'};

  display: flex;
  align-items: center;
  height:100%;
  width: auto;

  position: relative;

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

    width: var(--heigth-header);
    height: var(--heigth-header);
    border-radius: 50%;

    img {
      width: var(--heigth-header);
      height: var(--heigth-header);

      padding: 0.3rem;

      object-fit: cover;
      object-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;


      border-radius: 50%;
    }
  }

  button.logout {
    display: var(--display-button);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2rem;

    position: absolute;
    top: var(--heigth-header);

    
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    
    font-weight: var(--fonto-weight-bold);
    font-family: var(--font-main);
    font-size: 0.8rem;
    color: var(--text-color-4);

    background-color: var(--color-2);
  }
`