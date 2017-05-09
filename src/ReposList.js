import React from 'react';
import {render} from 'react-dom';
import Repo from './Repo';

// List of elements
class ReposList extends React.Component {

	// creo un constructor di ES6 per i dati del campo di input
	constructor(props) {
		// use 'super' for call function from the parent of the object
		super(props);

		// init state
		this.state = {
			search: '', // default state for search input
			repos: [] // default state for repos
		};
	}

	// method on firs mount of component
	componentDidMount() {
		const url = 'https://api.github.com/users/iGenius-Srl/repos';
		// data fetch
		fetch(url)
		// if fetch succeed convert received data to json
		.then(
			response => response.json()
		)
		.then(
			json => {
				// create a new array with result data
				const repos = json;
				// update component status passing result data with 'setState', which recalls React render
				this.setState({ repos });
			}
		)
	}

	// Search function - 'event' refer to searchbox digit event
	updateSearch(event) {
		// 2 -  update component status passing searchbox entered value with 'setState', which recalls React render
		this.setState({search: event.target.value})
	}

	// Component render
	render() {
		// 3 - create a variable which I pass the properties of all items (this.state.repos) then add 'filter' that create a new array with all elements that passed the test
		let filteredRepos = this.state.repos.filter(
			(repo) => {
				// 7 - compare the value of 'this.state.search' with the current element by 'indexOf (...)', if empty do not show anything
				return repo.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
			}
		);

		return (
			<div>
				<input type="text"
					placeholder='Search'
					value={this.state.search}
					// 1 - on input change call function 'updateSearch'
					onChange={this.updateSearch.bind(this)}
				/>
				<div className='repos-list'>
					{/* 4 - passo i risultato della funzione di ricerca al 'mapping' dei valori */}
					{filteredRepos.map((repo) => <Repo repo={repo} key={repo.id}/>)}
				</div>
			</div>
		)
	}
}

export default ReposList;