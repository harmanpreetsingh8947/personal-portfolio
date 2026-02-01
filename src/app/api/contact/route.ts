import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend - will use RESEND_API_KEY from env
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
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

        // Check if Resend API key is configured
        if (!process.env.RESEND_API_KEY) {
            console.log('Contact form submission received (email not configured):');
            console.log({ name, email, subject, message });

            // For development without API key, just log and return success
            return NextResponse.json({
                success: true,
                message: 'Message received (email service not configured)',
            });
        }

        // Send email using Resend
        // Note: With onboarding@resend.dev, you can only send to your own verified email
        const toEmail = process.env.CONTACT_EMAIL;

        if (!toEmail) {
            console.error('CONTACT_EMAIL environment variable is not set');
            return NextResponse.json(
                { error: 'Email service is not properly configured' },
                { status: 500 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: toEmail,
            replyTo: email,
            subject: `${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h3>Message:</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${message.replace(/\n/g, '<br>')}</p>
          <hr style="border: 1px solid #eee;" />
          <p style="color: #888; font-size: 12px;">This message was sent from your portfolio contact form.</p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email. Please try again later.' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Email sent successfully',
            id: data?.id,
        });

    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
