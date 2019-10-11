import React, { createContext, useContext, useReducer } from 'react';

const availableLanguages = [
	'en',
	'pt',
]

const defaultLanguage = availableLanguages[0];
const LanguageContext = createContext(defaultLanguage);

const reducer = (_, lang) => {
	const languageIndex = availableLanguages.indexOf(lang);
	if(languageIndex >= 0) {
		return availableLanguages[languageIndex];
	}
};

export default function LanguageProvider({children}) {
	return (
		<LanguageContext.Provider value={useReducer(reducer, defaultLanguage)}>
			{children}
		</LanguageContext.Provider>
	);
}

export const useLanguage = () => useContext(LanguageContext);
