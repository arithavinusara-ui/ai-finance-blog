import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
 
const prisma = new PrismaClient()

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

    return NextResponse.json({ message: 'Successfully subscribed!' }, { status: 200 })
  } catch (error: any) {
    console.error("DETAILED SUBSCRIBE ERROR:", error)
    return NextResponse.json({ error: error.message || 'Something went wrong. Please try again.' }, { status: 500 })
  }
}