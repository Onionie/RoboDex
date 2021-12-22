import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  // props destructure into placeholder, handleChange
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
