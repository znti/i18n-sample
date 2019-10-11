# i18n-sample
A React internationalization barebone sample bootstrapped with CRA

## Overview

This app aims to be a proof of concept for i18n approaches.

The goal is to have as little of a footprint as possible and to be intuitive of use.

## Guidelines

This app uses [React hooks](https://reactjs.org/docs/hooks-intro.html), so ensure your React's version is at least `16.8`

No external libs are currently being used

## Defining a component's translations

Each component must declare a map of language to strings object.
This map will then be used to select the correct object based on the current language.

```js
// <ComponentName>/i18n/index.js sample file

/* The object can be either imported from a JSON or defined inline */
const ptStrings = require('./pt.json');
const enStrings = {
	content: 'This is the content description'
};

export default {
	en: enStrings,
	pt: ptStrings,
}
```

## Usage

The concept of this module is based on three main actors:

### LanguageProvider

A provider to be used as the root for the tree that will be aware of language changes.

This component is also the place to declare the default language and language options available for that tree.

```jsx
	<LanguageProvider
		language={'pt'}
		languages={['en', 'pt']}
	>
		<App />
	</LanguageProvider>
```

### useLanguage

A hook to access the current language, language options and change the current language.

`useLanguage()` returns an array with the two entries: the current settings as its first element and a language setter as its last one.

It can only be directly used inside functional components, as shown below.

```js
	const [ { language, options }, setLanguage ] = useLanguage();
```

### chooseStrings

A function that receives a map and returns the one corresponding to the current language.

For the following map:

```js
const i18nMap = {
	en: {
		description: 'Currently using',
		options: 'Options',
	},
	pt: {
		description: 'Atualmente usando',
		options: 'Opções',
	},
}
```

`chooseStrings(i18nMap)` then would return the object mapped by the current language's key.


## Sample

```jsx
// App.js file

import React from 'react';
import LanguageProvider, { useLanguage, chooseStrings } from './LanguageKit';

const i18nMap = {
	en: {
		description: 'Currently using',
		options: 'Options',
	},
	pt: {
		description: 'Atualmente usando',
		options: 'Opções',
	},
}

function App() {
	const strings = chooseStrings(i18nMap);
	const [ { language, options }, setLanguage ] = useLanguage();

	return (
		<>
			<p>
				{strings.description}: {language}
			</p>

			<p>
				{strings.options}
				<select value={language} onChange={e => setLanguage(e.target.value)}>
					{options.map(option => (<option value={option}>{option.toUpperCase()}</option>))}
				</select>
			</p>
		</>
	);
}

export default function BaseApp() {
	return (
		<LanguageProvider
			language={'pt'}
			languages={['en', 'pt']}
		>
			<App />
		</LanguageProvider>
	);
}
```

