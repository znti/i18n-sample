import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Content from './Content';

import { useLanguage } from '../LanguageKit';

function App(props) {

  const [ i18n, setLanguage ] = useLanguage();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

				<Header />

				<Content />

				<p>
	        <select value={i18n.language} onChange={e => setLanguage(e.target.value)}>
						{i18n.options.map(option => (<option value={option}>{option.toUpperCase()}</option>))}
	        </select>
				</p>

      </header>
    </div>
  );
}

export default App;
