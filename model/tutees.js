import { createToken } from "../middleware/authenticateUser.js";
import { connection as db } from "../config/index.js";

import { compare, hash } from "bcrypt";

class Tutee {

    static cancelBooking(req, res){      
        try {

            let data = req.body

            let newdate = data.date.slice(0,8) + (+data.date.split('-')[2] + 1)

            const stQry = `
            CALL UpdateSession
            (${req.params.sid}, ${data.tutor}, ${null}, '${newdate}', '${data.time}', ${data.duration}, '${data.venue}')
            ;`

            db.query(stQry, (err, results) => {
                if(err) throw new Error(err);
                res.status(200).json({
                    status : res.statusCode, 
                    results
                })
            })
        } catch (err) {
            res.json({
                staus :400,
                err: 'There was an error Canceling this session'
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

    static fetchAllTutees(req, res){      
        try {
            db.query('SELECT * FROM Users Join Tutees t USING(userID)', (err, results) => {
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

}

export {
    Tutee
}