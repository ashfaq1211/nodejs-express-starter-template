import logger from '../logger.js';
import en from '../language/en.js';
import templateLang from '../language/templateLang.js';

export default (code, req, errorMessage) => {

  let key = code;
  const enMessage = en[key];
  const templateLangMessage = templateLang[key];

  if (enMessage.includes('server error')) {
    logger(code, errorMessage, 'Server Error', req);
  } else {
    logger(code, errorMessage ?? enMessage, 'Client Error', req);
  }

  return {
    'resultMessage': {
      'en': enMessage,
      'templateLang': templateLangMessage
    },
    'resultCode': code
  };
};