const models = require("../../models");


const createUser = async (data) => {
    await models.user.create(
        data,
    )
    return true;
}

const getAllUser = async () =>{
  const result =  await models.user.findAll()
    return result;
    
}


const updateUser = async (data) =>{
    await models.user.update(data, { where : {id:data.id}})
    return true;
}

const deleteUser = async (id) => {
    return await models.user.destroy({where:{id}}) 
}
module.exports = { createUser,getAllUser, updateUser, deleteUser }
