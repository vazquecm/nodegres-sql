'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Genre', {
    GenreId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: DataTypes.STRING
  }, {
    tableName: 'Genre',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
};
