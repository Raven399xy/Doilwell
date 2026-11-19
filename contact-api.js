/* Doilwell contact form API: sends website enquiries through Brevo SMTP.
   Setup:   npm i express nodemailer
   Secrets: put these in a .env file (never in the HTML):
              BREVO_SMTP_LOGIN=<your Brevo SMTP login; defaults to doilwellinstitute@gmail.com>
              BREVO_SMTP_KEY=<your Brevo SMTP key>
   Run:     node --env-file=.env contact-api.js      (Node 20.6+)
   Layout:  put the website files (contact.html etc.) in a folder named public/ beside this file. */
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const FROM = 'doilwellinstitute@gmail.com';                              // sender; must be a verified sender in Brevo
const TO = ['info@doilwellinstitute.com', 'doilwellinstitute@gmail.com'];  // inboxes that receive enquiries

const transport = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com', port: 587, secure: false,
  auth: { user: process.env.BREVO_SMTP_LOGIN || FROM, pass: process.env.BREVO_SMTP_KEY }
});

const app = express();
app.set('trust proxy', 1);
app.use(express.json({ limit: '20kb' }));

const hits = new Map(); // simple rate limit: 5 messages per 10 minutes per IP
app.post('/api/contact', async (req, res) => {
  const { name = '', email = '', subject = '', message = '', course = '', website = '' } = req.body || {};
  if (website) return res.json({ ok: true });                         // honeypot field: only bots fill it
  const now = Date.now(), recent = (hits.get(req.ip) || []).filter(t => now - t < 600000);
  if (recent.length >= 5) return res.status(429).json({ error: 'Too many messages. Try again later.' });
  hits.set(req.ip, [...recent, now]);
  if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email.trim()) || !subject.trim() || !message.trim() || message.length > 5000)
    return res.status(400).json({ error: 'Invalid form data.' });
  const clean = v => String(v).replace(/[\r\n"]+/g, ' ').trim();
  try {
    await transport.sendMail({
      from: `"Doilwell Institute" <${FROM}>`,
      to: TO,
      replyTo: `"${clean(name)}" <${email.trim()}>`,
      subject: `[Doilwell Enquiry] ${clean(subject)}`,
      text: `Name: ${clean(name)}\nEmail: ${email.trim()}\n${course ? `Course of interest: ${clean(course)}\n` : ''}\n${message}\n\n---\nSent via the Doilwell website contact form`
    });
    res.json({ ok: true });
  } catch (e) {
    console.error('Brevo SMTP error:', e.message);
    res.status(502).json({ error: 'Could not send message.' });
  }
});

app.use(express.static(path.join(__dirname, 'public')));
app.listen(process.env.PORT || 3000, () => console.log('Doilwell site and contact API running'));
