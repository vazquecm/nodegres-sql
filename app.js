'use strict';

var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://localhost:5432/nodegresql');

var Frienemy = sequelize.define('frienemy', {
  name: Sequelize.STRING,
  birthday: Sequelize.DATE
});


const Project = sequelize.define('project',{
  name: Sequelize.STRING
});

let jane;

Project.hasMany(Frienemy, {as: 'worker'});

// the .sync adds what you need automatically to the table your using
sequelize.sync().then(function() {
  return Frienemy.create({
    name: 'Jane Doe',
    birthday: new Date('1980-6-20')
  });
}).then(function(frienemy) {
  console.log(frienemy.get({
    plain: true
  }));
}).then(() => {
  return Project.create({
    name: 'Angular 101'
  });
});


