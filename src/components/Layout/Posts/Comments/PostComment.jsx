import { Link } from "react-router-dom";
import styled from "styled-components";

function PostComment({ comment, userId, redirect }) {
  const { image, name, commentText, state } = comment;

  function stateUser() {
    if( state === '' ) return '';

    const senderIsMine = state === 'author' ? "post's author" : state;
    return <span> • { senderIsMine }</span>
  }

  function handleRedirectUserPage() {
    return (
      <Link
        to={`/user/${ redirect.userId }`} 
        state={ redirect }
      >
        <h3>{ name }</h3>
      </Link>
    )
  }

  return (
    <PostCommentContainer>
      <img src={ image } alt="" />
      <div className="describe">
        <h3>{ handleRedirectUserPage() } { stateUser() }</h3>
        <p>{ commentText }</p>
      </div>
    </PostCommentContainer>
  )
}

export default PostComment;

const PostCommentContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 3.5rem;
  padding-block: 0.5rem;

  border-bottom: 1px solid var( --color-3 );

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }  

  .describe {
    display: flex;
    flex-direction: column;
    width: 100%;

    margin-left: 15px;

    h3 {
      font-size: 0.9rem;
      margin-bottom: 5px;
      color: var( --color-4 );
      cursor: pointer;

      span {
        font-size: 0.85rem;
        color: var( --text-color-tertiary );
      }
    }

    p {
      font-size: 0.8rem;
      line-height: 0.98rem;
      color: var( --text-color-secondary );
    }
  }
`