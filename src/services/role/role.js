const models = require("../../models");

const createRole = async (data) => {
    await models.role.create(
        data,
    )
    return true;
}

const getAllRole = async () =>{
    const result =  await models.role.findAll()
      return result;
  }


module.exports = {createRole , getAllRole}