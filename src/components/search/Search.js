import React from "react";

function Search(props) {
    let { searchhandler, searchterm } = props;
    return (
        <div className="flex items-center justify-center">
            <input
                className="px-4 py-2 m-4 w-96 border-2 rounded-lg border-gray-200 focus:outline-none focus:border-slate-500 text-gray-500 "
                type="search"
                placeholder="Search Something !"
                ref={searchterm}
                onChange={() => searchhandler()}
            />
        </div>
    );
}

export default Search;
