import mysql from 'mysql2/promise'

const connection = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
}

const database = await mysql.createConnection(connection)

//create table users (uuid varchar(255) not null unique, name varchar(255) not null, lastName varchar(255) not null, email varchar(255) not null unique, password varchar(255) not null, primary key (uuid));
export class UserModel {
  static async create(user) {
    const { uuid, name, lastName, email, password } = user

    try {
      await database.query(
        'INSERT INTO users (uuid, name, lastName, email, password) VALUES ( ?, ?, ?, ?, ? )',
        [uuid, name, lastName, email, password]
      )
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  static async findUserByEmail(email) {
    try {
      const [rows] = await database.query(
        'SELECT * FROM users WHERE email = ?',
        [email]
      )
      return rows[0]
    } catch (error) {
      console.log(error)
      return null
    }
  }

  static async findUserByUuid(uuid) {
    try {
      const [rows] = await database.query(
        'SELECT * FROM users WHERE uuid = ?',
        [uuid]
      )
      return rows[0]
    } catch (error) {
      console.log(error)
      return null
    }
  }

  static async getAllUsers() {
    try {
      const [rows] = await database.query(
        'SELECT uuid, name, lastName, email FROM users'
      )
      return rows
    } catch (error) {
      console.log(error)
      return null
    }
  }
}
