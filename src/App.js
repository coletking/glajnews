import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./front-office/pages/Home";
import ContactUS from "./front-office/component/ContactUS";
import Category from "./front-office/pages/Category";
import PostbyId from "./front-office/pages/PostbyId";
import Video from "./front-office/pages/Video";
import Register from "./CreateUser.js/Register";
import Logout from "./back-office/b-pages/Logout";
import Login from "./CreateUser.js/Login";
import AdminIndex from "./back-office/b-pages/AdminIndexPage";
import CreatePost from "./back-office/b-pages/CreatePost";
import Support from "./back-office/b-pages/Support";
import Viewpost from "./back-office/b-pages/ViewPost";
import ViewUser from "./back-office/b-pages/ViewUserPage";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import SeaerchNews from "./front-office/pages/SeaerchNews";
import { Helmet } from "react-helmet";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<ContactUS />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/posts/:id" element={<PostbyId />} />
          <Route path="/videos" element={<Video />} />
          <Route path="/auth/dashboard/admin" exact element={<AdminIndex />} />
          <Route
            path="/auth/dashboard/create/post"
            exact
            element={<CreatePost />}
          />
          <Route path="/auth/dashboard/support" exact element={<Support />} />
          <Route path="/auth/dashboard/viewpost" exact element={<Viewpost />} />
          <Route path="/auth/dashboard/viewuser" exact element={<ViewUser />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/logout" element={<Logout />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/news/:items" element={<SeaerchNews />} />
        </Routes>
      </BrowserRouter>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      </Helmet>
    </>
  );
}

export default App;
