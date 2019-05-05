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

        /*return new Promise((resolve,reject)=>{
            try{
                let email = Email({
                    id: obj.id,
                    status:obj.status
                });

                email.save(function (e,r) {
                    if(e)
                    {
                        reject(e);
                    }
                    else
                    {
                        resolve(r);
                    }
                })

            }
            catch (e) {
                reject(e);
            }


        })*/
    }
    async searchEmail(id)
    {

        return await Email.findOne({id:id});

        /*return new Promise((resolve,reject)=>
        {
            try {

                Email.findOne({id:id}).then((res)=>{
                    if(res)
                    {
                        resolve(res);
                    }
                    else
                    {
                        reject([]);
                    }

                }).catch((e)=>{
                    reject(e);
                });
            }catch (e) {
                reject(e);
            }
        })*/

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

        }catch (e) {
            return retObj;
        }






    }


}

module.exports.DBHandler = DBHandler;