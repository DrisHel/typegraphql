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
const updateRole = async (data) =>{
    await models.role.update(data, { where : { id:data.id }})
    return true;
}

const deleteRole = async (id) => {
    return await models.role.destroy({where:{id}}) 
}


module.exports = {createRole , getAllRole, updateRole,deleteRole }