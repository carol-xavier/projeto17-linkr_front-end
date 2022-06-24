import styled from "styled-components";
import PostComment from "./PostComment";
import img from "../../../../assets/img/usericon.png"

function Comments({ comments, setComments }) {

  function assembleComments() {
    if( !comments.length ) {
      return <></>;
    }

    return (
      <article>
        { comments.map( comment => <PostComment key={ comment.id } comment={ comment } /> ) }
      </article>
    )
  }

  return (
    <CommentsContainer>
      <section>
        { assembleComments() }
      </section>
      <article className="input-comment">
        <img src={ img } alt="" />
        <input type="text" placeholder="write a comment..." id="" />
      </article>
    </CommentsContainer>
  )
}

export default Comments;

const CommentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: auto;

  padding-inline: 15px;

  &>section {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 25rem;

    overflow-y: auto;
  }

  .input-comment {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 3.5rem;

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }

    input {
      width: 100%;
      height: 2rem;
      margin-left: 10px;
      border-radius: 5px;
      padding-left: 5px;

      background-color: var( --color-3);
    }
  }
  
`