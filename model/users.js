import { createToken } from "../middleware/authenticateUser.js";
import { connection as db } from "../config/index.js";

import { compare, hash } from "bcrypt";


class User {

    // Fetch All Users
    static fetchAllUsers(req, res){      
        try {
            db.query('SELECT * FROM Users', (err, results) => {
                if(err) throw new Error(err);
                res.status(200).json({
                    status : res.statusCode, 
                    results
                })
            })
        } catch (err) {
            res.json({
                staus:400,
                err: 'There was an error getting all users'
            })
        }
    }

    // Fetch User By ID
    
    static fetchUser(req, res){
        try {
            const { id } = req.params;
            return db.query(`SELECT * FROM Users WHERE userID = ${id}` , (err, results) => {
                if(err) throw new Error(err);
                res.status(200).json({
                    statusCode: 200,
                    results: results[0]
                })
            })
        } catch (err) {
            res.json({
                staus:400,
                err: 'There was an error getting user'
            })
        }
    }

    static async registerUser(req, res){
        try {
            let data = req.body
    
            data.pwd = await hash(data.pwd, 12)
            // payload
            let user = {email: data.email, password: data.pwd}
            
            db.query('INSERT INTO Users SET ?', [data], (err, result) => {
                if(err){
                    throw new Error(err);
                } 
                else{
                    const token = createToken(user)
                    res.status(200).json({
                        statusCode: 200,
                        message: 'User registered successfully',
                        token
                    })
                } 
                
            })
        } catch (error) {
            res.json({
                staus:400,
                err: 'There was an error registering'
            })
        }
    }

    static async registerTutor(req, res){
        try {
            let data = req.body
    
            data.pwd = await hash(data.pwd, 12)
            // payload
            let user = {email: data.email, password: data.pwd}
            
            db.query(`CALL InsertTutor('${data.firstName}', '${data.lastName}', ${data.age}, '${data.gender}', '${data.email}', '${data.pwd}', '${data.userProfile}', ${data.langID}, '${data.acreditation}');`, (err, result) => {
                if(err){
                    console.log(data);
                    throw new Error(err);
                } 
                else{
                    const token = createToken(user)
                    res.status(200).json({
                        statusCode: 200,
                        message: 'User registered successfully',
                        token
                    })
                } 
                
            })
        } catch (error) {
            res.json({
                staus:400,
                err: 'There was an error registering'
            })
        }
    }

    static async registerTutee(req, res){
        try {
            let data = req.body
    
            data.pwd = await hash(data.pwd, 12)
            // payload
            let user = {email: data.email, password: data.pwd}
            
            db.query(`CALL InsertTutee('${data.firstName}', '${data.lastName}', ${data.age}, '${data.gender}', '${data.email}', '${data.pwd}', '${data.userProfile}','${data.elective}');`, (err, result) => {
                if(err){
                    throw new Error(err);
                } 
                else{
                    const token = createToken(user)
                    res.status(200).json({
                        statusCode: 200,
                        message: 'User registered successfully',
                        token
                    })
                } 
                
            })
        } catch (error) {
            res.json({
                staus:400,
                err: 'There was an error registering'
            })
        }
    }

    static async updateUser(req, res){
        try {
            let data = req.body
    
            if (data.pwd) {

                data.pwd = await hash(data.pwd, 12)
            }
            
            db.query(`UPDATE Users SET ? WHERE userID = ${req.params.id}`, [data], (err) => {
                if (err) throw new Error (err);
                res.json({
                    status: res.statusCode,
                    msg: 'User updated successfully'
                })
            })
        } catch (e) {
            res.json({
                staus:400,
                err: 'There was an error updating'
            })
        }
    }


    static deletUser(req, res){
        try {
            db.query(`DELETE FROM Users WHERE userID = ${req.params.id}`, (err) => {
                if (err) throw new Error (err);
                res.json({
                    status: res.statusCode,
                    msg: 'User deleted successfully'
                })
            })
        } catch (error) {
            res.json({
                staus:400,
                err: 'There was an error deleting'
            })
        }
    }

    static login(req, res){
        try {
            const { email, pwd } = req.body
            
    
            db.query(`SELECT * FROM Users WHERE email = '${email}'`, async (error, result)=>{
                if (error) throw new Error(error)
                if(!result?.length){
                    res.json({
                        statusCode: 401,
                        message: 'You have entered an invalid email address'
                    })
                } else {
                    const isvalidPwd = await compare(pwd, result[0].pwd)
                    if(isvalidPwd){
                        const token = createToken({email: email, password: pwd})
                        res.status(200).json({
                            statusCode: req.statusCode,
                            message: 'Login successful',
                            token,
                            result: result[0]
                        })
                    } else {
                        res.json({
                            status: 401,
                            msg: 'Invalid password'
                        })
                    }
                }
            })
    
    
        } catch (error) {
            res.json({
                staus:400,
                err: 'There was an error logging in '
            })
        }
    }
}

export{
    User
}