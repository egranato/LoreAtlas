export interface IUniverse {
  id: number;
  title: string;
  description: string;
  userId: number;
  created_at: Date;
  updated_at: Date;
}

export class Universe implements IUniverse {
  id: number;
  title: string;
  description: string;
  userId: number;
  created_at: Date;
  updated_at: Date;

  constructor(universeData?: any) {
    this.id = universeData?.id || null;
    this.title = universeData?.title || null;
    this.description = universeData?.description || null;
    this.userId = universeData?.userId || null;
    this.created_at = universeData?.created_at || null;
    this.updated_at = universeData?.updated_at || null;
  }
}
