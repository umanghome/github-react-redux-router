import React, {Component} from 'react'
import { Link } from 'react-router'

class SingleResult extends Component {

    constructor (props) {
        super(props);

        this.state = {

        };
    }

    render () {
        let repo = this.props.repo;

        return (
            <div className="panel panel-default" style={{boxSizing: 'border-box', padding: '10px 20px'}}>
                <p style={{fontSize: '1.3em'}}>
                    <strong>
                        <Link to={'/' + repo.full_name}>
                            {repo.full_name}
                        </Link>
                    </strong>
                </p>
                <p>
                    <strong>Language: </strong>{repo.language}
                </p>
                <p>
                    <strong>Forks: </strong>{repo.forks_count}
                </p>
                <p>
                    <strong>Stars: </strong>{repo.stargazers_count}
                </p>
                <p>
                    <a href={repo.svn_url} target="_blank">Open in GitHub</a>
                </p>
            </div>
        );
    }
}

export default SingleResult
