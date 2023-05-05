import bcrypt from "bcrypt";
import userRepository from "@/repositories/users-repository";
import { duplicatedEmailError } from "./errors";
import { users } from "@prisma/client";

export async function createUser({ email, password }: createUserParams) {
  await validateUniqueEmail(email);

  const hashPassword = await bcrypt.hash(password, 12);
  return userRepository.create({ email, password: hashPassword });
}

async function validateUniqueEmail(email: string) {
  console.log(email);
  const userWithSameEmail = await userRepository.findByEmail(email);

  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

const userService = {
  createUser,
};

export type createUserParams = Pick<users, "email" | "password">;
export * from "./errors";
export default userService;
