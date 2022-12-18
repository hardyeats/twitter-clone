import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SignupModal from "./pages/SignupModal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />}>
        <Route path="signup" element={<SignupModal />} />
      </Route>
    </Routes>
  );
}

export default App;
