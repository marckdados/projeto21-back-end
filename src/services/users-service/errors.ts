import { AplicationError } from "@/protocols";

export function duplicatedEmailError(): AplicationError {
  return {
    name: "DuplicatedEmailError",
    message: "There is already an user with given email",
  };
}
