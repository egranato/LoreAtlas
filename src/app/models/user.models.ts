export interface IUser {
  id: number;
  email: string;
  name: string;
  roles: string;
  created_at: Date;
  updated_at: Date;
}

export class User implements IUser {
  id: number;
  email: string;
  name: string;
  roles: string;
  created_at: Date;
  updated_at: Date;

  constructor(userData?: any) {
    this.id = userData?.id || null;
    this.email = userData?.email || null;
    this.name = userData?.name || null;
    this.roles = userData?.roles || null;
    this.created_at = userData?.created_at || null;
    this.updated_at = userData?.updated_at || null;
  }
}
