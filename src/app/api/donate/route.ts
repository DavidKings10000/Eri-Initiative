import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const requestedAmount = Number(body.amount || 1000);

    if (!Number.isFinite(requestedAmount) || requestedAmount < 100) {
      return NextResponse.json({ error: 'Donation amount must be at least KES 100.' }, { status: 400 });
    }

    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_placeholder') {
      return NextResponse.json({ url: `${siteUrl}/get-involved?status=mock` });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2025-02-24.acacia' });

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'kes',
            product_data: { name: 'ERI Street Initiative Donation' },
            unit_amount: Math.round(requestedAmount),
          },
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/get-involved?status=success`,
      cancel_url: `${siteUrl}/get-involved?status=cancelled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Unable to start checkout' }, { status: 500 });
  }
}
