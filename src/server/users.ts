import { prisma } from '@/lib/prisma';

type ParamsType = { page?: string; limit?: string };

export async function getUsers(params?: ParamsType) {
  try {
    const page = params?.page || '1';
    const limit = params?.limit || '10';

    const users = await prisma.user.findMany({
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit),
    });

    return { success: true, data: users };
  } catch (error) {
    return { success: false, data: null };
  }
}
