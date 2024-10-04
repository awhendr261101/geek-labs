import { connection as db } from '../config/index.js'

class Bookings {
    static fetchBookings(req, res) {
        try {
            const strQry = `
            SELECT * FROM bookings;
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
            SELECT * FROM bookings WHERE tutorID = ${req.params.id};
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