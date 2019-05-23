import React from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../actions'
class CityCard extends React.Component{

    componentDidMount() {
        this.props.fetchCities();
    }


    render() {    
        const {searchField, cities} = this.props;

        const filtedCities = cities.filter(city => {
            return city.city.toLowerCase().includes(searchField);
        })

        console.log(filtedCities)

        return (
            filtedCities.map(city => {
                return (
                    <h1>{city.city}</h1>
                )
            })
        );
    };
};

const mapStateToProps = state => ({
  cities: state.cities
});


export default connect(mapStateToProps,{fetchCities})(CityCard);