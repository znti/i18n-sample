# i18n-sample
A React internationalization barebone sample bootstrapped with CRA

## Overview

This app aims to be a proof of concept for i18n approaches.

The goal is to have as little of a footprint as possible and to be intuitive of use.

## Guidelines

This app uses [React hooks](https://reactjs.org/docs/hooks-intro.html), so ensure your React's version is at least `16.8`

No external libs are currently being used

## Initial approach

A language provider holds the language options and allows changing the active one.
Meanwhile, the language consumer holds the active language for each component to use.

The components that must be aware of i18n should then use the consumer to adjust its string resources.
It's recommended to have a default language always implemented.

## Pseudo code

Each component will then have a strings file that would look something like the code below

```js
// i18nStrings.js file

function load(language) {
  const strings = languageMap[language];
  if(!strings) {
    return languageMap['default'];
  } else {
    return strings;
  }
}

const languageMap = {
  'default': enStrings, //could be nice to enforce this one
  'en': enStrings,
}

const enStrings = {
  header: 'Edit <code>src/App.js</code> and save to reload.',
  CTA: 'Learn React'
}
```

Inside the component itself, this file would then be imported and its strings will be sourced according to the active language

```jsx
// App.js file

import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useStrings } from './i18nStrings'

function App() {

  const strings = useStrings();

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
      </header>
    </div>
  );
}

export default App;

```

## Current steps

Defining the provider/consumer setup using the [context API](https://reactjs.org/docs/context.html)

