import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-access-denied',
  templateUrl: './denied.component.html',
  styleUrls: ['./denied.component.scss']
})
export class AccessDeniedComponent {
  constructor(
    private router: Router) {

  }

  goHome() {
    // window.history.back();
    this.router.navigate(['/']);
  }
}
