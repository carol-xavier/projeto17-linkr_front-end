import { useState } from "react";
import MainScreen from "../Layout/MainScreen";
import PublishPost from "../Layout/Posts/PublishPost";

function Posts() {
  const [refresh, setRefresh] = useState(false);
  console.log(refresh);
  return(
    <MainScreen route="/timeline" refresh={refresh} >
        <h1>timeline</h1>
        <PublishPost refresh={refresh} setRefresh={setRefresh} />
    </MainScreen>
  );
}

export default Posts;


