import "../../styled/css/reset.css";
import "../../styled/css/index.css";
import "../../styled/css/query.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "../../hooks/ContextAPI";
import Posts from "../Routes/Posts";
import Signup from "../Signup";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;