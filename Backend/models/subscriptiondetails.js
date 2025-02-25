'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubscriptionDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SubscriptionDetails.init({
    userId: {
      type: DataTypes.INTEGER
    },
    subscriptionType: {
      type: DataTypes.STRING
    },
    userGoals: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'SubscriptionDetails',
  });
  return SubscriptionDetails;
};