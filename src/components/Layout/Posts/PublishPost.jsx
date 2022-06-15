import { useState } from "react";
import styled from "styled-components";
import image from "../../../assets/img/usericon.png";

function PublishPost() {
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState({
    link: "",
    postBody: "",
    hashtags: [],
  });

  function handleChange(e) {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  }

  return(
    <PublishPostContainer>
      <section>
        <img src={image} alt="" />
      </section>
      <section className="post-body">
        <p>What are you going to share today?</p>
        <input type="text" placeholder="http://..." name="link" onChange={handleChange} />
        <textarea placeholder="Awesome article about #javascript" name="postBody" onChange={handleChange} />
        <button>Publish</button>
      </section>
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

  &>section.post-body {
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