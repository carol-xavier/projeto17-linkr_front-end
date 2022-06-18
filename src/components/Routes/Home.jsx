import MainScreen from "../Layout/MainScreen";
import PublishPost from "../Layout/Posts/PublishPost";

function Posts() {  

  return(
    <MainScreen route="/timeline" >
        <h1>timeline</h1>
        <PublishPost />
    </MainScreen>
  );
}

export default Posts;