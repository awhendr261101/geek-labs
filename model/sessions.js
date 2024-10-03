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

    static fetchTutorSessions(req, res) {
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

    static fetchTuteeSessions(req, res) {
        try {
            const strQry = `
            SELECT * FROM bookedSessions WHERE tuteeID = ${req.params.id};
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to fetch all tutee bookings😭')
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

    static async updateSession(req,res){
        try {

            let data = req.body

            let newdate = data.date.slice(0,8) + (+data.date.split('-')[2] + 1)

            const stQry = `
            CALL UpdateSession
            (${req.params.sid}, ${req.params.id}, ${data.tutee}, '${newdate}', '${data.time}', ${data.duration}, '${data.venue}')
            ;`
            
    
            db.query(stQry, (err, result) => {
                if (err) throw new Error (err);
                res.json({
                    status: res.statusCode,
                    msg: 'Session has been updated successfully😍',
                    result : result[0]
                })
            })
        } catch (e) {
            res.json({
                staus:400,
                err: 'There was an error updating😭'
            })
        }
    }
}

export{
    Sessions
}