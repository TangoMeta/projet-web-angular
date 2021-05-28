import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Plat} from './rest.service';

@Injectable()
export class DataService {

  private platsSource = new BehaviorSubject<Plat[]>(null);
  currentPlats = this.platsSource.asObservable(); // currentPlats observe les modifications de platsSource

  constructor() {
  }

  searchPlats(plats: Plat[]): void {
    this.platsSource.next(plats); // platsSource les nouvelles valeurs de plats aux observateurs
  }
}
