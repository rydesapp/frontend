export interface UserRawData {
  id: number;
  username: string;
  fullName: string;
  image: string;
}

export type UserField = keyof UserRawData;

class User {
  private id: number;

  private username: string;

  private _fullName: string;

  private image: string;

  constructor(userData: UserRawData) {
    this.id = userData.id;
    this.username = userData.username;
    this.fullName = userData.fullName;
    this.image = userData.image;
  }

  public get fullName(): string {
    return this._fullName;
  }

  public set fullName(value: string) {
    this._fullName = value;
  }
}

export default User;
