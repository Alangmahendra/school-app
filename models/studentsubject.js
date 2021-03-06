'use strict';
module.exports = (sequelize, DataTypes) => {
  var StudentSubject = sequelize.define('StudentSubject', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER,
    Score: DataTypes.INTEGER
  }, {
    classMethods: {
    associate: function(models) {

      }
    }
  });
    StudentSubject.associate = function(models) {
      StudentSubject.belongsTo(models.Student)
      StudentSubject.belongsTo(models.Subject)
  }
  return StudentSubject;
};
