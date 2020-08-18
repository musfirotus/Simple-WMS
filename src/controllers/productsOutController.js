class ProductsOutController {

  static async getProducts(req, res){
    const findproducts = await products.findAll({
      attributes: attProduct,
      include: [{
        model: users,
        attributes: attUser
      }]
    });
    try {
      if (findproducts.length !== 0) {
        response.data = findproducts;
        response.status = true;
        response.message = "Data found!"
        res.status(200).json(response);
      } else {
        response.data = '';
        response.status = false;
        response.message = "Data not found!";
        res.status(400).json(response);
      }
    } catch (err) {
      response.data = '';
      response.status = false;
      response.message = err.message;
      res.status(400).json(response);
    }
  }

  static async getProduct(req, res) {
    const { id } = req.params;
    const productdetail = await products.findByPk(
      id, {
        attributes: attProduct,
        include: [{
          model: users,
          attributes: attUser
        }]
      }
    );
    try {
      if (productdetail) {
        response.status = true;
        response.data = productdetail;
        response.message = "Data ditemukan!";
        res.status(200).json(response);
      } else {
        response.status = false;
        response.data = '';
        response.message = "Data tidak ditemukan!";
        res.status(400).json(response);
      }
    } catch (error) {
      response.message = error.message;
      response.status = false;
      response.data = '';
      res.status(404).json(response);
    }
  }

  static async saveProduct(req, res) {
    const {name, stock, price, userId
    } = req.body.data;

    try {
      const saveProduct = await products.create({
        name, stock, price, userId
      });
      response.data = {
        name: saveProduct.name,
        stock: saveProduct.stock,
        price: saveProduct.price,
        userId: saveProduct.userId
      };
      response.status = true;
      response.message = "Berhasil tambah data"
      res.status(201).json(response);
    } catch (error) {
      response.status = "fail!";
      response.data = '';
      response.message = error.message;
      res.status(400).json(response);
    }
  }

  static async updateProduct(req, res) {
    const { id } = req.params;
    const { name, stock, price, userId } = req.body.data;
    const auth = await products.update({ name, stock, price, userId },
    { where: { id: id } });

    try {
      if (auth) {
        response.status = true;
        response.message = `Data product berhasil diedit`;
        response.data = await products.findByPk(
          id, {
            attributes: attProduct,
            include: [{
              model: users,
              attributes: attUser
            }]
          }
        );
        res.status(200).json(response);
      } else {
        response.status = false;
        response.data = '';
        response.message = "Data tidak ditemukan!";
        res.status(400).json(response);
      }
    } catch (err) {
      response.status = false;
      response.data = '';
      response.message = "ID tidak ditemukan!";
      res.status(400).json(response);
    }
  }

  static async deleteProduct(req, res) {
    const { id } = req.params;
    const delProduct = await products.destroy({ where: {
      id: id
    }});

    try {
      if (delProduct) {
        response.status = true;
        response.data = `ID : ${id}`;
        response.message = `Data product berhasil dihapus`;
        res.status(200).json(response);
      } else {
        response.status = false;
        response.data = '';
        response.message = "Data product tidak ditemukan!";
        res.status(400).json(response);
      }
    } catch (err) {
      response.status = false;
      response.data = '';
      response.message = err.message;
      res.status(400).json(response);
    }
  }
}

module.exports = ProductsOutController;