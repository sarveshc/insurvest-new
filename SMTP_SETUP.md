# SMTP Setup Guide for Contact Form

This guide will help you configure SMTP email functionality for the Contact Us form.

## Prerequisites

- Node.js and npm installed
- An email account with SMTP access (Gmail, Outlook, or any SMTP server)

## Installation

The `nodemailer` package has already been installed. If you need to reinstall:

```bash
npm install nodemailer
```

## Configuration

### Step 1: Create Environment Variables File

Create a `.env.local` file in the root directory of your project with the following variables:

```env
# SMTP Server Settings
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false

# SMTP Authentication
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Email Settings
SMTP_FROM_NAME=INSURVEST Contact Form
CONTACT_EMAIL=info@insurvest.com

# Environment
NODE_ENV=production
```

### Step 2: Configure Gmail (Recommended for Testing)

If you're using Gmail:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "INSURVEST Contact Form"
   - Copy the generated 16-character password
   - Use this password in `SMTP_PASSWORD`

3. **Update your `.env.local`**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-16-character-app-password
   ```

### Step 3: Configure Other Email Providers

#### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

#### Yahoo Mail
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

#### Custom SMTP Server
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_SECURE=false
# or for SSL
SMTP_PORT=465
SMTP_SECURE=true
```

## Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact Us form on your website

3. Fill out and submit the form

4. Check:
   - Your inbox (the email specified in `CONTACT_EMAIL`) should receive the contact form submission
   - The user's email should receive a confirmation email

## Troubleshooting

### Error: "SMTP configuration is missing"
- Make sure all environment variables are set in `.env.local`
- Restart your development server after adding environment variables

### Error: "SMTP verification failed"
- Check your SMTP credentials are correct
- For Gmail, ensure you're using an App Password, not your regular password
- Verify the SMTP host and port are correct for your email provider

### Error: "Failed to send email"
- Check your internet connection
- Verify your email provider allows SMTP access
- Check server logs for detailed error messages

## Security Notes

- **Never commit `.env.local` to version control** - it's already in `.gitignore`
- Use App Passwords instead of your main account password
- In production, use environment variables provided by your hosting platform
- Consider using a dedicated email service (SendGrid, Mailgun, etc.) for production

## Production Deployment

When deploying to production:

1. Set environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Use the same variable names as in `.env.local`
3. Ensure `NODE_ENV=production`
4. Test the contact form after deployment

## Support

If you encounter issues, check:
- Server console logs for detailed error messages
- Email provider's SMTP documentation
- Nodemailer documentation: https://nodemailer.com/
