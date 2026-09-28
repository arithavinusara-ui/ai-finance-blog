import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // මෙතැනදී නරඹන්නා දුන් ඊමේල් එක ටර්මිනල් එකේ පින්ට් වෙනවා (Test කරලා බලන්න පුළුවන්)
    console.log('New subscriber email:', email);

    // ඉදිරියට මෙතැනට Database එකකට (MongoDB හෝ Supabase වගේ එකකට) 
    // මේ ඊමේල් එක save කරගන්න කෝඩ් එක දාන්න පුළුවන්.

    return NextResponse.json({ success: true, message: 'Subscribed successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}