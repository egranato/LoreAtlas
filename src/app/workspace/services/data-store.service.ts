import { Injectable } from '@angular/core';
import { IUniverse, Universe } from '../../models/universe.models';
import { IUser, User } from '../../models/user.models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DataStoreService {
  private activeUserSubject: BehaviorSubject<IUser>;
  private activeUniverseSubject: BehaviorSubject<IUniverse>;

  public activeUser: Observable<IUser>;
  public activeUniverse: Observable<IUniverse>;

  constructor() {
    this.activeUserSubject = new BehaviorSubject<IUser>(new User());
    this.activeUser = this.activeUserSubject.asObservable();

    this.activeUniverseSubject = new BehaviorSubject<IUniverse>(new Universe());
    this.activeUniverse = this.activeUniverseSubject.asObservable();
  }

  setActiveUser(user: IUser): void {
    this.activeUserSubject.next(user);
  }

  getActiveUser(): IUser {
    return this.activeUserSubject.getValue();
  }

  setActiveUniverse(universe: IUniverse): void {
    this.activeUniverseSubject.next(universe);
  }

  getActiveUniverse(): IUniverse {
    return this.activeUniverseSubject.getValue();
  }
}
