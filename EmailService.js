const config = require('config');
const apiKey = config.SENDGRID_API_KEY;
const uuidv1 = require('uuid/v1');
const validHandler = require('./ValidationHandler');
const {DBHandler} = require('./DBHandler');
const dbHandler = new DBHandler();
let validator = require('validator');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(apiKey);

class EmailService{

    constructor()
    {

    }

    async SendMail(req,res)
    {
        let uuid= uuidv1();

        let ret_obj =
            {
                id:uuid,
                status:""
            }

        try
        {

            if(req && req.body && validator.isEmail(req.body.to) && validator.isEmail(req.body.from) )
            {

                const msg = {
                    to: req.body.to,
                    from: req.body.from,
                    subject: req.body.subject,
                    text: req.body.text,
                    html: req.body.html,
                    _id:uuid
                };

                let isValidTime = validHandler.checkTimeFrame();

                if(isValidTime)
                {

                    let isSent=await sgMail.send(msg);

                    if(isSent)
                    {
                        ret_obj.status="SENT";
                    }
                    else
                    {
                        ret_obj.status="FAILED";
                    }

                }
                else
                {
                    ret_obj.status="QUEUED";
                }

                res.end(JSON.stringify(ret_obj));
            }
            else
            {
                ret_obj.status="FAILED";
                res.end(JSON.stringify(ret_obj));
            }


        }
        catch(e)
        {
            ret_obj.status="FAILED";
            res.end(JSON.stringify(ret_obj));
        }

        // sending mail is considered as top priority operation, return status when email operation done and store record in DB.
        // Because when error occured on DB operation when email is successfully sent, it will display as failed and its not true.
        let dbStatus = await dbHandler.saveEmailData(ret_obj);


    }

    async HandleMailRecords(req,res)
    {

        try {

            if(req.method=="DELETE")
            {
                let result = await dbHandler.deleteEmail(req.params.id);
                res.end(JSON.stringify(result));

            }
            else
            {
                let result = await dbHandler.searchEmail(req.params.id);
                res.end(JSON.stringify(validHandler.responseMaker(result)));
            }


        }
        catch (e) {
            res.end(JSON.stringify(e));
        }



    }


}

module.exports.EmailService = EmailService;