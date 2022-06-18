import { useEffect, useState } from "react";
import { getContext } from "../../hooks/ContextAPI";
import {api} from "./../../utils/api";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import MainScreen from "../Layout/MainScreen";
import UserPost from "../Layout/Posts/UserPost";
import PublishPost from "../Layout/Posts/PublishPost";


function Posts() {  
  const [refresh, setRefresh] = useState(false);

  return(
    <MainScreen route="/timeline" >
        <h1>timeline</h1>
        <PublishPost />
    </MainScreen>
  );
}

export default Posts;


