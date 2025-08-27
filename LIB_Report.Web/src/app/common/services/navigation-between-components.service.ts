import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {NavigationBetweenComponentsModel} from '@common/models/navigation-between-components.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationBetweenComponentsService {

  public navigationBetweenComponents = new BehaviorSubject<NavigationBetweenComponentsModel>(new NavigationBetweenComponentsModel());
  currentNavigationBetweenComponents = this.navigationBetweenComponents.asObservable();

  constructor() {
  }


  setNavigationBetweenComponentsState(data: NavigationBetweenComponentsModel) {
    this.navigationBetweenComponents.next(data);
  }
}
