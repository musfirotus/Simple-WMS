class ProductsController {

  static async getProducts(req, res) {
    res.send('Hello from products controller!')
  }
}

module.exports = ProductsController;