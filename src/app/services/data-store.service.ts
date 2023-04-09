import { Injectable } from '@angular/core';
import { User } from '../models/user.models';
import { Universe } from '../models/universe.models';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  public currentUser: User | null = null;
  public activeUniverse: Universe | null = null;

  constructor() {}
}
