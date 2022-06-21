import { getContext } from "../../../hooks/ContextAPI";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useNavigate} from 'react-router-dom';
import { React, useEffect, useState, useRef} from 'react';
import styled from "styled-components";

function ShowUser() {
  const { imgUser, setToken } = getContext();
  const [showButton, setShowButton] = useState(false);
  let navigate = useNavigate();
  const ref = useRef()

  function handleButton() {
    setShowButton(!showButton);
  }
  function logOff() {
    localStorage.clear();
    setToken("");
    navigate("/");
  }
  useEffect(() => {
		const checkIfClickedOutside = e => {
		  if (showButton && ref.current && !ref.current.contains(e.target)) {
        setShowButton(false);
		  }
		}
		document.addEventListener("mousedown", checkIfClickedOutside)
		return () => {
		  document.removeEventListener("mousedown", checkIfClickedOutside)
		}
	  }, [showButton]);

  return (
    <ShowUserContainer ref={ref} showButton={showButton} onClick={handleButton} >
      <button >
        {showButton ? (<AiOutlineUp />) : (<AiOutlineDown />)}
      </button>
      <figure>
        <img src={imgUser} alt="" />
      </figure>
      <button className="logout" onClick={logOff}>Logout</button>
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
    width: var(--height-header);
    height: var(--height-header);
    border-radius: 50%;
    img {
      width: var(--height-header);
      height: var(--height-header);
      padding: 0.3rem;
      object-fit: cover;
      object-position: center;
      background-repeat: no-repeat;
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
    top: var(--height-header);
    
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    
    font-weight: var(--fonto-weight-bold);
    font-family: var(--font-main);
    font-size: 0.8rem;
    color: var(--text-color-4);
    background-color: var(--color-2);
  }
`