import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/db';

export async function GET() {
  try {
    const posts = await getBlogPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    return NextResponse.json([], { status: 500 });
  }
}
