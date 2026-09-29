import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { Resend } from 'resend'
 
const prisma = new PrismaClient()
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
    }

    // Check if email already exists
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email },
    })

    if (existingSubscriber) {
      return NextResponse.json({ error: 'This email is already subscribed.' }, { status: 400 })
    }

    // ලංකාවේ හරියටම වෙලාව (Asia/Colombo) ලබාගැනීම
    const lankaTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" }));

    // Save to database with local Sri Lankan time
    await prisma.subscriber.create({
      data: { 
        email,
        createdAt: lankaTime, // මෙතනට ලංකාවේ වෙලාව හරියටම යනවා
      },
    })

    // Send professional Welcome Email in English for AI & Finance with Logo
    try {
      await resend.emails.send({
        from: 'FinTech Pulse <onboarding@resend.dev>',
        to: [email],
        subject: 'Welcome to FinTech Pulse! 🎉',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; background-color: #f9fafb; border-radius: 8px;">
            
            <!-- Logo eka pennana kotasa -->
            <div style="text-align: center; margin-bottom: 20px;">
              <img src="https://ai-finance-blog.vercel.app/logo.png" alt="FinTech Pulse Logo" width="100" style="display: block; margin: 0 auto; border-radius: 8px;" />
            </div>

            <h2 style="color: #4f46e5; text-align: center;">Welcome to FinTech Pulse!</h2>
            <p>Hello,</p>
            <p>Thank you for subscribing to our platform! We are thrilled to have you on board.</p>
            <p>By subscribing, you will be the first to explore our latest articles, insights on artificial intelligence and finance, and upcoming interactive tools designed to bring you immense value.</p>
            <p>Stay tuned for exciting updates coming your way very soon!</p>
            <br/>
            <p>Best regards,</p>
            <p><strong>The FinTech Pulse Team</strong></p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("EMAIL SENDING ERROR:", emailError);
    }

    return NextResponse.json({ message: 'Successfully subscribed!' }, { status: 200 })
  } catch (error: any) {
    console.error("DETAILED SUBSCRIBE ERROR:", error)
    return NextResponse.json({ error: error.message || 'Something went wrong. Please try again.' }, { status: 500 })
  }
}