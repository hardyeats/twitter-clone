import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
