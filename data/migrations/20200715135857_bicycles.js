
exports.up = function(knex) {
    return knex.schema
    .createTable('bicycles', tbl => {
        tbl.increments();
        tbl.string('category')
        tbl.string('sub_category')
        tbl.string('model_high')
        tbl.string('model_mid')
        tbl.string('model_budget')
    })
        
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('bicycles')
};
