const nodemailer = require('nodemailer');
const config = require('config');
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: config.mailer.user,
        pass: config.mailer.password
    },
    tls:{
        rejectUnauthorized: false
    }
});

module.exports = {
    sendEmail(from,to,subject,html){
        return new Promise((resolve, reject)=>{
            transport.sendMail({from, subject, to, html},(err, info)=>{
                if(err) return reject(err);
                resolve(info);
            });
        });
    }
};