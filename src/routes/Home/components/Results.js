import React, {Component} from 'react'
import SingleResult from './SingleResult';
import SortButtons from './SortButtons';

class Results extends Component {

    constructor (props) {
        super(props);

        this.state = {

        };
    }

    render () {
        let {results, sortBy} = this.props;

        let resultsToShow = results.items.map((item, i) => (
            <SingleResult repo={item} key={'single_result_' + i} />
        ));

        return (
            <div>
                {resultsToShow}
            </div>
        );
    }
}

export default Results
