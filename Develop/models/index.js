// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { canTreatArrayAsAnd } = require('sequelize/types/lib/utils');

// Product.hasOne(Category, {
//   foreignKey: 'catagory_id',
//   onDelete: 'CASCADE',
// });

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'catagory_id',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: 'ProductTag',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'ProductTag',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
