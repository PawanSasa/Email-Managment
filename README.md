# Email-Managment
Email Management Service

How to run

Clone the repositary 
run "npm install" in cmd
run "node app.js" in cmd

End points

[POST] - http://127.0.0.1:2010/v1/emails 

request body is JSON should contain following properties 

to: <Email address of reciever >
from :<Email address of sender>
subject: <Email subject>,
text: <Content of Email>,
html: <Html content if there any>

[GET] - http://127.0.0.1:2010/v1/email/<id of email>
[DELETE] - http://127.0.0.1:2010/v1/email/<id of email>
