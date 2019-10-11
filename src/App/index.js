import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { useStrings } from './i18nStrings';

function App(props) {

	const [ language, setLanguage ] = useState('en');
	const strings = useStrings(language);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {strings.header}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {strings.CTA}
        </a>
				<p>
	        <select value={language} onChange={e => setLanguage(e.target.value)}>
						<option value="en">EN</option>
						<option value="pt">PT</option>
	        </select>
				</p>
      </header>
    </div>
  );
}

export default App;
