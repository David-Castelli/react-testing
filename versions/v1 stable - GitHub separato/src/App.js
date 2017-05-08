// React master (create & render)
import React from 'react';
import {render} from 'react-dom';
import ReposList from './ReposList';

// Grabbin data from GitHub
let repos = [{}]
repos=test;

// Create generic App Component
class App extends React.Component {
	render() {
		return (
			<div>
				<h1>iGenius repositories</h1>
				{/* recupero la lista delle repo */}
				<ReposList repos={this.props.repos}/>
			</div>
		)
	}
}

// Render
render(<App repos={repos} />, document.getElementById('app'));
