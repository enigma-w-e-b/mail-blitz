const { sendEmail } = require('./send-mail');
const { readFileSync } = require('fs');
require('dotenv').config();

const emails = readFileSync('./emails.csv', 'utf-8').split('\n');

const html = readFileSync('./email.html', 'utf-8');

(async () => {
    emails.forEach(async (email, index) => {
        setTimeout(async () => {
            await sendEmail({
                to: email,
                subject: process.env.EMAIL_SUBJECT,
                html
            });
        }, 20000 * index);
    });
})()
