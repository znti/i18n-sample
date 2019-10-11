const enStrings = {
  header: 'Edit src/App.js and save to reload.',
  CTA: 'Learn React'
}

const ptStrings = {
  header: 'Edite src/App.js e salve para recarregar.',
  CTA: 'Aprenda React'
}

const languageMap = {
  'default': enStrings, //could be nice to enforce this one
  'en': enStrings,
	'pt': ptStrings,
}

export function useStrings(language) {
  const strings = languageMap[language];
  if(!strings) {
    return languageMap['default'];
  } else {
    return strings;
  }
}
