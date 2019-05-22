import React from 'react';
// import City from './City';

const CitiesList = ({cities}) => {
    const cityArr = cities.map (city => {
        return (
            <div>
                <img src="photos/calgary.jpg" alt={city.city} />
                <h1>{city.city}</h1>
                <h1>{city.admin}</h1>
            </div>
        );
    });
  
    return (
        <div>
            {cityArr}
            {/* <City /> */}
        </div>
    );
};

export default CitiesList;