const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const mailer = require('../helper/mailer');
const Admin  = require('../models/admin')

module.exports.register = async (req, res, next) => {
	try {
        // const {email,phone,password} = req.body;
        console.log('body',req.body)
        // if(!email || !password || !phone){
        //     return res.status(422).json({error:"please add all the fields"})
        //  }
        //  const userData = {
        //      email,
        //      password,
        //      phone
        //  }
        //  Admin.findOne({email:email})
        //  .then(user=>{
        //      if(!user){
        //          bcrypt.hash(password, 10, (err,hash)=>{
        //              userData.password = hash
        //              Admin.create(userData)
        //                  .then(user=>{
        //                      console.log('registered succesfully')
        //                     res.json({message: 'registered succesfully'})
        //                  })
        //                  .catch(err=>{
        //                      res.send('error: ' + err)
        //                  })
        //          })
        //      }
        //      else{
        //         console.log('user already exists')
        //          res.json({error: 'user already exists'})
        //      }
        //  })
        //  .catch(err=>{
        //      res.send('error: ' + err)
        //  })
	} catch (err) {
		console.log(err);
	}
};

module.exports.login = async (req, res, next) => {
    try{
        const {email,password} = req.body
        if(!email || !password){
           return res.status(422).json({error:"please add email or password"})
        }
        Admin.findOne({email:email})
        .then(user=>{
            if (!user){
                return res.json({error:"Invalid email or password"})
            }
            bcrypt.compare(password,user.password)
            .then(doMatch=>{
                if(doMatch){
                   console.log('login successfully')
                   res.json({message: 'login succesfully'})
                }
                else{
                    console
                    return res.json({error:"Invalid Email or Password"})
                }
            })
            .catch(err=>{
                console.log(err)
            })
    
        })
    }
    catch(err){
        console.log(err)
    }
}
