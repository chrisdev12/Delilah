process.env.PORT = process.env.PORT || 3000;
process.env.CLOUD_NAME = 'dircdfylu';
process.env.CLOUDINARY_API_KEY = '639783656459546';
process.env.CLOUDINARY_API_SECRET = '0uaOyQgewkG355JD4G6bE9cryuk';
process.env.db_host = 'localhost'; // host
process.env.db_name = 'delilah'; // database name
process.env.db_user = 'root';           // user name
process.env.db_password = '';               // password
process.env.db_port = '3306';           // port number
process.env.db_type = 'mysql'; 
process.env.URLDB = `${ process.env.db_type }://${ process.env.db_user }:${ process.env.db_password }@${ process.env.db_host }:${ process.env.db_port }/${ process.env.db_name }`;
// GoDaddy
// process.env.URLDB = 'mysql://del53acm:1q2w3e4r@soportepremium.com:3306/delilah';