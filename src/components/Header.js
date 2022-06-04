import React from "react";
import propTypes from "prop-types";

export default function Header(props) {
  return (
    // text-center is bootstrap class
    <div className="text-center">
      {/* here title and searchbar props called from page app.js > Header section */}
      {props.title}
      <br />
      {props.nosearchbar ? "    --- no search bar  ---" : "hi"}
    </div>
  );
}

// ----*** default props and propTypes ***-----

// default props are use to pass values which are not defined, this will save your code from crash
// If title is not specified before this will specify it as default value, if specified do nothing

// Header.defaultProps = {
//   title: "Your Title Here",
//   nosearchbar: false
// };



// import propTypes from "prop-types"; -- is needed to perform propTypes
// propType is used to define type like string, number, boolean other than that will show error, just for safety purpose
// Header.propTypes = {
//   title: propTypes.string,
//   nosearchbar: propTypes.bool
  // nosearchbar: propTypes.bool.isRequired this will show error if nosearchbar="true or false" 
// };
