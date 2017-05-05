import React from 'react'
import text from './titles.json'
import './stylesheets/goodbye.scss'
import './stylesheets/hello.css'

export const hello = (
	<h1 id='title'
	className='hello'> // passo uno stile
	{text.hello}
	</h1>
)

export const goodbye = (
	<h1 id='title'
	className='goodbye'> // passo uno stile diverso
	{text.goodbye}
	</h1>
)