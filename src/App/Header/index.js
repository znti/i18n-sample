import React from 'react';
import { useLanguage } from 'react-language-kit';

import i18nMap from './i18n';

export default function Header() {

	const [ { language } ] = useLanguage();
	const strings = i18nMap[language];

	return (
    <p>
      {strings.header}
    </p>
	);
}
