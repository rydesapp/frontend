export interface UserRawData {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}
export interface MeResponse {
  me: UserRawData;
}

export type UserField = keyof UserRawData;
