import UserModel from "../models/UserModel.js";
import multer from "multer";

// get data user
export const getUser = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (err) {
        res.status({ message: err })
    }
}

// get databy id
export const getUserById = async (req, res) => {
    try {
        const getUser = await UserModel.findOne({ _id: req.params.id });
        res.json(getUser);
    } catch (err) {
        res.status({ message: err })
    }
}

// push data user
export const saveUser = async  (req, res) => {
    const user = new UserModel(req.body);
    try {
        const saveUser = await user.save();
        res.json(saveUser);
    } catch (err) {
        res.status({ message: err })
    }
}

// update data user
export const updateUser = async (req, res) => {
    try {
        const updateuser = await UserModel.updateOne({ _id: req.params.id }, { $set: req.body});
        res.json(updateuser);
    } catch (err) {
        res.json({ mesage: err })
    }
}

// delete data user
export const deleteUser = async (req, res) => {
    try {
        const delUser = await UserModel.deleteOne({ _id: req.params.id });
        res.json(delUser);
    } catch (err) {
        res.json({ mesage: err })
    }
}



