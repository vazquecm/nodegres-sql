'use strict';

module.exports = function(sequelize, DataTypes) {
  var Album = sequelize.define('Album', {
    AlbumId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Title: DataTypes.STRING,
    ArtistId: DataTypes.INTEGER
  }, {
    tableName: 'Album',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        Album.belongsTo(models.Artist, {
          foreignKey: 'ArtistId'
        });
      }
    }
  });

  return Album;
};
