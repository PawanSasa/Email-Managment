# Email-Managment
Email Management Service

# How to run

- Clone the repo
- Add SendGrip api key in *config-> default.js -> SendGrid -> SENDGRID_API_KEY* 
 ```sh
$ npm install
$ node app.js
```

End points

[POST] - http://127.0.0.1:2010/v1/emails 

request body is JSON should contain following properties 

to: Email address of reciever .

from :Email address of sender.

subject: Email subject,

text: Content of Email,

html: Html content if there any


[GET] - http://127.0.0.1:2010/v1/email/<id of email>
[DELETE] - http://127.0.0.1:2010/v1/email/<id of email>
