import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hidebuttons }) => {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    navigate("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon />
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search something"/>
        <MicIcon className="mick" style={{ marginRight: "5px" }} />
        <CameraAltIcon className="cam" />
      </div>
      {!hidebuttons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined" >
            Google Search
          </Button>
          <Button variant="outlined">I am feeling lucky</Button>
        </div>
      ) : (
        <div className="search__buttons" style={{ display: "none" }}>
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
