import { NextResponse } from 'next/server';
import { getImpactMetrics } from '@/lib/db';

export async function GET() {
  try {
    const metrics = await getImpactMetrics();
    return NextResponse.json(metrics);
  } catch (error) {
    console.error(error);
    return NextResponse.json([], { status: 500 });
  }
}
