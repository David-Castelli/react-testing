import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount' // importo l'elemento

// Sicurezza!! aggancio React alla 'window' per evitare che venga restituito 'React is not defined'
window.React = React

render(
	<SkiDayCount />, // qui richiamo il render del contenuto dell'app
	document.getElementById('react-container')
)