import { prisma } from '@/lib/prisma';
import { faker } from '@faker-js/faker';

export async function GET() {
  try {
    const users = faker.helpers.multiple(createDummyUser, { count: 2000 });

    await prisma.user.deleteMany();

    const allUsers = await prisma.user.createMany({
      data: [...users],
    });

    return new Response(JSON.stringify(allUsers), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

function createDummyUser() {
  return {
    name: faker.internet.username(),
    email: faker.internet.email(),
    outsideId: faker.number.int({ max: 100000 }),
    phone: faker.phone.number(),
    lastOrderDate: faker.date.past(),
    status: getRandomStatus(),
    street: faker.location.street(),
    city: faker.location.city(),
    houseNumber: faker.location.buildingNumber(),
  };
}

// function createDummyAddress() {
//   return {
//     street: faker.location.street(),
//     city: faker.location.city(),
//     houseNumber: faker.location.buildingNumber(),
//   };
// }

const UserStatus = {
  NORMAL: 'NORMAL',
  VIP: 'VIP',
  BLOCKED: 'BLOCKED',
  SUSPECTED: 'SUSPECTED',
};

type Status = keyof typeof UserStatus;

function getRandomStatus() {
  const statuses = [
    UserStatus.NORMAL,
    UserStatus.SUSPECTED,
    UserStatus.BLOCKED,
    UserStatus.VIP,
  ] as Status[];
  return statuses[Math.floor(Math.random() * statuses.length)];
}
