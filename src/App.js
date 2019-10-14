import React, { useState } from "react";
import { hot } from "react-hot-loader";
import Joke from "./Joke";
import Stories from "./Stories";
import Tasks from "./Tasks";
import Gallery from "./Gallery";

function App() {
  const [userQuery, setUserQuery] = useState(""); // '' means apply empty string to destructure syntax
  const [showGallery, setShowGallery] = useState(true); // Display Gallery

  const updateUserQuery = e => {
    setUserQuery(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      searchQuery();
    }
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");
  };

  const toggleShowGallery = () => {
    setShowGallery(!showGallery);
  }

  return (
    <div className="App">
      <h1> Hello World </h1>{" "}
      <div className="form">
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />{" "}
        <button onClick={searchQuery}> Search </button>{" "}
      </div>{" "}
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <div>
        {
          showGallery ? <Gallery/> : null
        }
        <button onClick={toggleShowGallery}>
          {showGallery ? 'Hide' : 'Show'} Gallery
        </button>
      </div>
      <hr />
      <Stories />
    </div>
  );
}

export default hot(module)(App);
