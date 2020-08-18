class UsersController {
  static async getUsers(req, res) {
    res.send('Hello from user controller!')
  }
}

module.exports = UsersController;