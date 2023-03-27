import en from './en.js';
import templateLang from './templateLang.js';

export default (lang, key) => {
  if (lang === 'tr') {
    return templateLang[key];
  } else {
    return en[key];
  }
};