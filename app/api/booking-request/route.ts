import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerClient } from '../../../lib/supabase/server';

const bookingSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  event: z.string().min(1),
  details: z.string().optional(),
  talentId: z.string().min(1),
});

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = bookingSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!serviceKey || !supabaseUrl) {
    return NextResponse.json({ ok: true, message: 'Stubbed response' }, { status: 200 });
  }

  try {
    const supabase = createServerClient();
    const { data, error } = await supabase.from('booking_requests').insert({
      name: parsed.data.name,
      email: parsed.data.email,
      event: parsed.data.event,
      details: parsed.data.details,
      talent_id: parsed.data.talentId,
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 200 });
    }

    await supabase.from('leads').insert({
      name: parsed.data.name,
      email: parsed.data.email,
      source: 'booking-request',
    });

    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Unexpected error' }, { status: 200 });
  }
}
