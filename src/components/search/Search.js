import React from "react";

function Search(props) {
    let { searchhandler, searchterm, placeholder } = props;
    return (
        <div className="flex justify-center">
            <input
                className="px-4 py-2 m-4 w-96 border-2 rounded-lg border-gray-200 focus:outline-none focus:border-gray-900 text-gray-500 focus:fixed focus:top-10 md:focus:relative md:focus:top-0"
                type="search"
                placeholder={placeholder}
                ref={searchterm}
                onChange={() => searchhandler()}
            />
        </div>
    );
}

export default Search;
