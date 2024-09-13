import { connection as db } from "../config/index.js";

class Sessions {

    
    static fetchsessions(req, res) {
        try {
            const strQry = `
            SELECT * FROM bookedSessions;
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to fetch all bookings ')
                res.json({
                    status: res.statusCode,
                    results
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }

    static fetchUsersSessions(req, res) {
        try {
            const strQry = `
            SELECT * FROM bookedSessions WHERE tutorID = ${req.params.id};
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to fetch all bookings ')
                res.json({
                    status: res.statusCode,
                    results
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }

    static updateSession(req, res) {
        try {
            const strQry = `
            UPDATE bookedSessions SET ? 
            WHERE sessionID = ${req.params.sid} AND tutorID = ${req.params.id};

            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to update session ')
                res.json({
                    status: res.statusCode,
                    results
                })
            })
        } catch (e) {
            res.json({
                status: 500,
                msg: e.message
            })
        }
    }
}

export{
    Sessions
}