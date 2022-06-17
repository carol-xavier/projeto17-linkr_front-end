import { useState } from "react";
import { useParams } from "react-router-dom";
import MainScreen from "../Layout/MainScreen";

function HashtagPage() {
  const { hashtag } = useParams();
  const [refresh, setRefresh] = useState(false);

  return (
    <MainScreen route={`hashtag/${hashtag}`} refresh={refresh}>
      <h1># {hashtag}</h1>
    </MainScreen>
  );
};

export default HashtagPage;