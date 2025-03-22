import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import withLayout from "./layouts/withLayout";
import LocalDishesPage from "./pages/LocalDishesPage/LocalDishesPage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { UserProvider } from "./hook/userContext";
import { LoaderProvider } from './hook/LoaderContext';
import Profile from "./pages/Profile/Profile";
import Loader from "./components/common/Loader/Loader";
import DiningPlace from "./pages/DiningPlace/DiningPlace";
import Blog from "./pages/Blog/Blog";

const HomePageWithLayout = withLayout(HomePage);
const LocalDishesPageLayout = withLayout(LocalDishesPage);
const ProfilePageLayout = withLayout(Profile);
const DiningPlaceLayout = withLayout(DiningPlace);
const BlogLayout = withLayout(Blog);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Reset về đầu trang
  }, [pathname]);

  return null;
};

function App() {
  return (
    <UserProvider>
      <LoaderProvider>
        <Router>
          <ScrollToTop />
          <Loader />
          <Routes>
            <Route path="/" element={<HomePageWithLayout />} />
            <Route path="/local-dishes" element={<LocalDishesPageLayout />} />
            <Route path="/profile" element={<ProfilePageLayout />} />
            <Route path="/dining-places" element={<DiningPlaceLayout />} />
            <Route path="/blogsnnews" element={<BlogLayout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </LoaderProvider>
    </UserProvider>

  );
};


export default App;
