import React from 'react';
import { useActiveLanguage } from 'react-language-kit';

import i18nMap from './i18n';

export default function Content() {

	const [ language ] = useActiveLanguage();
	const strings = i18nMap[language];

	return (
		<a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
		>
			{strings.CTA}
		</a>
	);
}
