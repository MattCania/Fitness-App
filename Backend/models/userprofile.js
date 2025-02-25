'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserProfile.init({
    profileId: {
      type: DataTypes.INTEGER

    },
    firstName: {
      type: DataTypes.STRING

    },
    middleName: {
      type: DataTypes.STRING

    },
    lastName: {
      type: DataTypes.STRING

    },
    age: {
      type: DataTypes.INTEGER

    },
    weight: {
      type: DataTypes.INTEGER

    },
    subscription: {
      type: DataTypes.STRING

    } 
  }, {
    sequelize,
    modelName: 'UserProfile',
  });
  return UserProfile;
};