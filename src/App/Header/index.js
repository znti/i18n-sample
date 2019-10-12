import React from 'react';
import { useActiveLanguage } from 'react-language-kit';

import i18nMap from './i18n';

export default function Header() {

	const [ language ] = useActiveLanguage();
	const strings = i18nMap[language];

	return (
    <p>
      {strings.header}
    </p>
	);
}
