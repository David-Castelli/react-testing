import React from 'react';
import {render} from 'react-dom';
import ReposList from './ReposList';

let repos = [{}]

repos=test;

class App extends React.Component {
	render() {
		return (
			<div>
                <h1>iGenius repositories</h1>
                <ReposList repos={this.props.repos}/>
            </div>
		)
	}
}

render(<App repos={repos} />, document.getElementById('app'));