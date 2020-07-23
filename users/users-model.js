const db = require('../dbConfig')

module.exports= {
    find,
    findBy,
    findById,
}

function find(){
    return db('users').select('id','username')
};

function findBy(filter) {
    return db('users')
      .select('id', 'username')
      .where(filter);
  }

function findById(id) {
    return db('users')
      .select('id', 'username')
      .where({ id })
      .first();
  }
