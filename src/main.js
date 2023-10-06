const { sendEmail } = require('./send-mail');
const { readFileSync } = require('fs');
require('dotenv').config();

const emails = readFileSync('./emails.csv', 'utf-8').split('\n');

(async () => {
    emails.forEach(async (email, index) => {
        console.log(`Enviando email para ${email}`);
        setTimeout(async () => {
            await sendEmail(email, 'Teste de envio de email', 'Olá, este é um teste de envio de email');
        }, 20000 * index);
    });
})()