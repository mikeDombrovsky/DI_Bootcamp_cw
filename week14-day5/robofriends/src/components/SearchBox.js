import React from "react";

const SearchBox = ({ seachChange }) => {
    return (
        <div className="pa2">
            <input type="search" placeholder="search robots" className="pa3 b--green bg-lightest-blue" onChange={seachChange} />
        </div>
    )
}

export default SearchBox;