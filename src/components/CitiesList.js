import React from 'react';
import {requestCities} from '../actions';
import { connect } from 'react-redux';
import * as citiesArray from '../data/cities';


class CitiesList extends React.Component{
    componentDidMount() {
        this.props.requestCities();
    }


    renderCitiesList = () => {
        const {cities } = this.props;
        return cities.map((city, i) => {
            if (citiesArray.default.includes(city.city)) {
                return (
                    <div style={{display:'block'}}>
                        <h1>{i+1}.{city.city}</h1>
                    </div>
                );
            }
        });
    };

    render() {
        return (
            <div>
                {this.renderCitiesList()}
            </div>
        );
    };
};

const mapStateToProps = state => ({
  cities: state.cities
});

// const  mapDispatchToProps = dispatch => ({
//     onRequest: () => dispatch(requestCities())
// })
  

export default connect(mapStateToProps, {requestCities})(CitiesList);