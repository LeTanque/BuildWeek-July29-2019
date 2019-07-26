
exports.up = function(knex) {
    return knex.schema.createTable('users', user => {
        user.string('id').unique();
        user.string('user', 255);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
