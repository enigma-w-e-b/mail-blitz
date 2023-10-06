const { sendEmail } = require('./send-mail');
const { readFileSync } = require('fs');
require('dotenv').config();

const emails = readFileSync('./emails.csv', 'utf-8').split('\n');

(async () => {
    emails.forEach(async (email, index) => {
        setTimeout(async () => {
            await sendEmail(email, process.env.EMAIL_SUBJECT, process.env.EMAIL_BODY);
        }, 20000 * index);
    });
})()
