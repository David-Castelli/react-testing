import React from 'react';
import ReactDOM from 'react-dom';

class FetchDemo extends React.Component {
	constructor(props) {
		super(props); // la parola 'super' è usata per chiamare funzioni dal parente di un oggetto

		// inizializzo lo state
		this.state = {
			repos: [] // setto l'array dei repo come vuoto
		};
	}

	// metodo che si esegue quando il componente viene montato la prima volta
	componentDidMount() {
		const url = 'https://api.github.com/users/iGenius-Srl/repos';
		// fetch dei dati
		fetch(url)
			// se riesce
			.then(
				response => response.json()
			)
			.then(
				json => {
					//console.log(json);
					const repos = json; // creo un nuovo array con i dati di risultato
					// aggiorno lo stato del componente con il nuovo array di repo, questo comando triggera il re-render
					this.setState({ repos });
					console.log(repos);
				}
			)
	}

	render() {
		return (
			<div>
				<h1>Test Fetch data</h1>
				<ul>
					{this.state.repos.map(repo =>
						<li key={repo.id}>{repo.name}</li>
					)}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(
	<FetchDemo/>,
	document.getElementById('app')
);
