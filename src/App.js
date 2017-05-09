// React master (create & render)
import React from 'react';
import {render} from 'react-dom';
import ReposList from './ReposList';

// Grabbin data from GitHub
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
		console.log('render');
	}
}

// Render
render(<App repos={repos} />, document.getElementById('app'));