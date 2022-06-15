import styled from "styled-components";
import MainScreen from "../Layout/MainScreen";
import { useEffect, useState } from "react";
import axios from "axios";
import { getContext } from "../../hooks/ContextAPI";
import UserPost from "../Layout/Posts/UserPost";

function Posts() {
  const {apiUrl} = getContext();
  const [posts, setPosts] = useState([]);

  function assemblyPosts(){
    return posts.map(post => <UserPost postData={post} /> );
  }

  useEffect(() => {
    axios.get(`${apiUrl}/timeline`)
      .then(res => {
        setPosts(res.data);
      })
      .catch(e => console.log(e));
  },[apiUrl])

  return(
    <MainScreen>
      <PostsContainer>
        <h1>timeline</h1>
        {assemblyPosts()}
      </PostsContainer>
    </MainScreen>
  );
}

export default Posts;

const PostsContainer = styled.section`
  
  display: flex;
  flex-direction: column;
  width: 100%;
  
  h1 {
    padding-block: 0.8rem;
    font-size: 1.8rem;
    padding-left: 0;
 
    @media (max-width: 500px) {      
      padding-left: 0.8rem;
    }
  }

`;


