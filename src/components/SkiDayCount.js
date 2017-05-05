import React from 'react'
import '../stylesheets/ui.scss' // aggiungo la il foglio di stile generico

// creo un componente di React tramite 'createClass', che prende in ingresso un oggetto
export const SkiDayCount = React.createClass({ // uso 'export' in aggiunta a 'const' per fare in modo di passare l'elemento ad index.js
	// chiamo il render per mostrare l'elemento
	render() {
		// dentro il render restituisco un contenuto HTML-like
		return (
			// uso JSX per creare un DIV che conterrà tutti gli elementi necessari
			<div className="ski-day-count">
				<div className="total-days">
					<span>5 days</span>
				</div> 
				<div className="powder-days">
					<span>2 days</span>
				</div> 
				<div className="backcountry-days">
					<span>1 hiking day</span>
				</div> 
			</div>
		)
	}
})