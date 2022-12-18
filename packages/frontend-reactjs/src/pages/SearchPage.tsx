import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const SearchPage = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Outlet />
    </>
  );
};

export default SearchPage;
