import { prisma } from '@/lib/prisma';

type ParamsType = { page?: string; limit?: string };

export async function getUsers(params?: ParamsType) {
  try {
    const page = params?.page || '1';
    const limit = params?.limit || '20';

    const [users, total] = await prisma.$transaction([
      prisma.user.findMany({
        take: parseInt(limit),
        skip: (parseInt(page) - 1) * parseInt(limit),
      }),
      prisma.user.count(),
    ]);

    const pages = Math.ceil(total / parseInt(limit));

    return { success: true, data: users, pages };
  } catch (error) {
    return { success: false, data: null, pages: 0 };
  }
}
