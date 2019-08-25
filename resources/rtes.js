var express = require('express')
var router = express.Router()
var dbasync = require('../db/dbasync');

router.post('/bayar', async function(req, res) {
    let ntpn = ''
    try {
        //must using transaction
        await dbasync.myexec("START TRANSACTION");
        //select billing with FOR UPDATE => t
        //this is will lock row until update, second request will be blocked
        let data = await dbasync.myexec(`SELECT * FROM m_billing WHERE BILLINGCODE="` +
            req.body.BILLINGCODE + `" AND PAYMENTSTATUS=0 FOR UPDATE`);

        //if no data = rollback
        if (data.length == 0) {
            await dbasync.myexec("ROLLBACK");
        }

        //generate ntpn
        ntpn = await new Promise(resolve => setTimeout(resolve('12345'), 5000));

        //insert to trx
        await dbasync.myexec(`INSERT INTO t_billing_trx(BILLINGCODE,AMOUNT,NTPN) 
        VALUES("` + data[0].BILLINGCODE + `",` + data[0].BILLINGAMOUNT + `,"` + ntpn + `")`);

        //update status
        await dbasync.myexec(`UPDATE m_billing SET PAYMENTSTATUS=1 WHERE BILLINGCODE="` +
            req.body.BILLINGCODE + `"`);

        await dbasync.myexec("COMMIT");
        res.status(200).json({
            error: "false",
            code: "00",
            message: "Save Data"
        })
    } catch (error) {
        res.status(200).json({
            error: "true",
            code: "99",
            message: "Error Query"
        })
    }
})

module.exports = router