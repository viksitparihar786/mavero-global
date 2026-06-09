import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, country, category, message, formType } = body;

    if (!name || !email || !company) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const isCatalogue = formType === 'catalogue';

    const subject = isCatalogue
      ? `Catalogue Request — ${company} (${country || 'Unknown'})`
      : `New Sourcing Enquiry: ${category || 'General'} — ${company} (${country || 'Unknown'})`;

    // Team notification email
    await transporter.sendMail({
      from: '"Mavero Global Website" <director@maveroglobal.com>',
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: Arial, sans-serif; background: #f5f2ec; margin: 0; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 4px; overflow: hidden; border: 1px solid #e0d8c8;">
            <div style="background: #0d0d0b; padding: 32px 40px; border-bottom: 2px solid #b8944a;">
              <h1 style="color: #b8944a; font-family: Georgia, serif; font-size: 22px; margin: 0; font-weight: 400; letter-spacing: 0.05em;">MAVERO GLOBAL</h1>
              <p style="color: rgba(245,242,236,0.5); font-size: 12px; margin: 6px 0 0; letter-spacing: 0.15em; text-transform: uppercase;">${isCatalogue ? 'Catalogue Request Received' : 'New Sourcing Enquiry Received'}</p>
            </div>
            <div style="padding: 40px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #f0ebe0; color: #8a8780; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; width: 140px;">Name</td><td style="padding: 12px 0; border-bottom: 1px solid #f0ebe0; color: #0d0d0b; font-size: 15px;">${name}</td></tr>
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #f0ebe0; color: #8a8780; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Company</td><td style="padding: 12px 0; border-bottom: 1px solid #f0ebe0; color: #0d0d0b; font-size: 15px;">${company}</td></tr>
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #f0ebe0; color: #8a8780; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Email</td><td style="padding: 12px 0; border-bottom: 1px solid #f0ebe0; font-size: 15px;"><a href="mailto:${email}" style="color: #b8944a; text-decoration: none;">${email}</a></td></tr>
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #f0ebe0; color: #8a8780; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Country</td><td style="padding: 12px 0; border-bottom: 1px solid #f0ebe0; color: #0d0d0b; font-size: 15px;">${country || '—'}</td></tr>
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #f0ebe0; color: #8a8780; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">${isCatalogue ? 'Categories' : 'Category'}</td><td style="padding: 12px 0; border-bottom: 1px solid #f0ebe0; color: #0d0d0b; font-size: 15px;">${category || '—'}</td></tr>
                ${!isCatalogue ? `<tr><td style="padding: 12px 0; color: #8a8780; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; vertical-align: top;">Message</td><td style="padding: 12px 0; color: #0d0d0b; font-size: 15px; line-height: 1.6;">${(message || '').replace(/\n/g, '<br>')}</td></tr>` : ''}
              </table>
              <div style="margin-top: 32px; padding: 20px; background: #f5f2ec; border-left: 3px solid #b8944a; border-radius: 2px;">
                <p style="margin: 0; font-size: 13px; color: #3a3a38;">Reply directly to this email to respond to <strong>${name}</strong> at <a href="mailto:${email}" style="color: #b8944a;">${email}</a></p>
              </div>
            </div>
            <div style="padding: 20px 40px; background: #f0ebe0; border-top: 1px solid #e0d8c8;">
              <p style="margin: 0; font-size: 11px; color: #8a8780; letter-spacing: 0.08em;">MAVERO GLOBAL · MORADABAD, INDIA · director@maveroglobal.com</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Auto-reply to buyer
    const autoReplyIntro = isCatalogue
      ? `We've received your catalogue request and will send it to <strong>${email}</strong> within 24 hours.`
      : `We've received your sourcing enquiry and will respond <strong>within 24 hours</strong>.`;

    const autoReplyDetail = isCatalogue
      ? `Our catalogue covers Home Décor, Metal &amp; Brass Handicrafts, Lighting, Furniture, Tableware &amp; Serveware, Garden &amp; Outdoor, and Lifestyle &amp; Gifting — with indicative FOB pricing and MOQ information for each category.`
      : `Our team is reviewing your requirements for <strong style="color: #3a3a38;">${category || 'your product category'}</strong> from <strong style="color: #3a3a38;">${country || 'your market'}</strong>.`;

    await transporter.sendMail({
      from: '"Mavero Global" <director@maveroglobal.com>',
      to: email,
      subject: isCatalogue ? `Your catalogue request — Mavero Global` : `We received your enquiry — Mavero Global`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: Arial, sans-serif; background: #f5f2ec; margin: 0; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 4px; overflow: hidden; border: 1px solid #e0d8c8;">
            <div style="background: #0d0d0b; padding: 32px 40px; border-bottom: 2px solid #b8944a;">
              <h1 style="color: #b8944a; font-family: Georgia, serif; font-size: 22px; margin: 0; font-weight: 400; letter-spacing: 0.05em;">MAVERO GLOBAL</h1>
              <p style="color: rgba(245,242,236,0.5); font-size: 12px; margin: 6px 0 0; letter-spacing: 0.15em; text-transform: uppercase;">India's Home &amp; Lifestyle Sourcing Partner</p>
            </div>
            <div style="padding: 40px;">
              <h2 style="font-family: Georgia, serif; font-size: 26px; font-weight: 400; color: #0d0d0b; margin: 0 0 16px;">Thank you, ${name}.</h2>
              <p style="font-size: 15px; color: #3a3a38; line-height: 1.7; margin: 0 0 16px;">${autoReplyIntro}</p>
              <p style="font-size: 15px; color: #8a8780; line-height: 1.7; margin: 0 0 32px;">${autoReplyDetail}</p>
              <div style="padding: 24px; background: #f5f2ec; border-left: 3px solid #b8944a; margin-bottom: 32px;">
                <p style="margin: 0 0 8px; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #8a8780;">In the meantime</p>
                <p style="margin: 0; font-size: 14px; color: #3a3a38; line-height: 1.6;">If you have any urgent questions, reply to this email or write to us at <a href="mailto:director@maveroglobal.com" style="color: #b8944a;">director@maveroglobal.com</a></p>
              </div>
              <p style="font-size: 15px; color: #0d0d0b; margin: 0;">The Mavero Global Team</p>
            </div>
            <div style="padding: 20px 40px; background: #f0ebe0; border-top: 1px solid #e0d8c8;">
              <p style="margin: 0; font-size: 11px; color: #8a8780; letter-spacing: 0.08em;">MAVERO GLOBAL · MORADABAD, INDIA · director@maveroglobal.com</p>
              <p style="margin: 6px 0 0; font-size: 11px; color: #b8b5af;">UK · EU · US · Canada · Australia · Middle East</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
