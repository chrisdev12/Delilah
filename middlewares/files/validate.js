const formidable = require('formidable');
const form = formidable({maxFileSize: 19 * 1024 * 1024 });
const response = require('../../network/responses');

async function parser(req, res, next) {
  try {  
    const file = await form.parse(req); 
    if (!file.openedFiles[0]) throw new Error;
    req.files = file.openedFiles[0];
    next();

  } catch (error) {
    return response.error(res, 404, "You should send a picture and ensure it's no heavier than 20MB");
  }
}

module.exports = {
  parser
}