import { BiLinkAlt } from "react-icons/bi";
import styled from "styled-components";

function LinkPreview({metaData}) {
  const {title, description, image, link} = metaData;

  function handleImageLink() {
    return image ? <img src={image} alt="" /> : <BiLinkAlt  />;
  }

  return (
    <LinkPreviewContainer>
      <a href={link} target="_blank" rel="noreferrer">
        <section>
          <p>{title}</p>
          <small>{description}</small>
          <p className="link">{link}</p>
        </section>
        <section>
          { handleImageLink() }
        </section>
      </a>
    </LinkPreviewContainer>
  );
}

export default LinkPreview;

const LinkPreviewContainer = styled.article`
  display: flex;
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: 7rem;
  border-radius: 0.5rem;;
  
  &>a {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-width: 100%;
    height: auto;
    text-decoration: none;
    overflow: hidden;
    
    &>section {
      --preview-color-1: #CECECE;
      --preview-color-2: #9B9595;
      --preview-font-size1: 0.9rem;
      --preview-font-size2: 0.75rem;

      display: flex;
      width: 70%;
      height: 100%;
      flex-direction: column;
      padding: 0.5rem;
      border: 1px solid var(--color-3);
      border-top-left-radius: 0.8rem;
      border-bottom-left-radius: 0.8rem;
      background-color: var(--color-2);
      font-weight: var(--font-weight-regular);
      overflow-y: auto;
      overflow-x: hidden;

      p {
        font-size: var(--preview-font-size1);
        color: var(--preview-color-1);
      }

      small {
        font-size: var(--preview-font-size2);
        color: var(--preview-color-2);
        margin-bottom: 0.8rem;
      }

      p.link {
        font-size: var(--preview-font-size2);
        color: var(--preview-color-1);
        margin-bottom: 0;
      }
    }

    &>section:last-child {
      justify-content: center;
      align-items: center;
      width: 30%;
      min-width: 30%;
      max-width: 30%;
      padding: 0;
      border-radius: 0;
      border-top-right-radius: 0.8rem;
      border-bottom-right-radius: 0.8rem;
      background-color: var(--color-3);
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
    
        object-fit: contain;
        object-position: center;
        background-repeat: no-repeat;
      }

      &>svg {
        width: 65%;
        height: 65%;
        color: var(--color-1);
      }
    }
  }


`