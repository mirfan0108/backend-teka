require('dotenv').config()
module.exports =
{
  "development": {
    "username": "bigester_teka",
    "password": "teka_devuser",
    "database": "bigester_teka",
    "host": "103.146.203.15",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "db_teka",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "username": "bigester_teka",
    "password": "teka_devuser",
    "database": "bigester_teka",
    "host": "103.146.203.15",
    "dialect": "mysql"
  }
}
