import { joiTemplateValidator } from '../../validators/template.validator.js';
import { errorHelper, logger, getText } from '../../../utils/index.js';


export default async (req, res) => {
  console.log('Controller is working...')
  const { error } = joiTemplateValidator(req.body);
  if (error) {
    let code = '001';
    const message = error.details[0].message;
    if (message.includes('one'))
      code = '001';
    return res.status(400).json(errorHelper(code, req, message));
  }

  // Below function should be moved to repositories.
  // const user = await TemplateModel.findById(req).catch((err) => {
  //   return res.status(500).json(errorHelper('001', req, err.message));
  // });

  // if (!hasError) {
  // await user.save().catch((err) => {
  //   return res.status(500).json(errorHelper('00085', req, err.message));
  // });

  await logger('001', req.user._id, getText('en', '001'), 'Info', req);
  return res.status(200).json({
    resultMessage: { en: getText('en', '001'), tr: getText('templateLang', '001') },
    resultCode: '001'
  });
}