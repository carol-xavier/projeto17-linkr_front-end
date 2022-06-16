import styled from "styled-components";
import MainScreen from "../Layout/MainScreen";
import { useEffect, useState } from "react";
import UserPost from "../Layout/Posts/UserPost";
import { ThreeDots } from "react-loader-spinner";
import PublishPost from "../Layout/Posts/PublishPost";
import { api } from "../../utils/api";

function Posts() {
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
    api.get('/timeline')
			.then(res => {
        setLoading(false);
        setPosts(res.data);
      })
			.catch(errorGetPosts);
  },[])

  return(
    <MainScreen route="/timeline" >
        <h1>timeline</h1>
        <PublishPost />
    </MainScreen>
  );
}

export default Posts;


