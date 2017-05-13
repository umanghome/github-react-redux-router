import React, {Component} from 'react'
import ResultsContainer from './ResultsContainer';
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

class HomeView extends Component {

    constructor (props) {
        super(props);

        this.state = {

        };
    }

    render () {
        let {
            changeSortBy,
            changeOrder,
            getSearchResults,
            order,
            searchResults,
            searchString,
            sortBy,
            updateSearchString } = this.props;

        console.log(this.props);

        return (
          <div>
            <form
                onSubmit={e => { e.preventDefault(); getSearchResults(searchString); }} >
                <div className="form-group">
                    <input
                        className="form-control"
                        onChange={e => { updateSearchString(e.target.value.trim()); }}
                        placeholder="Type query and press Enter or Return"
                        type="text"
                        value={searchString} />
                </div>
            </form>
            <ResultsContainer
                changeSortBy={changeSortBy}
                changeOrder={changeOrder}
                order={order}
                results={searchResults}
                sortBy={sortBy} />
          </div>
        );
    }
}

export default HomeView
