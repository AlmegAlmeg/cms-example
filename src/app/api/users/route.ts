import { prisma } from '@/lib/prisma';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '10';

    const users = await prisma.user.findMany({
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit),
    });

    const response = {
      success: true,
      data: users,
    };

    return new Response(JSON.stringify(response), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ success: false, data: null }), { status: 500 });
  }
  // return new Response('Hello, World!', { status: 200 });
}
