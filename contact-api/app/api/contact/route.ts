import { NextResponse } from 'next/server';

type Subject = 'General Inquiry' | 'Tour Booking' | 'Custom Tour';

const SUBJECTS: Subject[] = ['General Inquiry', 'Tour Booking', 'Custom Tour'];

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function corsHeaders(origin: string | null) {
  const allowed = (process.env.CONTACT_ALLOWED_ORIGINS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  if (!origin) {
    return {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'POST, OPTIONS',
      'access-control-allow-headers': 'content-type',
      'access-control-max-age': '86400',
    };
  }

  if (allowed.length === 0 || allowed.includes(origin)) {
    return {
      'access-control-allow-origin': origin,
      'access-control-allow-methods': 'POST, OPTIONS',
      'access-control-allow-headers': 'content-type',
      'access-control-max-age': '86400',
      vary: 'origin',
    };
  }

  return {};
}

export async function OPTIONS(req: Request) {
  const origin = req.headers.get('origin');
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
}

export async function POST(req: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const adminEmail = process.env.BREVO_ADMIN_EMAIL;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || 'Website';

  const origin = req.headers.get('origin');
  const cors = corsHeaders(origin);
  if (origin && Object.keys(cors).length === 0) {
    return NextResponse.json({ error: 'Origin not allowed.' }, { status: 403 });
  }

  if (!apiKey || !adminEmail || !senderEmail) {
    return NextResponse.json(
      { error: 'Server is not configured.' },
      { status: 500, headers: cors },
    );
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400, headers: cors });
  }

  const fullName = String(body.fullName ?? '').trim();
  const email = String(body.email ?? '').trim().toLowerCase();
  const phone = String(body.phone ?? '').trim();
  const subject = String(body.subject ?? '').trim() as Subject;
  const message = String(body.message ?? '').trim();
  const website = String(body.website ?? '').trim(); // honeypot

  if (website) {
    return NextResponse.json({ ok: true }, { status: 200, headers: cors });
  }

  if (!fullName || fullName.length > 120) {
    return NextResponse.json({ error: 'Full name is required.' }, { status: 400, headers: cors });
  }
  if (!isValidEmail(email) || email.length > 200) {
    return NextResponse.json({ error: 'Valid email is required.' }, { status: 400, headers: cors });
  }
  if (!phone || phone.length > 40) {
    return NextResponse.json({ error: 'Phone number is required.' }, { status: 400, headers: cors });
  }
  if (!SUBJECTS.includes(subject)) {
    return NextResponse.json({ error: 'Invalid subject.' }, { status: 400, headers: cors });
  }
  if (!message || message.length > 5000) {
    return NextResponse.json({ error: 'Message is required.' }, { status: 400, headers: cors });
  }

  const brevoHeaders = {
    accept: 'application/json',
    'content-type': 'application/json',
    'api-key': apiKey,
  };

  const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: brevoHeaders,
    body: JSON.stringify({
      email,
      updateEnabled: true,
      listIds: [3],
      attributes: {
        FULLNAME: fullName,
        PHONE: phone,
        SUBJECT: subject,
        MESSAGE: message,
      },
    }),
  });

  if (!contactRes.ok) {
    const details = await contactRes.text().catch(() => '');
    return NextResponse.json(
      { error: 'Failed to save contact in Brevo.', details },
      { status: 502, headers: cors },
    );
  }

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5;">
      <h2>New Website Enquiry</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
        <tr><td><b>Full Name</b></td><td>${escapeHtml(fullName)}</td></tr>
        <tr><td><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><b>Phone</b></td><td>${escapeHtml(phone)}</td></tr>
        <tr><td><b>Subject</b></td><td>${escapeHtml(subject)}</td></tr>
        <tr><td style="vertical-align: top;"><b>Message</b></td><td>${escapeHtml(message).replaceAll('\n', '<br/>')}</td></tr>
      </table>
    </div>
  `;

  const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: brevoHeaders,
    body: JSON.stringify({
      sender: { email: senderEmail, name: senderName },
      to: [{ email: adminEmail }],
      subject: 'New Website Enquiry',
      htmlContent: html,
      replyTo: { email, name: fullName },
    }),
  });

  if (!emailRes.ok) {
    const details = await emailRes.text().catch(() => '');
    return NextResponse.json(
      { error: 'Saved contact, but failed to send admin email.', details },
      { status: 502, headers: cors },
    );
  }

  return NextResponse.json(
    { ok: true },
    {
      status: 200,
      headers: {
        ...cors,
        'cache-control': 'no-store',
        'x-content-type-options': 'nosniff',
      },
    },
  );
}

