const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function cloudUpload(path) {
  try {
    return await cloudinary.uploader.upload(path);  
    
  } catch (error) {
    console.error(error);
    throw new Error
  }
}

module.exports = cloudUpload