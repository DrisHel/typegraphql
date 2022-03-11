const models = require("../../models");


const createUser = async (name,email) => {
    await models.user.create({
        name,
        email
    })
    return true;
}

module.exports = { createUser }
