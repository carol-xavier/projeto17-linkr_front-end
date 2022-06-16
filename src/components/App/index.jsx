import "../../styled/css/reset.css";
import "../../styled/css/index.css";
import "../../styled/css/query.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "../../hooks/ContextAPI";
import Home from "../Routes/Home";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;