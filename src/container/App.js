import React from 'react';
import SearchBox from '../components/SearchBox';
import CitiesList from '../components/CitiesList';
import { connect } from 'react-redux';
import {textChange} from '../actions';


class App extends React.Component{
    render() {
        const {searchField } = this.props;
        return (
            <div>
                <SearchBox onSearch={this.props.onSearch}  />
                <CitiesList searchField={searchField}/>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    searchField: state.searchField.searchField
});

const mapDispatchToProps = dispatch => ({
    onSearch: (e) => dispatch(textChange(e.target.value))
});


export default connect(mapStateToProps,mapDispatchToProps)(App);