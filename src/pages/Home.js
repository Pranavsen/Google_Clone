import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import Search from "./Search";
import "./Home.css";
import "./Profile_.png";
const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <p>About</p>
          <p>Store</p>
        </div>
        <div className="home__headerRight">
          <p>Gmail</p>
          <p>Images</p>
          <AppsIcon />
          <Avatar>PS</Avatar>
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="google_logo"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
