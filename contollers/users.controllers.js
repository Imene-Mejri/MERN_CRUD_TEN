const Users = require('../models/users.models');
const ValidateUser = require('../validation/Users.validation');

//fonction create nweu user
const AddUser = async (req, res) => {
  const { errors, isValid } = ValidateUser(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      //verify if the email exist or not 
    await  Users.findOne({Email:req.body.Email})
      .then(async(exist)=>{
        if ((exist)) {
          errors.Email ='User exist'
          res.status(404).json(errors)
        }else{
          await Users.create(req.body);
       res.status(201).json({ msg: 'User added with succes ' });
        }
      })
    }
  } catch (error) {
    console.log(error.message);
  }
};

//fonction findallusers
const findAllUser = async (req, res) => {
  try {
    const data = await Users.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
//fonction findOne user
const findOneUser = async (req, res) => {
  try {
    const data = await Users.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

//fonction Update user
const UpdateUser = async (req, res) => {
  const { errors, isValid } = ValidateUser(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    }else{
    const data = await Users.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(201).json(data);
  } } catch (error) {
    console.log(error.message);
  }
};
//fonction delete user
const DeleteUser = async (req, res) => {
  try {
    const data = await Users.findByIdAndRemove({ _id: req.params.id });
    res.status(201).json({ message: 'usere deleted with succes ', data });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddUser,
  findAllUser,
  findOneUser,
  UpdateUser,
  DeleteUser,
};
