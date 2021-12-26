import UserService from '../services/user.service.js'

const UserController = {
  addUser: async (req, res) => {
    const { name, birthdate } = req.body
    const created = await UserService.create({ name, birthdate: new Date(birthdate) })

    res.status(201).json({
      success: true,
      data: created
    })
  },
  getAllUsers: async (req, res) => {
    const users = await UserService.getAll()

    res.status(200).json({
      success: true,
      data: users
    })
  }
}

export default UserController