import styled from "styled-components";
import MainScreen from "../Layout/MainScreen";
import TrendingBox from "../TrendingBox";
import { useEffect, useState } from "react";
import axios from "axios";
import { getContext } from "../../hooks/ContextAPI";
import UserPost from "../Layout/Posts/UserPost";
import { ThreeDots } from "react-loader-spinner";

function Posts() {
  const {apiUrl} = getContext();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  function assemblyPosts(){
    if(loading){
      return <ThreeDots color="#fff" width={'100%'} height={'1.5rem'} />
    }

    if(posts.length === 0){
      return <h2>There are no posts yet</h2>
    }

    return posts.map((post, id) => <UserPost key={id} postData={post} /> );
  }

  function errorGetPosts(e) {
    setLoading(false);
    console.log(e);
    window.alert("An error occurred while trying to fetch the posts, please refresh the page.");
  }

  useEffect(() => {
    axios.get(`${apiUrl}/timeline`)
      .then(res => {
        setLoading(false);
        setPosts(res.data);
      })
      .catch(errorGetPosts);
  },[apiUrl])

  return(
    <MainScreen >
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

  &>h2 {
    padding: 0.8rem;
    color: var(--text-color-secodary);
  }

`;


