import { createToken } from "../middleware/authenticateUser.js";
import { connection as db } from "../config/index.js";

import { compare, hash } from "bcrypt";


class Tutors {

    static fetchAllTutors(req, res){      
        try {
            db.query('SELECT * FROM Users Join Tutors t USING(userID)', (err, results) => {
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
                        msg: 'User registered successfully',
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


}

export{
    Tutors
}