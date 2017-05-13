import React, {Component} from 'react'
import Results from './Results';
import SingleResult from './SingleResult';
import SortButtons from './SortButtons';

class ResultsContainer extends Component {

    constructor (props) {
        super(props);

        this.state = {

        };
    }

    render () {
        let {
            changeSortBy,
            changeOrder,
            order,
            results,
            sortBy} = this.props;
            

        if (!results) {
            return (
                <div></div>
            );
        }
    
        if (results.message) {
            return (
                <div>
                    {results.message}
                </div>
            )
        } 

        if (results.total_count == 0) {
            return (
                <div>
                    <p>
                        No results found!
                    </p>
                </div>
            );
        }

        let resultsToShow = results.items.map((item, i) => (
            <SingleResult repo={item} key={'single_result_' + i} />
        ));

        const sortOptions = ['Relevance', 'Name', 'Stars', 'Watchers', 'Forks'];

        let sortByButtons = sortOptions.map((option, i) => (
            <button
                className={"btn btn-default" + (sortBy === option ? ' active' : '')}
                key={'sort_by_button_' + i}
                onClick={e => { e.preventDefault(); changeSortBy(option); }}
                type="button" >
                    {option}
            </button>
        ))

        return (
            <div>
                <p className="text-center">
                    {results.total_count} results found. Showing {results.items.length}.
                </p>
                <SortButtons 
                    changeSortBy={changeSortBy}
                    changeOrder={changeOrder}
                    order={order}
                    sortBy={sortBy} />
                <div style={{marginTop: '30px'}}>
                    <Results results={results} sortBy={sortBy} />
                </div>
            </div>
        );

    }
}

export default ResultsContainer
