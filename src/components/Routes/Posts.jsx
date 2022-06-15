import styled from "styled-components";
import MainScreen from "../Layout/MainScreen";
import { BsHeart } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import imgDefault from "../../assets/img/usericon.png";
import { getContext } from "../../hooks/ContextAPI";

function Posts() {
  const {apiUrl} = getContext();
  const [posts, setPosts] = useState([]);

  function assemblyPosts(){
    return posts.map(post => <Post postData={post} /> );
  }

  useEffect(() => {
    axios.get(`${apiUrl}/timeline`)
      .then(res => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch(e => console.log(e));
  },[])

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
  }
`

function Post({postData}){
  const {name, postBody, link} = postData;
  const image = postData.image || imgDefault;

  return (
    <PostContainer>
      <section>
        <img src={image} alt="User image"/>
        <button>
          <BsHeart />
        </button>
        <p>13 likes</p>
      </section>
      <section className="post-body">
        <h2>{name}</h2>
        <p>{postBody}</p>
        <h3>link aqui</h3>
      </section>
    </PostContainer>
  )
}

const PostContainer = styled.article`
  display: flex;
  width: 100%;
  height: auto;

  padding: 1rem;

  background-color: var(--color-2);

  &>section {
    display: flex;
    flex-direction: column;

    padding-right: 1rem;
    
    img {
      --size-icon: 2.5rem;
      width: var(--size-icon);
      height: var(--size-icon);

      object-fit: cover;
      object-position: center;
      background-repeat: no-repeat;

      border-radius: 50%;
    }

    button {
      background: none;
      padding-block: 0.8rem;
      
      svg {
        color: var(--text-color-main);
      }
    }

    p {
      font-size: 0.8rem;
    }
  }

  &>section.post-body {
    font-weight: var(--font-weight-regular);
    
    h2 {
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    p {
      font-size: 0.9rem;
      color: var(--text-color-secudary);
      margin-bottom: 0.8rem;

      span {
        color: var(--text-color-main)
      }
    }
  }

  
`