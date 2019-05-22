import React from 'react';

const SearchBox = ({onSearchChange}) => {
    return (
        <div>
            <input onChange={onSearchChange} type="search" />
        </div>
    );
};

export default SearchBox;