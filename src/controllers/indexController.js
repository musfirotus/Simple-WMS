class IndexController {

  static async getHome(req, res) {
    res.send('Hello from controller!')
  }
}

module.exports = IndexController;