import React, {Component} from 'react'

class SortButtons extends Component {

    constructor (props) {
        super(props);

        this.state = {

        };
    }

    render () {
        let {sortBy, changeSortBy, changeOrder, order} = this.props;

        const sortOptions = ['Relevance', 'Name', 'Stars', 'Watchers', 'Forks'];
        const orderOptions = ['Ascending', 'Descending'];

        let sortByButtons = sortOptions.map((option, i) => (
            <button
                className={"btn btn-default" + (sortBy === option ? ' active' : '')}
                key={'sort_by_button_' + i}
                onClick={e => { e.preventDefault(); changeSortBy(option); }}
                type="button" >
                    {option}
            </button>
        ))

        let orderButtons = orderOptions.map((option, i) => (
            <button
                className={"btn btn-default" + (order === option ? ' active' : '')}
                key={'order_button_' + i}
                onClick={e => { e.preventDefault(); changeOrder(option); }}
                type="button" >
                    {option}
            </button>
        ))

        return (
            <div>
                <div className="text-center">
                    <span style={{marginRight: '10px'}}>
                        Sort By:
                    </span>
                    <div className="btn-group" role="group">
                        {sortByButtons}
                    </div>
                </div>
                <div className="text-center" style={{marginTop: '10px'}}>
                    <span style={{marginRight: '10px'}}>
                        Order:
                    </span>
                    <div className="btn-group" role="group">
                        {orderButtons}
                    </div>
                </div>
            </div>
        );
    }
}

export default SortButtons
