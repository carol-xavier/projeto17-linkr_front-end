import styled from "styled-components";

function PublishPost() {
  const img = 'https://avatars3.githubusercontent.com/u/527098?v=3&s=460';

  return(
    <PublishPostContainer>
      <section>
        <img src={img} alt="" />
      </section>
      <section className="post-body">
        <p>What are you going to share today?</p>
        <input type="text" placeholder="http://..." />
        <textarea placeholder="Awesome article about #javascript"></textarea>
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