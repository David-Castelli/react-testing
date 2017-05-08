// React master (create & render)
import React from 'react';
import {render} from 'react-dom';
import ReposList from './ReposList';

// Grabbin data from GitHub
let repos = [{
		id: 1,
		name: 'Scott',
		phone: '555 111 5555'
	}, {
		id: 2,
		name: 'John',
		phone: '555 222 5555'
	}, {
		id: 3,
		name: 'David',
		phone: '555 333 5555'
	}]

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
