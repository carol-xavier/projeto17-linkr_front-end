import "../../styled/css/reset.css";
import "../../styled/css/index.css";
import "../../styled/css/query.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "../../hooks/ContextAPI";
import Posts from "../Routes/Posts";
import HashtagPage from "../Routes/HashtagPage";
import UserPage from "../Routes/UserPage.jsx";


function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
          <Route path="/user/:userId" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;