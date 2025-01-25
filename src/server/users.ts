import { prisma } from '@/lib/prisma';

type ParamsType = { page?: string; limit?: string; search?: string };

export async function getUsers(params?: ParamsType) {
  try {
    const page = params?.page || '1';
    const limit = params?.limit || '10';
    const search = params?.search || '';

    const [users, total] = await prisma.$transaction([
      prisma.user.findMany({
        take: parseInt(limit),
        skip: (parseInt(page) - 1) * parseInt(limit),
        where: {
          OR: [
            { name: { contains: search } },
            { email: { contains: search } },
            { phone: { contains: search } },
          ],
        },
      }),
      prisma.user.count({
        where: {
          OR: [
            { name: { contains: search } },
            { email: { contains: search } },
            { phone: { contains: search } },
          ],
        },
      }),
    ]);

    const pages = Math.ceil(total / parseInt(limit));

    return { success: true, data: users, pages };
  } catch {
    return { success: false, data: null, pages: 0 };
  }
}
