exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dishes', tbl => {
      tbl.increments();
      tbl
        .string('name', 50)
        .notNullable()
        .unique();
      tbl.timestamps(true, true);
    })
    .createTable('recipes', tbl => {
      tbl.increment();
      tbl
        .string('name', 50)
        .notNullable()
        .unique();
      tbl
        .integer('dishes_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onDelete('NO ACTION')
        .onUpdate('CASCADE');
    })
    .createTable('recipeingredients', tbl => {})
    .createTable('ingredients', tbl => {});
};

exports.down = function(knex, Promise) {};
