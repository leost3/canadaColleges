import React from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import CitiesList from '../components/CitiesList';
import { connect } from 'react-redux';
import {fetchCities, setSearchField} from '../actions'

class App extends React.Component{

    componentDidMount() {
        this.props.onRequestCities();
    }


    render() {
        console.log(this.props)
        const { cities, onSearchChange } = this.props;
        return (
            <div>
                <SearchBox onSearchChange={onSearchChange}/>
                <CitiesList cities={cities} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
  cities: state.cities,
  text: state.text
});

const mapDispatchToProps = dispatch => ({
    onRequestCities: () => dispatch(fetchCities()),
    onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);