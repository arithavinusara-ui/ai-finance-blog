import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'ඊමේල් ලිපිනයක් ලබා දෙන්න' }, { status: 400 });
    }

    // ඩේටාබේස් එකට ඊමේල් එක සේව් කිරීම
    const newSubscriber = await prisma.subscriber.create({
      data: { email },
    });

    return NextResponse.json({ message: 'සාර්ථකව සබ්ස්ක්‍රයිබ් විය!', newSubscriber }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'මෙම ඊමේල් ලිපිනය දැනටමත් පවතී හෝ දෝෂයක් සිදු විය.' }, { status: 500 });
  }
}