import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extract form fields
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const service = formData.get('service') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      )
    }

    // Get email configuration from environment variables
    const gmailUser = process.env.GMAIL_USER || process.env.EMAIL_USER
    const gmailPassword = process.env.APP_PASSWORD || process.env.GMAIL_APP_PASSWORD

    if (!gmailUser || !gmailPassword) {
      console.error('Email configuration missing. Please set GMAIL_USER and APP_PASSWORD in .env')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPassword.replace(/\s/g, ''), // Remove spaces from app password
      },
    })

    // Email content
    const mailOptions = {
      from: gmailUser,
      to: 'arafconinfo@gmail.com',
      subject: subject || `Contact Form Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #25ABC4; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #25ABC4; }
              .value { margin-top: 5px; }
              .section { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; }
              .message-box { background-color: white; padding: 15px; border-radius: 8px; border-left: 4px solid #25ABC4; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Inquiry</h2>
              </div>
              <div class="content">
                <div class="section">
                  <h3>Contact Information</h3>
                  <div class="field">
                    <div class="label">Name:</div>
                    <div class="value">${name}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email:</div>
                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                  </div>
                  ${phone ? `
                  <div class="field">
                    <div class="label">Phone:</div>
                    <div class="value">${phone}</div>
                  </div>
                  ` : ''}
                  ${service ? `
                  <div class="field">
                    <div class="label">Service Interested In:</div>
                    <div class="value">${service}</div>
                  </div>
                  ` : ''}
                </div>

                ${subject ? `
                <div class="section">
                  <h3>Subject</h3>
                  <div class="value">${subject}</div>
                </div>
                ` : ''}

                <div class="section">
                  <h3>Message</h3>
                  <div class="message-box">
                    <div class="value" style="white-space: pre-wrap;">${message}</div>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

