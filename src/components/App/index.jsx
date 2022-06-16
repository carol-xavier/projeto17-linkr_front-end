import "../../styled/css/reset.css";
import "../../styled/css/index.css";
import "../../styled/css/query.css";

import { Provider } from "../../hooks/ContextAPI";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Signup from "../Routes/Signup";
import Login from "../Routes/Login";
import HashtagPage from "../Routes/HashtagPage";
import UserPage from "../Routes/UserPage.jsx";


function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/timeline" element={<Home />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
          <Route path="/user/:userId" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;