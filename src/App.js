import React from 'react';
import {render} from 'react-dom';
import ReposList from './ReposList';

// init repos Array
let repos = []

// Create generic App Component
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
