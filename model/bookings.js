import { connection as db } from '../config/index.js'

class Bookings {
    static fetchBookings(req, res) {
        try {
            const strQry = `
            SELECT * FROM Everything;
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

    static fetchBooking(req, res) {
        try {
            const strQry = `
            SELECT s.sessionID, s.sessionDateT, s.sessionDuration, s.venue, t.tutorID,
            -- Tutor details
            CONCAT(uTutor.firstName, ' ',uTutor.lastName) 'Tutor FName', l.language 'Language',
            -- Tutee details
            concat(uTutee.firstName,' ', uTutee.lastName)  'Tutee Fname'
            FROM Sessions s
            LEFT JOIN Tutors t ON s.tutorID = t.tutorID
            LEFT JOIN Tutees tt ON s.tuteeID = tt.tuteeID
            LEFT JOIN Users uTutor ON t.userID = uTutor.userID
            LEFT JOIN Users uTutee ON tt.userID = uTutee.userID
            LEFT JOIN Languages l ON t.langID = l.langID
            WHERE s.sessionID = ${req.params.id}
            ORDER BY s.sessionID
            ;
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

    static updateBooking(req,res){
        try {
            const strQry = `
            UPDATE Sessions
            SET ?
            WHERE tutorID = ${req.params.id} AND sessionID = ${req.params.sID}
            `
            db.query(strQry,[req.body], (err, results) => {
                if (err) throw new Error(err)
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

    static addBookings(req, res) {
        try {
            const strQry = `
            INSERT INTO Sessions ? 
            `
            db.query(strQry, [req.body], (err, results) => {
                if (err) throw new Error(err)
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

    static deleteBooking(req,res){
        try {
            const strQry = `
            DELETE FROM Sessions
            WHERE sessionID = ${req.params.sID}
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error(err)
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

}

export{
    Bookings
}