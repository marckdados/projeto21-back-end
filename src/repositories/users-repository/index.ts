import prisma from "@/config/database";

async function findByEmail(email: string) {
  return prisma.users.findUnique({
    where: {
      email,
    },
  });
}

async function create(data: createUser) {
  return prisma.users.create({
    data,
  });
}

type createUser = { email: string; password: string };

const userRepository = {
  create,
  findByEmail,
};

export default userRepository;
