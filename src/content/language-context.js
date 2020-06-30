import React from 'react';
import langs from './language';
export default React.createContext({currentLang: langs.ptBr, setCurrentLang: () => {}});