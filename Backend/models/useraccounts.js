'use strict';
const {
  Model
} = require('sequelize');
export default function (sequelize, DataTypes) {
  class UserAccounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserAccounts.init({
    accountId: {
      type: DataTypes.INTEGER

    },
    email: {
      type:DataTypes.STRING
    },
    encryptedPassword: {
      type: DataTypes.STRING
    } 
  }, {
    sequelize,
    modelName: 'UserAccounts',
  });
  return UserAccounts;
};