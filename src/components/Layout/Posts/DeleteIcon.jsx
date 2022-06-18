import { useState } from "react";
import {FaTrash} from "react-icons/fa";
import DeletePopUp from "./DeletePopUp";

function DeleteIcon({postId}){
    const [popUp, setPopUp] = useState(false);
    
    function handleClick(){
        setPopUp(true);
    };
    
    return (
        <>
          <button onClick={handleClick} >
            <FaTrash />
          </button>
          {popUp && <DeletePopUp 
          id={postId}
          popUp={popUp}
          setPopUp={setPopUp}/>}
        </>
      );
}

export default DeleteIcon;