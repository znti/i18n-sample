import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Content from './Content';

import { useActiveLanguage, useAvailableLanguages } from 'react-language-kit';

function App(props) {

	const [ language, setLanguage ] = useActiveLanguage();
	const [ options, setOptions ] = useAvailableLanguages();

	const stringsMap = {
		'en': {
			button: 'Revert languages list'
		},
		'pt': {
			button: 'Inverter lista de idiomas'
		}
	}

	const strings = stringsMap[language];

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				<Header />

				<Content />

				<p>
					<select value={language} onChange={e => setLanguage(e.target.value)}>
						{options.map(option => (<option key={option} value={option}>{option.toUpperCase()}</option>))}
					</select>
				</p>


				<button onClick={e => setOptions(options => [...options].reverse())}>
					{strings.button}
				</button>

			</header>
		</div>
	);
}

export default App;
