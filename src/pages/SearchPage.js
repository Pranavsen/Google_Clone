import { Link } from "react-router-dom";
import React from "react";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import ImageIcon from "@material-ui/icons/Image";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import AssignmentIcon from "@material-ui/icons/Assignment";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import './Home.css'
const SearchPage = () => {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log(term);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="google_logo"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hidebuttons />
          {<div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/search">Image</Link>
              </div>
              <div className="searchPage__option">
                <VideoLibraryIcon />
                <Link to="/search">Video</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/search">Map</Link>
              </div>
              <div className="searchPage__option">
                <ShoppingCartIcon />
                <Link to="/search">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <AssignmentIcon />
                <Link to="/search">News</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/search">More</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/search">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/search">Tools</Link>
              </div>
            </div>
          </div>}
        </div>
      </div>

      {/*Search page result */}
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}) for {term}
          </p>
        {
          data?.items.map((item)=>{
            return <div className="searchPage__result">
            <a href={item.link} className="searchPage__resultLink">

            {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src && (
              <img
                src={item.pagemap?.cse_image[0]?.src}
                className="searchPage__resultImage"
                alt="firstimage"
              />
            )}

              {item.displayLink}
            </a>

            <a href={item.link} className="searchPage__resultTitle">
              <h2>{item.title}</h2>
            </a>
            <p className="searchPage__resultdescription">
             {item.snippet}
            </p>
          </div>
          })
        }  
          
        </div>
      )}
    </div>
  );
};

export default SearchPage;
