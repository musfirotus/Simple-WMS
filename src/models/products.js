'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.hasMany(models.product_in, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      products.hasMany(models.product_out, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      products.belongsTo(models.users, {foreignKey: products.userId});
    }
  };
  products.init({
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};