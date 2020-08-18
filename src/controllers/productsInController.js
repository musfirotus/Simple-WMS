const { users, products, product_in } = require("../models");

const response = {
  status: false,
  message: "",
  data: [],
};

const attUser = ['full_name', 'username', 'email', 'phone_number']
const attProduct = ['name', 'stock', 'price'];
const attProductIn = ['date', 'total', 'productId'];

class ProductsInController {

  static async getProductsIn(req, res){
    const findproductsin = await product_in.findAll({
      attributes: attProductIn,
      include: [{
        model: products,
        attributes: attProduct
      }]
    });
    try {
      if (findproductsin.length !== 0) {
        response.data = findproductsin;
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

  static async getProductIn(req, res) {
    const { id } = req.params;
    const productdetail = await product_in.findByPk(
      id, {
        attributes: attProductIn,
        include: [{
          model: products,
          attributes: attProduct
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

  static async saveProductIn(req, res) {
    const {date, total, productId
    } = req.body.data;

    try {
      const saveProductIn = await product_in.create({
        date, total, productId
      });
      response.data = {
        productId: saveProductIn.productId,
        date: saveProductIn.date,
        total: saveProductIn.total
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

  static async updateProductIn(req, res) {
    const { id } = req.params;
    const { date, total, productId } = req.body.data;
    const auth = await product_in.update({ date, total, productId },
    { where: { id: id } });

    try {
      if (auth) {
        response.status = true;
        response.message = `Data product berhasil diedit`;
        response.data = await product_in.findByPk(
          id, {
            attributes: attProductIn,
            include: [{
              model: products,
              attributes: attProduct
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

  static async deleteProductIn(req, res) {
    const { id } = req.params;
    const delProduct = await product_in.destroy({ where: {
      id: id
    }});

    try {
      if (delProduct) {
        response.status = true;
        response.data = `ID : ${id}`;
        response.message = `Data product masuk berhasil dihapus`;
        res.status(200).json(response);
      } else {
        response.status = false;
        response.data = '';
        response.message = "Data product masuk tidak dihapus!";
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

module.exports = ProductsInController;