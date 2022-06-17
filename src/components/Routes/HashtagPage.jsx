import { useParams } from "react-router-dom";
import MainScreen from "../Layout/MainScreen";

function HashtagPage() {
  const { hashtag } = useParams();

  return (
    <MainScreen route={`hashtag/${hashtag}`} >
      <h1># {hashtag}</h1>
    </MainScreen>
  );
};

export default HashtagPage;