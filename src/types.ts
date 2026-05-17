export interface UserDetails {
  id: number;
  name: string;
  email: string;
  role: string;
  city: string;
}

export type UserDetailsUpdate = Partial<Omit<UserDetails, "id">>;

