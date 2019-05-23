import React from 'react';


const SearchBox = ({onSearch}) => {
    return (
        <div>
            <input onChange={onSearch} type='search' />
        </div>
    )
}

export default SearchBox;