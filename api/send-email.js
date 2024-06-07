//api send-email.js

import { text } from 'stream/consumers';

const nodemailer = require('nodemailer');

export default async function handler(req, res){
    if(req.method === 'POST'){
        const { name, email, phone, message } = req.body;

        //Configure the email transport using nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: 'rajeevxrma@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            text: `You have received a new message from your website contact form. \n\n
                    Here are the details:\n
                    Name: ${name}\n
                    Email: ${email}\n
                    Phone: ${phone}\n
                    Message: ${message}`,
        };

        try{
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully '});
        } catch (error) {
            console.log('Error sending email:', error);
            res.status(500).json({ message: 'Error sending email' });
        } 
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}