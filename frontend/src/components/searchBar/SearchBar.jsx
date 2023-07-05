import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { myContext } from "../../App";
import "./SearchBar.scss";
import { useState } from "react";

const SearchBar = () => {
  const { data, filteredData, setFilteredData, inputText, setInputText } =
    useContext(myContext);

  // Handle filtering data
  const handleFilter = (event) => {
    // What you type in the input field to search what you want to find
    const searchedItem = event.target.value;
    setInputText(searchedItem);
    // Filtered result that you get once you type in the input field
    const searchItemResult = data.filter((value) => {
      return value.title.toLowerCase().includes(searchedItem.toLowerCase());
    });

    if (searchedItem.length === "") {
      setFilteredData([]);
    } else {
      setFilteredData(searchItemResult);
    }
  };

  // Clear input
  const clearInput = () => {
    setFilteredData([]);
    setInputText("");
  };

  return (
    <div className="search">
      <div className="searchInput">
        <input
          type="text"
          name="search"
          value={inputText}
          onChange={handleFilter}
          placeholder="Type Here"
        />

        <div className="searchIcon-container">
          {filteredData.length === 0 && inputText === "" ? (
            <AiOutlineSearch className="searchIcon" />
          ) : (
            <AiOutlineClose className="searchIcon" onClick={clearInput} />
          )}
        </div>
      </div>

      {filteredData.length !== 0 && (
        <dir className="data-result">
          {filteredData.slice(0, 10).map((value, index) => {
            return (
              <NavLink to={value.link}>
                <p key={index} className="searchTitle">
                  {value.title}
                </p>
              </NavLink>
            );
          })}
        </dir>
      )}
    </div>
  );
};

export default SearchBar;
