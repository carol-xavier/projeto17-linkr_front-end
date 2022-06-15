import { useState } from "react";
import styled from "styled-components";
import image from "../../../assets/img/usericon.png";
import { ThreeDots } from "react-loader-spinner";
import { getContext } from "../../../hooks/ContextAPI";
import axios from "axios";
import getHashtags from "../../../utils/getHashtags";
import getTextWithoutHashtags from "../../../utils/getTextWhithoutHashtags";

function PublishPost() {
  const { apiUrl } = getContext();
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState({
    link: "",
    postBody: ""
  });

  function handleChange(e) {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  }

  function handlePost(e) {
    e.preventDefault();
    setLoading(true);
    const body = {
      link: postData.link,
      postBody: getTextWithoutHashtags(postData.postBody),
      hashtags: getHashtags(postData.postBody)
    }

    axios.post(`${apiUrl}/timeline/post`, body)
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
        window.alert("An error occurred while trying to publish your link.");
      });
  }

  function buttonLogin() {
    if(loading){
      return <button><ThreeDots color="#fff" width={'100%'} height={'0.8rem'} /></button>;
    }
    return <button type="submit">Publish</button>;
  }

  return(
    <PublishPostContainer>
      <section>
        <img src={image} alt="" />
      </section>
      <form onSubmit={handlePost}>
        <p>What are you going to share today?</p>
        <input 
          className={}
          type="text" 
          placeholder="http://..." 
          name="link" onChange={handleChange} 
          required 
        />
        <textarea placeholder="Awesome article about #javascript" name="postBody" onChange={handleChange} />
        {buttonLogin()}
      </form>
    </PublishPostContainer>
  )
}

export default PublishPost;

const PublishPostContainer = styled.article`
  display: flex;
  width: 100%;
  height: auto;
  padding: 1rem;
  overflow: hidden;
  margin-bottom: 1rem;
  background-color: var(--color-4);

  @media (min-width: 500px) {
    border-radius: 0.8rem;
  }

  &>section {
    img {
      --size-icon: 2.5rem;
      width: var(--size-icon);
      height: var(--size-icon);

      object-fit: cover;
      object-position: center;
      background-repeat: no-repeat;

      border-radius: 50%;

      margin-right: 0.8rem;
    }
  }

  &>form {
    --background-input: #dcdcdc;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;

    background: none;

    &>p {
      width: 100%;
      font-size: 1.2rem;
      color: #707070;
      margin-bottom: 1rem;
    }

    &>input {
      width: 100%;
      height: 2rem;
      border: none;
      border-radius: 0.3rem;
      padding-left: 0.8rem;
      margin-bottom: 0.8rem;
      background-color: var(--background-input);
    }

    &>textarea {
      width: 100%;
      height: 4rem;
      border: none;
      border-radius: 0.3rem;
      padding-left: 0.8rem;
      margin-bottom: 0.8rem;
      resize: vertical;
      background-color: var(--background-input);
    }

    &>button {
      width: 6rem;
      height: 2rem;
      border: none;
      border-radius: 0.3rem;
      background-color: var(--color-1);
      color: var(--text-color-main);

      &:hover {
        background-color: var(--color-button-hover);
      }

      @media (min-width: 400px) {
        width: 30%;
      }
      @media (min-width: 750px) {
        width: 10rem;
      }
    }
  }
`