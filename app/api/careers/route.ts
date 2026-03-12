import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extract form fields
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const position = formData.get('position') as string
    const experience = formData.get('experience') as string
    const location = formData.get('location') as string
    const notice = formData.get('notice') as string
    const linkedin = formData.get('linkedin') as string
    const portfolio = formData.get('portfolio') as string
    const coverLetter = formData.get('coverLetter') as string
    const resume = formData.get('resume') as File | null

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !position || !experience || !resume) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      )
    }

    // Get email configuration from environment variables
    const gmailUser = process.env.GMAIL_USER || process.env.EMAIL_USER
    const gmailPassword = process.env.APP_PASSWORD || process.env.GMAIL_APP_PASSWORD

    // Debug logging (remove in production)
    console.log('Environment check:', {
      hasGmailUser: !!gmailUser,
      hasGmailPassword: !!gmailPassword,
      gmailUserLength: gmailUser?.length || 0,
      gmailPasswordLength: gmailPassword?.length || 0,
    })

    if (!gmailUser || !gmailPassword) {
      console.error('Email configuration missing.')
      console.error('GMAIL_USER:', gmailUser ? 'Set' : 'Missing')
      console.error('APP_PASSWORD:', gmailPassword ? 'Set' : 'Missing')
      console.error('Please ensure .env file contains:')
      console.error('GMAIL_USER=your-email@gmail.com')
      console.error('APP_PASSWORD=your-app-password')
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

    // Prepare resume attachment if provided
    const attachments = []
    if (resume && resume.size > 0) {
      const bytes = await resume.arrayBuffer()
      const buffer = Buffer.from(bytes)
      
      attachments.push({
        filename: resume.name,
        content: buffer,
        contentType: resume.type,
      })
    }

    // Email content
    const mailOptions = {
      from: gmailUser,
      to: 'arafconinfo@gmail.com',
      subject: `Career Application: ${position} - ${firstName} ${lastName}`,
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
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Career Application</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Position Applied For:</div>
                  <div class="value">${position}</div>
                </div>
                
                <div class="section">
                  <h3>Personal Information</h3>
                  <div class="field">
                    <div class="label">Full Name:</div>
                    <div class="value">${firstName} ${lastName}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email:</div>
                    <div class="value">${email}</div>
                  </div>
                  <div class="field">
                    <div class="label">Phone:</div>
                    <div class="value">${phone}</div>
                  </div>
                </div>

                <div class="section">
                  <h3>Professional Details</h3>
                  <div class="field">
                    <div class="label">Years of Experience:</div>
                    <div class="value">${experience}</div>
                  </div>
                  ${location ? `
                  <div class="field">
                    <div class="label">Preferred Location:</div>
                    <div class="value">${location}</div>
                  </div>
                  ` : ''}
                  ${notice ? `
                  <div class="field">
                    <div class="label">Notice Period:</div>
                    <div class="value">${notice}</div>
                  </div>
                  ` : ''}
                </div>

                ${linkedin || portfolio ? `
                <div class="section">
                  <h3>Links</h3>
                  ${linkedin ? `
                  <div class="field">
                    <div class="label">LinkedIn:</div>
                    <div class="value"><a href="${linkedin}" target="_blank">${linkedin}</a></div>
                  </div>
                  ` : ''}
                  ${portfolio ? `
                  <div class="field">
                    <div class="label">Portfolio/GitHub:</div>
                    <div class="value"><a href="${portfolio}" target="_blank">${portfolio}</a></div>
                  </div>
                  ` : ''}
                </div>
                ` : ''}

                ${coverLetter ? `
                <div class="section">
                  <h3>Cover Letter</h3>
                  <div class="value" style="white-space: pre-wrap;">${coverLetter}</div>
                </div>
                ` : ''}

                ${resume ? `
                <div class="section">
                  <p><strong>Resume attached:</strong> ${resume.name} (${(resume.size / 1024).toFixed(2)} KB)</p>
                </div>
                ` : ''}
              </div>
            </div>
          </body>
        </html>
      `,
      attachments,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    )
  }
}

