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
      tbl.increments();
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
      tbl.string('instructions').notNullable();
      tbl.timestamps(true, true);
    })
    .createTable('recipeingredients', tbl => {
      tbl.increments();
      tbl
        .integer('recipes_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('NO ACTION')
        .onUpdate('CASCADE');
      tbl
        .integer('ingredients_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('NO ACTION')
        .onUpdate('CASCADE');
      tbl
        .float('quantity', 2)
        .unsigned()
        .notNullable();
      tbl.timestamps(true, true);
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl
        .string('name', 50)
        .notNullable()
        .unique();
      tbl.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {};
