const user = require('./User');
const blog = require('./blog');

user.hasMany(blog, {
    foreignKey: 'user_id',
  
  });
  
blog.belongsTo(user, {
  foreignKey: 'user_id'
});

module.exports = { user, blog };