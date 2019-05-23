import React from 'react';
import CityCard from './CityCard';

const CitiesList = ({searchField}) => {
    return (
        <div>
            <CityCard searchField={searchField} />
        </div>
    );
};

export default CitiesList;