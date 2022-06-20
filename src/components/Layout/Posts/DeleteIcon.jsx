import { useState } from "react";
import {FaTrash} from "react-icons/fa";
import styled from "styled-components";
import DeletePopUp from "./DeletePopUp";

function DeleteIcon({postId}){
    const [popUp, setPopUp] = useState(false);
    
    function handleClick(){
        setPopUp(true);
    };
    
    return (
        <TrashCan>
          <button onClick={handleClick} >
            <FaTrash />
          </button>
          {popUp ? <DeletePopUp 
          id={postId}
          popUp={popUp}
          setPopUp={setPopUp}/> : <> </>}
        </TrashCan>
      );
}

export default DeleteIcon;

const TrashCan = styled.div`
  &>button{
    background-color: transparent;
    cursor:pointer;
    color:var(--color-4);
  }
`