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
import RestaurantDetails from "./pages/RestaurantDetails/RestaurantDetails";
import FoodDetails from "./pages/FoodDetails/FoodDetails";
import CategoryDetail from "./components/page/LocalDishesPage/Category/CategoryDetail";
import NotFound from "./components/page/NotFound/NotFound";
import Categories from "./pages/Categories/Categories";
import { ToastProvider } from "./hook/ToastContext";
import ToastContainer from "./components/common/Toast/ToastContainer";
import BlogDetail from "./pages/BlogDetail/BlogDetail";

const HomePageWithLayout = withLayout(HomePage);
const LocalDishesPageLayout = withLayout(LocalDishesPage);
const ProfilePageLayout = withLayout(Profile);
const DiningPlaceLayout = withLayout(DiningPlace);
const BlogLayout = withLayout(Blog);
const RestaurantDetailsLayout = withLayout(RestaurantDetails);
const FoodDetailsLayout = withLayout(FoodDetails);
const CategoryDetailLayout = withLayout(CategoryDetail);
const CategoriesLayout = withLayout(Categories);
const BlogDetailLayout = withLayout(BlogDetail);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (

    <UserProvider>
      <ToastProvider>
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
              <Route path="/dining-places/:id" element={<RestaurantDetailsLayout />} />
              <Route path="/local-dishes/:id" element={<FoodDetailsLayout />} />
              <Route path="/categories" element={<CategoriesLayout />} />
              <Route path="/categories/:id" element={<CategoryDetailLayout />} />
              <Route path="/blogsnnews/:id" element={<BlogDetailLayout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          <ToastContainer />
        </LoaderProvider>
      </ToastProvider>
    </UserProvider>



  );
};


export default App;
