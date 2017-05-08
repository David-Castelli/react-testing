// Render of element list
import React from 'react';
import {render} from 'react-dom';
import Repo from './Repo';

// List of element component
class ReposList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		search: '',
		repos: props.repos
		};
	}

	// Search function
	updateSearch(event) {
		this.setState({search: event.target.value.substr(0, 20)})
	}

	// Render
	render() {
		let filteredRepos = this.state.repos.filter(
			(repo) => {
					return repo.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
			}
		);

		return (
			<div>
					<input type="text"
							placeholder='Search'
							value={this.state.search}
							onChange={this.updateSearch.bind(this)}
					/>
					<div className='repos-list'>
							{filteredRepos.map((repo)=> { //
									return <Repo repo={repo} key={repo.id}/>
							})}
					</div>
			</div>
		)
	}

}

export default ReposList;
