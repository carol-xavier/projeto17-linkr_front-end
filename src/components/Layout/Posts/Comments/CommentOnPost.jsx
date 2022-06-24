import styled from "styled-components";
import img from "../../../../assets/img/usericon.png"

function CommentOnPost() {
  return (
    <CommentOnPostContainer>
      <img src={ img } alt="" />
      <div className="describe">
        <h3>João Avatares <span> • following </span></h3>
        <p>Adorei esse post, ajuda muito a usar MaterialUI Adorei esse post, ajuda muito a usar MaterialUI Adorei esse post, ajuda muito a usar MaterialUI</p>
      </div>
    </CommentOnPostContainer>
  )
}

export default CommentOnPost;

const CommentOnPostContainer = styled.article`
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