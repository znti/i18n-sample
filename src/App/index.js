import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Content from './Content';

import { useLanguage } from 'react-language-kit';

function App(props) {

  const [ { language, options }, setLanguage ] = useLanguage();

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

      </header>
    </div>
  );
}

export default App;
