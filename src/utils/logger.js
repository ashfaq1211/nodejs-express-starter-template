import { Log } from '../models/index.js';
import ipHelper from './helpers/ip-helper.js';

export default async (code, errorMessage, level, req) => {
  let ip = 'no-ip';
  if(req !== '' || req != null) ip = ipHelper(req);
  let log = new Log({
    resultCode: code,
    level: level,
    errorMessage: errorMessage,
    ip: ip
  });

  await log.save()
    .catch(err => {
      console.log('Logging is failed: ' + err);
    });
}