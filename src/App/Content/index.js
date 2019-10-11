import React from 'react';
import { chooseStrings } from '../../LanguageKit';
import i18nStrings from './i18n';

export default function Content() {

	const strings = chooseStrings(i18nStrings);

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
