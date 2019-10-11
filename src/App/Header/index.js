import React from 'react';
import { chooseStrings } from '../../LanguageKit';
import i18nStrings from './i18n';

export default function Header() {

  const strings = chooseStrings(i18nStrings);

	return (
    <p>
      {strings.header}
    </p>
	);
}
