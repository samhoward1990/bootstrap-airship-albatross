require("dotenv").config();
const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const PORT = 3001 || process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "client", "build")));

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        clientId: process.env.CLIENTID,
        clientSecret: process.env.CLIENTSECRET,
        refreshToken: process.env.REFRESHTOKEN
    }
});

transporter.set('oauth2_provision_cb', (user, renew, callback) => {
    let accessToken = userTokens[user];
    if (!accessToken) {
        return callback(new Error('Unknown user'));
    } else {
        return callback(null, accessToken);
    }
});

app.post("/send", (req, res) => {
    let name = req.body.firstName + " " + req.body.lastName;
    let email = req.body.email;
    let phoneNumber = req.body.phoneNumber;
    let message = req.body.message;

    let mailOptions = {
        from: name,
        to: process.env.EMAIL,
        subject: "Airship Albatross Contact Form",
        text: `Name: ${name} \n Email: ${email} \n Phone Number: ${phoneNumber} \n Message: ${message}`
    };
    transporter.sendMail(mailOptions);
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});