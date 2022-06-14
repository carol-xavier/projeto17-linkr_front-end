import styled from "styled-components";
import TrendingBox from "../TrendingBox";

function Posts() {
  return(
    <div>
    <PostContainer>
      
    </PostContainer>
    <TrendingBox />
    </div>
  );
}

export default Posts;

const PostContainer = styled.section`
  display: flex;
`