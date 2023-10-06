const { createTransport } = require('nodemailer')
const  { google } = require('googleapis');

const sendEmail = async ({
    to = '',
    subject = '',
    text = '',
    html = ''
}) => {

    const oAuth2 = google.auth.OAuth2;

    const oauth2Client = new oAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        process.env.REDIRECT_URI
    );

    oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
    });

    const accessToken = await new Promise((resolve, reject) => {
        oauth2Client.getAccessToken((err, token) => {
          if (err) {
            reject("Failed to create access token :(");
          }
          resolve(token);
        });
      });

    const transporter = createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        logger: true,
        debug: true,
        auth: {
            type: 'OAuth2',
            user: process.env.EMAIL,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken
        }
    });
    const mailOptions = {
        from: process.env.EMAIL,
        to,
        subject,
        html,
        text
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        console.log('Email enviado: ' + info.response);
    });
}

module.exports = { sendEmail };