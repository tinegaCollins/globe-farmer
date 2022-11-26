const users = require("../models/users.ts");
import { Request, Response } from "express";
import { UserTypes } from "../types";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.createNewUser = async (req: Request, res: Response) => {
  try {
    const { userName, email, secPassword, seller, location } =
      req.body;
    const checkEmail: Array<object> = await users.find({ email: email });
    if (checkEmail.length == 0) {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(secPassword, salt);
      const newSeller = new users({
        userName,
        email,
        password,
        location,
        seller,
      });
      await newSeller.save();
      res.status(200).json(newSeller);
    } else {
      if (checkEmail.length != 0) {
        res.status(500).json({ message: "email already exists" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: err });
  }
};

exports.login = async (req: Request, res: Response) => {
  const { userName, email, password, loginType } = req.body;
  let user: UserTypes;
  if (loginType == "username") {
    user = await users.findOne({ userName: userName });
  } else {
    user = await users.findOne({ email: email });
  }
  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      const userName = user.userName;
      const email = user.email;
      const avatar = user.avatar;
      const seller = user.seller;
      const token = jwt.sign(
        { userName, email },
        process.env.ACCESS_TOKEN_SECRET
      );
      res
        .status(200)
        .json({
          token: token,
          userName: userName,
          email: email,
          avatar: avatar,
          seller: seller,
        });
    } else {
      res.status(204).json({ message: "wrong password" });
    }
  } else {
    res.status(205).json({ message: `${loginType} not found` });
  }
};

exports.getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user: UserTypes = await users.findById(id);
  res.status(200).json(user);
};
exports.editUser = async (req: Request, res: Response) => {
  const { name, userName, email, phone, password, seller, location, id } =
    req.body;
  const user = await users.findOneAndUpdate(
    { _id: id },
    {
      name,
      userName,
      phone,
      email,
      password,
      location,
      seller,
    }
  );
  if (user) {
    res.status(200).json({ message: "user updated" });
  } else {
    res.status(500).json({ message: "user not found" });
  }
};
exports.deleteUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  const user = await users.findOneAndDelete({ _id: id });
  if (user) {
    res.status(200).json({ message: "user deleted" });
  } else {
    res.status(500).json({ message: "user not found" });
  }
};
exports.getUsers = async (req: Request, res: Response) => {
  const usersList = await users.find();
  res.status(200).json(usersList);
};
exports.checkUserName = async (req: Request, res: Response) => {
  const userName = req.params.userName;
  const user = await users.findOne({ userName: userName });
  if (user) {
    res.status(200).json({
      message: "user name exists",
      data: {
        userName: user.userName,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } else {
    res.status(201).json({ message: "user name not found" });
  }
};

exports.checkEmail = async (req: Request, res: Response) => {
  const email = req.params.email;
  const user = await users.findOne({ email: email });
  if (user) {
    res.status(200).json({
      message: "email exists",
      data: {
        userName: user.userName,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } else {
    res.status(201).json({ message: "email not found" });
  }
};

exports.checkPhone = async (req: Request, res: Response) => {
  const phone = req.params.phone;
  const user = await users.findOne({ phone: phone });
  if (user) {
    res.status(200).json({ message: "phone exists" });
  } else {
    res.status(201).json({ message: "phone not found" });
  }
};
exports.checkIfSeller = async (req: Request, res: Response) => {
  try {
    const email = req.params.email;
    const user = await users.findOne({ email: email });
    if (user.seller.firstName == "") {
      res.status(201).json({ message: false });
    } else {
      res.status(200).json({ message: true });
    }
  } catch {
    res.status(400).json({ message: "user not found" });
  }
};
exports.registerSeller = async (req: Request, res: Response) => {
  const {
    email,
    firstName,
    lastName,
    phone,
    town,
    county,
    title,
    businessAddress,
    businessPhone,
    businessEmail,
    avatar,
  } = req.body;
  const user = await users.findOneAndUpdate(
    { email: email },
    {
      seller: {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        town: town,
        county: county,
        title: title,
        businessAddress: businessAddress,
        businessPhone: businessPhone,
        businessEmail: businessEmail,
      },
      avatar: avatar,
    }
  );
  if (user) {
    res.status(200).json({ message: "seller registered" });
  } else {
    res.status(500).json({ message: "user not found" });
  }
};

exports.getSellerDetails = async (req: Request, res: Response) => {
  const email = req.params.email;
  const user = await users.findOne({
    email: email,
  });
  if (user) {
    res.status(200).json({ user });
  }
  else{
    res.status(500).json({ message: "user not found" });
  }
};
