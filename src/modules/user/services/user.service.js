import { doQuery } from '../../../common/database/mysql.db.js'
import { Model, TableName } from '../models/user.model.js'

const UserService = {
  create: (payload) => {
    return doQuery(`INSERT INTO ${TableName} SET ?`, payload)
  },
  getAll: (columns = Model) => {
    const options = [columns, TableName]

    return doQuery(`SELECT ?? FROM ??`, options)
  }
}

export default UserService