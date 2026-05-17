import seedUsers from "../data/users.json";
import { UserDetails, UserDetailsUpdate } from "../types";

let users: UserDetails[] = structuredClone(seedUsers) as UserDetails[];

export function getRandomUser(): UserDetails {
  const index = Math.floor(Math.random() * users.length);
  return users[index];
}

export function updateUserById(id: number, updates: UserDetailsUpdate): UserDetails | undefined {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return undefined;
  }

  users[userIndex] = { ...users[userIndex], ...updates };
  return users[userIndex];
}

export function resetUsers(): void {
  users = structuredClone(seedUsers) as UserDetails[];
}

