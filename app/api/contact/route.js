import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, mobile, message } = body;

    // Validate required fields
    if (!name || !email || !mobile || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate mobile number (10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile.replace(/[^0-9]/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid mobile number' },
        { status: 400 }
      );
    }

    // Get SMTP configuration from environment variables
    const smtpConfig = {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    };

    // Validate SMTP configuration
    if (!smtpConfig.host || !smtpConfig.auth.user || !smtpConfig.auth.pass) {
      console.error('SMTP configuration is missing');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport(smtpConfig);

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (error) {
      console.error('SMTP verification failed:', error);
      return NextResponse.json(
        { error: 'Email service configuration error. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Email content for admin/company
    const adminMailOptions = {
      from: `"${process.env.SMTP_FROM_NAME || 'INSURVEST Contact Form'}" <${smtpConfig.auth.user}>`,
      to: process.env.CONTACT_EMAIL || smtpConfig.auth.user,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2c5aa0 0%, #1e4080 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #2c5aa0; margin-bottom: 5px; display: block; }
            .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #2c5aa0; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <span class="label">Mobile:</span>
                <div class="value"><a href="tel:+91${mobile}">+91 ${mobile}</a></div>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="footer">
                <p>This email was sent from the INSURVEST website contact form.</p>
                <p>You can reply directly to this email to contact ${name}.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Mobile: +91 ${mobile}

Message:
${message}

---
This email was sent from the INSURVEST website contact form.
      `,
    };

    // Email content for user (confirmation)
    const userMailOptions = {
      from: `"${process.env.SMTP_FROM_NAME || 'INSURVEST'}" <${smtpConfig.auth.user}>`,
      to: email,
      subject: 'Thank you for contacting INSURVEST',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2c5aa0 0%, #1e4080 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
            .message { background: white; padding: 20px; border-radius: 4px; margin: 20px 0; border-left: 4px solid #28a745; }
            .contact-info { background: white; padding: 15px; border-radius: 4px; margin-top: 20px; }
            .contact-item { margin: 10px 0; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank You for Contacting INSURVEST</h2>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for reaching out to us! We have received your message and our team will get back to you within 24 hours.</p>
              
              <div class="message">
                <strong>Your Message:</strong><br>
                ${message.replace(/\n/g, '<br>')}
              </div>
              
              <div class="contact-info">
                <h4 style="color: #2c5aa0; margin-top: 0;">Need Immediate Assistance?</h4>
                <div class="contact-item">
                  <strong>Phone:</strong> <a href="tel:+919871487110">+91 9871487110</a>
                </div>
                <div class="contact-item">
                  <strong>Email:</strong> <a href="mailto:contact@insurvest.in">contact@insurvest.in</a>
                </div>
              </div>
              
              <div class="footer">
                <p>Best regards,<br><strong>INSURVEST Team</strong></p>
                <p>INSURANCE MARKETING FIRM</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Thank You for Contacting INSURVEST

Dear ${name},

Thank you for reaching out to us! We have received your message and our team will get back to you within 24 hours.

Your Message:
${message}

Need Immediate Assistance?
Phone: +91 9871487110
Email: contact@insurvest.in

Best regards,
INSURVEST Team
INSURANCE MARKETING FIRM
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully. We will get back to you soon!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later or contact us directly.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
