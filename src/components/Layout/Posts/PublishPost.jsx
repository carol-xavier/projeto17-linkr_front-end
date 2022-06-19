import { useState } from "react";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import getHashtags from "../../../utils/getHashtags";
import isValidUrl from "../../../utils/isValidUrl";
import { api } from "../../../utils/api";
import { getContext } from "../../../hooks/ContextAPI";

function PublishPost() {
  const { header, imgUser ,refresh,setRefresh } = getContext();
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState({ link: "", postBody: "" });
  const [linkError, setLinkError] = useState(false);

  const image = "test";
  
  function handleChange(e) {
    setLinkError(false);
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  }

  function handlePost(e) {
    e.preventDefault();

    if(!isValidUrl(postData.link)){
      setLinkError(true);
      return;
    }

    setLoading(false);
    
    const body = {
      ...postData,
      hashtags: getHashtags(postData.postBody)
    }

    api.post('/timeline/post', body, header)
      .then(() => {
        setRefresh(!refresh);
        setPostData({
          link: "",
          postBody: ""
        });
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
      return (
        <button>
          <ThreeDots color="#fff" width={'100%'} height={'0.8rem'} />
        </button>
      );
    }
    return <button type="submit">Publish</button>;
  }

  return(
    <PublishPostContainer>
      <section>
        <img src={imgUser} alt="" />
      </section>
      <form onSubmit={handlePost}>
        <p>What are you going to share today?</p>
        <input 
          className={linkError ? "error" : ""}
          type="text" 
          placeholder="http://..." 
          value={postData.link}
          name="link" onChange={handleChange} 
          required 
        />
        <textarea 
          placeholder="Awesome article about #javascript" 
          value={postData.postBody}
          name="postBody" 
          onChange={handleChange} 
        />
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

    &>input.error {
      color: #ff0000;
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