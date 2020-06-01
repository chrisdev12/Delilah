# DELILAH+RESTO

API rest for delivery services.

version 1.0 = User, products and order CRUD with role validations. Products images are being hosted in Cloudinary.

## Installation

tip: Remember that this APIrest is using Node version12.16.1 and express 4.16.1

type <NPM i> from the terminal to install all the required dependencies.


## Database connection

Tables queries and test db already populated on docs/SQL/.

If is needed, read the instructions.txt on docs/SQL/instructions.txt to setup the database connection.
Remember that the DB URL connection is setup on a enviroment variable in Server/config/config.js.

<All tables must have the same name as those referenced in the queries on Server/SQL>. In case you want to rename them, the Model files
must be reconfigured to make match again. 

<Delilah.sql> contains the populated tables in case they are needed

If you test it with the delilah.sql dump, the admin user is nubia@admin.com and the password = 1q2w3e4r

## Cloudinary

The Cludinary API keys and tokens might not be working, since they are private per user, remember to update them  with your own credentual in the environment variables file in case you want to continue using cludinary to images hosting.

### Start

<NPM start> to run the server. The DB connection must be okay to init the server, else the server will fail.

<NPM test> use nodemon


# API Documentation

https://chrisdev12.github.io/Delilah/
