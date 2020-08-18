const { users } = require("../models");

const response = {
  status: false,
  message: "",
  data: [],
};
// , products, product_in, product_out
const attUser = ['full_name', 'username', 'email', 'phone_number']
// const attProduct = ['username', 'email', 'profile'];
// const attProductIn = ['title', 'content', 'tags', 'status'];
// const attProductOut = ['content', 'status', 'email', 'url'];

class UsersController {
  static async getUsers(req, res){
    const findusers = await users.findAll({
      attributes: attUser,
    });
    try {
      if (findusers.length !== 0) {
        response.data = findusers;
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

  static async getUser(req, res) {
    const { id } = req.params;
    const userdetail = await users.findByPk(
      id, {
        attributes: attUser
      }
    );
    try {
      if (userdetail) {
        response.status = true;
        response.data = userdetail;
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

  static async saveUser(req, res) {
    const {full_name, username, email, phone_number, password, role
    } = req.body.data;

    try {
      const saveUser = await users.create({
        full_name, username, email, phone_number, password, role
      });
      response.data = {
        full_name: saveUser.full_name,
        username: saveUser.username,
        email: saveUser.email,
        phone_number: saveUser.phone_number
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

  static async updateUser(req, res) {
    const { id } = req.params;
    const { full_name, username, email, phone_number, role, password } = req.body.data;
    const auth = await users.update({ full_name, username, email, phone_number, role, password },
    { where: { id: id } });

    try {
      if (auth) {
        response.status = true;
        response.message = `Data user berhasil diedit`;
        response.data = await users.findByPk(
          id, {
            attributes: attUser
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

  static async deleteUser(req, res) {
    const { id } = req.params;
    const delUser = await users.destroy({ where: {
      id: id
    }});

    try {
      if (delUser) {
        response.status = true;
        response.data = `ID : ${id}`;
        response.message = `Data user berhasil dihapus`;
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
      response.message = err.message;
      res.status(400).json(response);
    }
  }
}

module.exports = UsersController;