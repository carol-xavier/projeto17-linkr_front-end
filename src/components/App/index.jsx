import "../../styled/css/reset.css";
import "../../styled/css/index.css";
import "../../styled/css/query.css";

import { Provider } from "../../hooks/ContextAPI";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Routes/Home";
import HashtagPage from "../Routes/HashtagPage";


function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;