import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import NewPostModal from "./components/NewPostModal";
import PostGrid from "./components/PostGrid";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <Profile />
        <NewPostModal />
        <PostGrid />
      </main>
      <Footer />
    </>
  );
}

export default App;
