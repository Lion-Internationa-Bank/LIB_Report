import {Injectable} from '@angular/core';
import {RouteInfo} from '@common/navigation/route-interface';

@Injectable()
export class SidebarService {

  constructor() {
  }

  removeMenuItem(menuItems: RouteInfo[], parentIndex, childIndex) {

    menuItems[parentIndex].children.splice(childIndex, 1);
    return menuItems;
  }
}
