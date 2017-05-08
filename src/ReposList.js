// Render of element list
import React from 'react';
import {render} from 'react-dom';
import Repo from './Repo';

// List of elements
class ReposList extends React.Component {

	// creo un constructor di ES6 per i dati del campo di input
	constructor(props) {
		super(props); // la parola 'super' è usata per chiamare funzioni dal parente di un oggetto

		// inizializzo lo state
		this.state = {
			search: '', // stato di defaul per l'input
			repos: [] // setto l'array dei post come vuoto
			//repos: props.repos
		};
		console.log('constructor');
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
					// aggiorno lo stato del componente con il nuovo array di post, questo comando triggera il re-render
					this.setState({ repos });
					console.log('fetch ok: ' + repos);
				}
			)
			console.log('componentDidMount');
	}

	// Search function - 'event' si riferisce all'evento di digitazione nel searchbox
	updateSearch(event) {
		console.log(event.target.value);
		// 2 - passo il valore immesso nel searchbox allo stato 'search' dell'input
		this.setState({search: event.target.value})
	}

	// Render
	render() {
		// 3 - creo una variabile 'filteredRepos' a cui passo le proprietà di tutti gli item
		let filteredRepos = this.state.repos.filter( // 5 - aggiungo la proprietà 'filter' per filtrarli effettivamente in base al valore immesso
			(repo) => {
					// 7 - confronto il valore 'this.state.search' con l'elemento attuale tramite 'indexOf(...)', se non esiste non mostro
					return repo.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
			}
		);

		return (
			<div>
					<input type="text"
							placeholder='Search'
							value={this.state.search}
							// 1 - al change dell'input richiamo la funzione 'updateSearch'
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
