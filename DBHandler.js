const mongoose = require('mongoose');
const config = require('config');
const conStr = config.Mongo.ConStr;
const Email = require('./EmailSchema').Email;
mongoose.connect(conStr, {useNewUrlParser: true});

class DBHandler {
    constructor()
    {

    };

    async saveEmailData(obj)
    {
        let email = Email({
            id: obj.id,
            status:obj.status
        });

        return await email.save();

    }
    async searchEmail(id)
    {

        return await Email.findOne({id:id});


    }
    async deleteEmail(id)
    {
        let retObj ={
            id:id,
            deleted:false
        }

        try {

            let email = await this.searchEmail(id);
            let removeMail= await email.remove();
            if(removeMail)
            {
                retObj.deleted=true;
            }

            return retObj;

        }

        catch (e) {
            return retObj;
        }


    }


}

module.exports.DBHandler = DBHandler;