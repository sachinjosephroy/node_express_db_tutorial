//This is where we write the knex queries
const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

//add, find, findById, remove, update <- these are the functions we need to write in this file

module.exports = {
    add,
    find,
    findById,
    remove,
    update
}

async function add(lesson) {
    const [id] = await db('lessons').insert(lesson);
    return id;
}

async function find() {
    return db('lessons');
}

async function findById(id) {
    return db('lessons')
        .where({ id })
        .first();
}

async function remove(id) {
    return db('lessons')
        .where({ id })
        .del();
}

async function update(id, changes) {
    return db('lessons')
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id);
        });
}